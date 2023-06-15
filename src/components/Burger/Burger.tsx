import styles from './index.module.scss';

// icons
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

import { useSelector } from 'react-redux';
import { selectAllConfigs } from '../../features/configs/configs-slice';
import { useAppDispatch } from '../../store';
import { setSideBar } from '../../features/configs/configs-slice';

const Burger = () => {
  const { footer, sideBar, isHome, isCartPage } = useSelector(selectAllConfigs);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.burger} onClick={() => dispatch(setSideBar())}>
      {sideBar ? (
        <IoMdClose style={{ color: '#000' }} />
      ) : (
        <RxHamburgerMenu
          style={{
            color: `${footer ? '#000' : isHome ? '#fff' : '#000'}`,
            visibility: isCartPage ? 'hidden' : 'visible',
          }}
        />
      )}
    </div>
  );
};

export default Burger;
