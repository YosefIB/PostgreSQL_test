import React from "react";
import picTeam from "../../pics/aboutUsPics/FOODZ-EXCHANGE-TEAM.jpg";

const AboutUs: React.FC = () => {
  return (
    <div>
      <h1 className="mb-4 text-center">About Us</h1>

      <p className="lead text-center">
        חברת <strong>Foodz.Exchange</strong> הוקמה בשנת 2016 ומובילה בייצוג וייבוא מוצרים
        ייחודיים לרשתות שיווק וקמעונאיות והתאמתם לתרבות הצריכה, לרגולציות
        ולתקנים הישראלים. החברה מקשרת בין רשתות שיווק ומזון לבין יצרנים מרחבי
        העולם – ללא מתווכים, במטרה לחסוך באופן משמעותי בעלויות.
      </p>

      <div className="text-center mt-5">
        <img
          src={picTeam}
          alt="Our Team"
          className="img-fluid rounded shadow"
          style={{ maxWidth: "100%", height: "auto", maxHeight: "400px" }}
        />
      </div>
    </div>
  );
};

export default AboutUs;
