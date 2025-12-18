import banners from "../assets/img/banners movie.avif";
import "../css/Banner.css";
const Banner = () => (
  <>
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
    