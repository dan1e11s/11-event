import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { selectAllConfigs } from '../../features/configs/configs-slice';
import { setSideBar } from '../../features/configs/configs-slice';

// icons
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

import styles from './index.module.scss';

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
