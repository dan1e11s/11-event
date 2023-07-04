import styles from './index.module.scss';
import { useInView } from 'react-intersection-observer';

//components
import MainContent from '../../components/MainContent/MainContent';
import Footer from '../../components/Footer/Footer';

import { useAppDispatch } from '../../store';
import { setFooter, setIsHome } from '../../features/configs/configs-slice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../../features/users/users-selectors';
import { getUsers } from '../../features/users/users-actions';

const HomePage = () => {
  const [footerRef, inView] = useInView();
  const dispatch = useAppDispatch();

  const users = useSelector(selectAllUsers);
  console.log(users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setFooter(inView));
    dispatch(setIsHome(true));

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
