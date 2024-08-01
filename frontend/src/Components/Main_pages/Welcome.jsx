import './Main.css';
import logo from '../../assets/images/logo.png';
import image1 from '../../assets/images/bg1.jpg';
import image2 from '../../assets/images/bg2.jpg';
import image3 from '../../assets/images/bg3.jpg';
import image6 from '../../assets/images/bg6.jpg';
import image7 from '../../assets/images/bg7.jpg';
import image8 from '../../assets/images/bg8.jpg';

const Welcome = () => {
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

  return (
    <div className="home">
      <header className="header">
        <div className="logo-section">
          <img src={logo} alt="Site Logo" className="logo" />
          <h1 className="site-name">The Wise</h1>
        </div>
        <nav className="nav">
          <ul>
            <li>Home</li>
            <li>Collections</li>
            <li>Authors</li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Register</button>
        </div>
      </header>
      <section className="welcome-section">
        <h2>Welcome to The Wise</h2>
        <h3>Quote of the day</h3>
      </section>
      <section className="image-background">
        <div className="background-overlay">
          <div className="image-container">
    
          </div>
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
          <div className="featured-box" style={{ backgroundImage: `url(${image1})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image2})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image7})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image6})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image8})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image1})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image2})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image3})` }}>
          </div>
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
          <div className="featured-box" style={{ backgroundImage: `url(${image1})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image2})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image7})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image6})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image8})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image1})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image2})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image3})` }}>
          </div>
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
          <div className="featured-box" style={{ backgroundImage: `url(${image1})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image2})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image7})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image6})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image8})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image1})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image2})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image3})` }}>
          </div>
        </section>
        <button className="scroll-button right" onClick={scrollRight}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>

  );
}

export default Welcome;
