import { FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';
import styles from './art.module.css';
import ArtBanner from './art-banner/art-banner';
import ArtSteps from './art-steps/art-steps';
import ArtSlider from './art-slider/art-slider';
import { useEffect } from 'react';

const ArtPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className={styles.main}>
      <ArtBanner />

      <ArtSteps />

      {/* SUBJECT MATTER */}
      <section className={styles.subjectMatter}>
        <h1>
          We are a growing community of <span>2,500+ co-owners</span> bringing
          together <span>Traditional Art</span> and <span>Web3</span>.
        </h1>
        <div className={styles.aboutParticle}>
          <div>
            <h1>About Particle</h1>
            <p>Find us on</p>
            <div>
              <a href='#'>
                <FaTwitter /> <p>Twitter</p>
              </a>
              <a href='#'>
                <FaInstagram /> <p>Instagram</p>
              </a>
              <a href='#'>
                <FaDiscord /> <p>Discord</p>
              </a>
            </div>
          </div>
          <p>
            Art is a reflection of humanity's genius — created by people
            inspired by the world and context in which they lived. <br />
            <br /> At Particle we want to change the idea that art is reserved
            only for a few. That's why we are leveraging the blockchain to
            radically reshape the way people collect and experience art as a
            whole. Making it more accessible and expanding the availability to
            more mediums and ways to interact with it.
          </p>
        </div>
        <div className={styles.aboutFoundation}>
          <h1>About Foundation</h1>
          <p>
            The Particle Foundation is a non-profit institution that promotes
            artistic exchange through diverse mediums. It showcases unique
            creative practices and fosters partnerships and public education
            initiatives, to challenge traditional leadership structures in art
            museums and instead activate communities. The Foundation entrusts
            its indefinite loaned permanent art collection to a collective of
            passionate advocates and partners with artists, curators,
            institutions, and galleries to advance the cultural dialogue. The
            Foundation has already organized exhibitions in several cities,
            including New York, Los Angeles, Miami, and Lisbon, and has
            partnered with prestigious institutions and galleries such as
            Phillips Auction House, Praz Delavallade and the Institute of
            Contemporary Art in Miami.
          </p>
        </div>
      </section>

      <ArtSlider />
    </main>
  );
};

export default ArtPage;