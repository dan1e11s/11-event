import { FC } from 'react';

import styles from './index.module.scss';

const Footer: FC<{ footerRef: any }> = ({ footerRef }) => {
  return (
    <div className={styles.footer}>
      <div ref={footerRef} className={styles.footer__content}>
        <h3 className={styles.title}>join our newsletter</h3>
        <ul className={styles.list}>
          <li>
            <a href="https://tiktok.com" target="_blank">
              tik tok
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank">
              instagram
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank">
              facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank">
              twitter
            </a>
          </li>
          <li>
            <a href="https://pinterest.com" target="_blank">
              pinterest
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank">
              youtube
            </a>
          </li>
          <li>
            <a href="https://spotify.com" target="_blank">
              spotify
            </a>
          </li>
        </ul>
        <div className={styles.footer__footer}>
          <span>cookies settings</span>
          <span>privacy and cookies policy</span>
          <span>terms of use</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
