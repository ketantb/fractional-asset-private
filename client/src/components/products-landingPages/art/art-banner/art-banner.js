import { useNavigate } from 'react-router-dom';
import styles from './art-banner.module.css';

const ArtBanner = () => {
    const navigate = useNavigate()
  return (
    <header>
      <article className={styles.banner}>
        <video autoPlay muted loop className={styles.videoBg}>
          <source src='./art-assets/alien.mp4' type='video/mp4' />
        </video>
        <section className={styles.videoOverlay}>
          <h1>Collect & Co-Own Masterpieces of Art</h1>
          <div>
            <button onClick={() => navigate('/art-page/gallery')}>
                Buy now
            </button>
            <button>
                Learn more
            </button>
          </div>
        </section>
      </article>
    </header>
  );
};

export default ArtBanner;