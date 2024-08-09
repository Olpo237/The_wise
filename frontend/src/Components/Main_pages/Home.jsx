
import { useNavigate } from 'react-router-dom';
import './Main.css';
import logo from '../../assets/images/logo.png';
import image1 from '../../assets/images/bg1.jpg';
import image2 from '../../assets/images/bg2.jpg';
import image3 from '../../assets/images/bg3.jpg';
import image6 from '../../assets/images/bg6.jpg';
import image7 from '../../assets/images/bg7.jpg';
import image8 from '../../assets/images/bg8.jpg';

const Home = () => {
  const scrollLeft = () => {
    document.querySelector('.featured-section').scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    document.querySelector('.featured-section').scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  };

  const images = [image1, image2, image7, image6, image8, image1, image2, image3];

  return (
    <div className="home">
      <section className="welcome-section">
        <h2>Welcome Vans</h2>
        <h3>Quote of the day</h3>
      </section>
      <section className="image-background">
        <div className="background-overlay">
          <div className="image-container"></div>
        </div>
      </section>
      <div className="heading">
        <h3>For You</h3>
      </div>
      <div className="scroll-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <section className="featured-section">
          {images.map((image, index) => (
            <div className="featured-box" style={{ backgroundImage: `url(${image})` }} key={index}>
              <div className="feature-buttons">
                <button className="favorite-button"><i className="fas fa-heart"></i></button>
                <button className="download-button"><i className="fas fa-download"></i></button>
                <button className="share-button"><i className="fas fa-share"></i></button>
              </div>
            </div>
          ))}
        </section>
        <button className="scroll-button right" onClick={scrollRight}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="heading">
        <h3>Popular Authors</h3>
      </div>
      <div className="scroll-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <section className="featured-section">
          {images.map((image, index) => (
            <div className="featured-box" style={{ backgroundImage: `url(${image})` }} key={index}>
              <div className="feature-buttons">
                <button className="favorite-button"><i className="fas fa-heart"></i></button>
                <button className="download-button"><i className="fas fa-download"></i></button>
                <button className="share-button"><i className="fas fa-share"></i></button>
              </div>
            </div>
          ))}
        </section>
        <button className="scroll-button right" onClick={scrollRight}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="heading">
        <h3>Collections</h3>
      </div>
      <div className="scroll-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <section className="featured-section">
          {images.map((image, index) => (
            <div className="featured-box" style={{ backgroundImage: `url(${image})` }} key={index}>
              <div className="feature-buttons">
                <button className="favorite-button"><i className="fas fa-heart"></i></button>
                <button className="download-button"><i className="fas fa-download"></i></button>
                <button className="share-button"><i className="fas fa-share"></i></button>
              </div>
            </div>
          ))}
        </section>
        <button className="scroll-button right" onClick={scrollRight}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Home;

