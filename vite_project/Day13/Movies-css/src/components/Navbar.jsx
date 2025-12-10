import React from "react";

const Navbar = () => {
  const menu = [
    { name: "Home" },
    { name: "Movies" },
    { name: "About" }
  ];

  return (
    <>
      <style>
        {`
          .navbar {
            width: 100%;
            background-color: #6b7280; /* gray-500 */
            color: white;
            padding: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .navbar-title {
            font-size: 24px;
            font-weight: bold;
          }

          .navbar-menu {
            display: flex;
            gap: 40px;
            font-size: 20px;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .navbar-item {
            padding: 8px;
            cursor: pointer;
            border-radius: 12px;
            transition: 0.3s ease;
          }

          .navbar-item:hover {
            color: #b91c1c; /* red-800 */
            background-color: white;
          }
        `}
      </style>

      <div className="navbar">
        <h1 className="navbar-title">Movies</h1>

        <ul className="navbar-menu">
          {menu.map((e, i) => (
            <li key={i} className="navbar-item">
              {e.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
