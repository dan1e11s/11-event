import { useInView } from 'react-intersection-observer';

import styles from './index.module.scss';
import { useSelector } from 'react-redux';
import { selectAllConfigs } from '../../features/configs/configs-slice';

const MainContent = () => {
  const [myRef1, inView1] = useInView();
  const [myRef2, inView2] = useInView();
  const [myRef3, inView3] = useInView();
  const [myRef4, inView4] = useInView();
  const [myRef5, inView5] = useInView();

  const { isHome } = useSelector(selectAllConfigs);

  return (
    <div style={isHome ? { color: '#fff' } : { color: '#000' }}>
      <div className={`${styles.bg1} ${styles.child}`}>
        <p ref={myRef1} className={inView1 ? styles.animatedText : ''}>
          new
        </p>
      </div>
      <div className={`${styles.bg2} ${styles.child}`}>
        <p ref={myRef2} className={inView2 ? styles.animatedText : ''}>
          popular
        </p>
      </div>
      <div className={`${styles.bg3} ${styles.child}`}>
        <p ref={myRef3} className={inView3 ? styles.animatedText : ''}>
          untitled
        </p>
      </div>
      <div className={`${styles.bg4} ${styles.child}`}>
        <p ref={myRef4} className={inView4 ? styles.animatedText : ''}>
          join life
        </p>
      </div>
      <div className={`${styles.bg5} ${styles.child}`}>
        <p ref={myRef5} className={inView5 ? styles.animatedText : ''}>
          style
        </p>
      </div>
    </div>
  );
};

export default MainContent;
