import { useSelector } from 'react-redux';
import { selectAllFavourites } from '../../features/favourites/favourites-slice';

import FavouritesItem from './FavouritesItem/FavouritesItem';

import styles from './index.module.scss';

const Favourites = () => {
  const { favourites } = useSelector(selectAllFavourites);

  return (
    <div className={styles.wrapper}>
      {favourites.map((item) => (
        <FavouritesItem key={item.item.id} item={item} />
      ))}
    </div>
  );
};

export default Favourites;
