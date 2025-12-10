import leo from "../assets/img/Leo_(2023_Indian_film).jpg";
import Movies from "../assets/img/image.png";
import drogan from "../assets/img/drogan.jpg";

const Card = () => {
  return (
    <>
      <style>
        {`
          .cards-wrapper {
            background-color: #fde68a; /* amber-200 */
            display: flex;
            padding: 40px;
            margin: 8px;
            justify-content: space-around;
          }

          .card-box {
            background-color: #9ca3af; /* gray-400/500 mix */
            padding: 20px;
            display: flex;
            flex-direction: column;
            border-radius: 10px;
            align-items: center;
          }

          .card-image {
            width: 150px;
            height: 180px;
            object-fit: cover;
            border-radius: 6px;
          }

          .card-button {
            padding: 8px 20px;
            margin: 10px;
            cursor: pointer;
            border-radius: 16px;
            border: none;
            background-color: #f3f4f6; /* light gray */
            transition: 0.3s ease;
            font-weight: bold;
          }

          .card-button:hover {
            background-color: black;
            color: white;
          }
        `}
      </style>

      <div className="cards-wrapper">
        <div className="card-box">
          <img className="card-image" src={leo} alt="" />
          <button className="card-button">Ticket Booking</button>
        </div>

        <div className="card-box">
          <img className="card-image" src={Movies} alt="" />
          <button className="card-button">Ticket Booking</button>
        </div>

        <div className="card-box">
          <img className="card-image" src={drogan} alt="" />
          <button className="card-button">Ticket Booking</button>
        </div>
      </div>
    </>
  );
};

export default Card;