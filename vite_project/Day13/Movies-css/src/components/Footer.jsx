import React from "react";

const Footer = () => {
  return (
    <>
      <style>
        {`
          .footer-wrapper {
            margin-top: 48px;
            text-align: center;
            font-size: 14px;
            color: #6b7280; /* gray-500 */
          }

          .footer {
            width: 100%;
            background-color: black;
            color: white;
            padding: 24px 0;
            margin-top: 20px;
          }

          .footer-container {
            max-width: 900px;
            margin: 0 auto;
            text-align: center;
          }

          .footer-title {
            font-weight: 600;
            font-size: 20px;
            margin-bottom: 12px;
          }

          .footer-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 12px;
            font-size: 14px;
            color: #d1d5db; /* gray-300 */
          }

          .footer-links a {
            text-decoration: none;
            color: #d1d5db;
            transition: 0.3s ease;
          }

          .footer-links a:hover {
            color: white;
          }

          .footer-copy {
            font-size: 12px;
            color: #6b7280; /* gray-500 */
          }
        `}
      </style>

      <div className="footer-wrapper">
        <footer className="footer">
          <div className="footer-container">
            <h2 className="footer-title">My Movie Page</h2>

            <div className="footer-links">
              <a href="#">Home</a>
              <a href="#">Movies</a>
              <a href="#">About</a>
            </div>

            <p className="footer-copy">© 2025 My Movie Page. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
