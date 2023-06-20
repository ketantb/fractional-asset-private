import { useNavigate } from 'react-router-dom';
import './jewellery-banner.css';

const JewelleryBanner = () => {
  const navigate = useNavigate();

  return (
    <header>
      <article className="banner">
        {/* <video autoPlay muted loop className="videoBg">
          <source src='./art-assets/alien.mp4' type='video/mp4' />
        </video> */}
        <img src='https://tiimg.tistatic.com/fp/1/003/339/diamond-necklace-547.jpg' alt='diamond-necklace'/>
        <section className="videoOverlay">
          <h1>Collect & Co-Own Masterpieces of Art</h1>
          <div className="buttons">
            <button className="buyButton" onClick={() => navigate('/art-page/gallery')}>
              Buy now
            </button>
            <button className="learnButton">
              Learn more
            </button>
          </div>
        </section>
      </article>
    </header>
  );
};

export default JewelleryBanner;