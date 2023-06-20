import { RiArrowDownFill } from 'react-icons/ri';

import { steps } from '../jewellery-configs';
import styles from './jewellery-steps.module.css';

const JewellerySteps = () => {
  return (
    <section className={styles.steps}>
      <div className={styles.initiate}>
        <p>Or learn how it works</p>
        <RiArrowDownFill style={{ fontSize: '25px' }} />
      </div>
      <>
        {steps.map((i, j) => (
          <div
            key={j}
            className={`${styles.step} ${
              j % 2 === 0 ? styles.stepEven : styles.stepOdd
            }`}
          >
            <div>
              <span>{`0${j + 1}`}</span>
              <div>
                <h1>{i.title}</h1>
                <p>{i.content}</p>
                <hr />
              </div>
            </div>
            <img src={i.img} alt={i.img} />
          </div>
        ))}
      </>
    </section>
  );
};

export default JewellerySteps;