const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

// PostgreSQL connection configuration
const pool = new Pool({
    user: 'postgres',  // default PostgreSQL user
    host: 'localhost',
    database: 'yosef', // your database name
    password: 'yosk8520', // הכנס את הסיסמה שלך כאן
    port: 5432,
});

// Enable JSON parsing
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
        const result = await pool.query('SELECT * FROM users');
        console.log("yosef test")
        console.log('Query result:', result.rows);
        res.json(result.rows);
    } catch (err) {
        console.error('Error executing query:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
