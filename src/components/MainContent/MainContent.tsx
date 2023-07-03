import { useSelector } from 'react-redux';
import { selectAllConfigs } from '../../features/configs/configs-slice';
import { useInView } from 'react-intersection-observer';

import styles from './index.module.scss';
import { useEffect, useRef } from 'react';
import { selectPhotos } from '../../features/photos/photos-selectors';
import { useAppDispatch } from '../../store';
import { fetchPhotos } from '../../features/photos/photos-actions';

const MainContent = () => {
  const [myRef1, inView1] = useInView();
  const [myRef2, inView2] = useInView();
  const [myRef3, inView3] = useInView();
  const [myRef4, inView4] = useInView();
  const [myRef5, inView5] = useInView();

  const bgRef = useRef<HTMLDivElement>(null);
  const bgRef2 = useRef<HTMLDivElement>(null);
  const bgRef3 = useRef<HTMLDivElement>(null);
  const bgRef4 = useRef<HTMLDivElement>(null);
  const bgRef5 = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  const { photos } = useSelector(selectPhotos);

  const { isHome } = useSelector(selectAllConfigs);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  useEffect(() => {
    if (
      bgRef.current &&
      bgRef2.current &&
      bgRef3.current &&
      bgRef4.current &&
      bgRef5.current
    ) {
      bgRef.current.style.background = `url(${photos[0]?.urls.regular})`;
      bgRef2.current.style.background = `url(${photos[1]?.urls.regular})`;
      bgRef3.current.style.background = `url(${photos[2]?.urls.regular})`;
      bgRef4.current.style.background = `url(${photos[3]?.urls.regular})`;
      bgRef5.current.style.background = `url(${photos[4]?.urls.regular})`;
    }
  }, [photos]);

  return (
    <div style={isHome ? { color: '#fff' } : { color: '#000' }}>
      <div ref={bgRef} className={`${styles.bg} ${styles.child}`}>
        <p ref={myRef1} className={inView1 ? styles.animatedText : ''}>
          new
        </p>
      </div>
      <div ref={bgRef2} className={`${styles.bg} ${styles.child}`}>
        <p ref={myRef2} className={inView2 ? styles.animatedText : ''}>
          popular
        </p>
      </div>
      <div ref={bgRef3} className={`${styles.bg} ${styles.child}`}>
        <p ref={myRef3} className={inView3 ? styles.animatedText : ''}>
          untitled
        </p>
      </div>
      <div ref={bgRef4} className={`${styles.bg} ${styles.child}`}>
        <p ref={myRef4} className={inView4 ? styles.animatedText : ''}>
          join life
        </p>
      </div>
      <div ref={bgRef5} className={`${styles.bg} ${styles.child}`}>
        <p ref={myRef5} className={inView5 ? styles.animatedText : ''}>
          style
        </p>
      </div>
    </div>
  );
};

export default MainContent;
