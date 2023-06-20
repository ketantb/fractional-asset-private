import { gallery } from '../art-configs';
import styles from './art-gallery.module.css';

const ArtGallery = () => {
  return (
    <main className={styles.main}>
      <div>
        <img src='./art-assets/gallery-logo.webp' alt='gallery-logo' />
      </div>
      <section className={styles.cards}>
        {gallery.map((i, j) => (
          <div>
            <img src={i.img} alt={i.img} />
            <div className={styles.galleryData}>
              <div>
                <p className={styles.sale}>{i.sale}</p>
                <br />
                <p className={styles.title0}>{i.title[0]}</p>
                <p className={styles.title1}>{i.title[1]}</p>
              </div>
              <div>
                <p className={styles.price0}>{i.price[0]}</p>
                <p className={styles.price1}>{i.price[1]}</p>
                <br />
                <p className={styles.quantity0}>{i.quantity[0]}</p>
                <p className={styles.quantity1}>{i.quantity[1]}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default ArtGallery;