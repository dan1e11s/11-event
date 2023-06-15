import { BsChevronRight } from 'react-icons/bs';

import styles from './index.module.scss';

const Settings = () => {
  return (
    <ul className={styles.settings}>
      <li className={styles.item}>
        <div>
          <p>Newsletter</p>
          <p className={styles.descr}>
            Select your interests and receive the latest news and trends each
            week.
          </p>
        </div>
        <BsChevronRight />
      </li>
      <li className={styles.item}>
        <div>
          <p>COMMUNICATION LANGUAGE</p>
          <p className={styles.descr}>
            Select your preferred language for news and alerts
          </p>
        </div>
        <BsChevronRight />
      </li>
      <li className={styles.item}>
        <div>
          <p>COOKIES SETTINGS</p>
          <p className={styles.descr}>Configure your privacy preferences</p>
        </div>
        <BsChevronRight />
      </li>
    </ul>
  );
};

export default Settings;
