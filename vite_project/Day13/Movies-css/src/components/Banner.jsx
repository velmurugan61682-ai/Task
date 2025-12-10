import banners from "../assets/img/banners movie.avif";

const Banner = () => (
  <>
    <style>
      {`
        .banner-container {
          width: 100%;
          border-radius: 12px;
          margin: 4px;
          display: flex;
          justify-content: center;
        }

        .banner-content {
          display: flex;
          flex-direction: column;
          height: 100%;
          align-items: center;
          width: 100%;
          background-color: #fbbf24; /* amber-400 */
          border-radius: 12px;
        }

        .banner-image {
          width: 400px;
          height: 80px;
          padding: 4px;
          object-fit: cover;
        }

        .banner-title {
          padding: 12px;
          text-align: center;
          font-size: 22px;
          font-weight: bold;
        }

        .banner-button {
          padding: 10px 30px;
          margin-bottom: 10px;
          cursor: pointer;
          border-radius: 20px;
          border: none;
          background-color: white;
          color: black;
          transition: 0.3s ease;
        }

        .banner-button:hover {
          background-color: black;
          color: white;
        }
      `}
    </style>

    <div className="banner-container">
      <div className="banner-content">
        <img className="banner-image" src={banners} alt="" />
        <h1 className="banner-title">ALL MOVIES 2025</h1>
        <button className="banner-button">Explore More</button>
      </div>
    </div>
  </>
);

export default Banner;
    