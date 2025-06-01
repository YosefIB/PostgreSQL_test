const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const port = 3001;

// PostgreSQL connection configuration
const pool = new Pool({
    user: 'postgres',  // default PostgreSQL user
    host: 'localhost',
    database: 'yosef', // your database name
    password: 'yosk8520', // הכנס את הסיסמה שלך כאן
    port: 5432,
});

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Serve static files from the public directory
app.use(express.static('public'));

// Test database connection
pool.connect()
    .then(() => console.log('Successfully connected to PostgreSQL'))
    .catch(err => console.error('Connection error:', err));

// Route to get all data from the yosef table
app.get('/api/data', async (req, res) => {
    try {
        console.log('Attempting to query users table...');
        const result = await pool.query('SELECT * FROM users ORDER BY id DESC');
        console.log('Query result:', result.rows);
        res.json(result.rows);
    } catch (err) {
        console.error('Error executing query:', err.message);
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/data', async (req, res) => {
    const { name, email } = req.body;
    try {
        console.log("entering POST route with data:", { name, email });
        const result = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Error inserting data:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// Register route
app.post('/api/register', async (req, res) => {
    const { firstName, lastName, email, phone, password } = req.body;

    try {
        // Check if user already exists
        const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userCheck.rows.length > 0) {
            return res.status(400).json({ error: 'Email already registered' });
        }

        // Insert new user
        const result = await pool.query(
            'INSERT INTO users (first_name, last_name, email, phone, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [firstName, lastName, email, phone, password] // In a real app, you should hash the password
        );

        res.status(201).json({
            message: 'Registration successful',
            user: {
                id: result.rows[0].id,
                firstName: result.rows[0].first_name,
                lastName: result.rows[0].last_name,
                email: result.rows[0].email
            }
        });
    } catch (err) {
        console.error('Error during registration:', err);
        res.status(500).json({ error: 'Registration failed' });
    }
});

// Login route
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query(
            'SELECT * FROM users WHERE email = $1 AND password = $2',
            [email, password] // In a real app, you should compare hashed passwords
        );

        if (result.rows.length > 0) {
            res.json({
                id: result.rows[0].id,
                firstName: result.rows[0].first_name,
                lastName: result.rows[0].last_name,
                email: result.rows[0].email
            });
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ error: 'Login failed' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
