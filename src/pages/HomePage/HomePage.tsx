import styles from './index.module.scss';
import { useInView } from 'react-intersection-observer';

//components
import MainContent from '../../components/MainContent/MainContent';
import Footer from '../../components/Footer/Footer';

import { useAppDispatch } from '../../store';
import {
  setFooter,
  setIsHome,
  setUserName,
} from '../../features/configs/configs-slice';
import { useEffect } from 'react';
import { getSession } from '../../firebase/storage/local';

const HomePage = () => {
  const [footerRef, inView] = useInView();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFooter(inView));
    dispatch(setIsHome(true));
    dispatch(setUserName(getSession().userName));

    return () => {
      dispatch(setIsHome(false));
      dispatch(setFooter(false));
    };
  }, [dispatch, inView]);

  return (
    <div className={styles.parent}>
      <MainContent />
      <Footer footerRef={footerRef} />
    </div>
  );
};

export default HomePage;
