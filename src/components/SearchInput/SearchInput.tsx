import styles from './index.module.scss';
import {
  setProductsCategory,
  setSearch,
} from '../../features/controls/controls-slice';
import { useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import {
  selectCategory,
  selectSearch,
} from '../../features/controls/controls-selectors';

const SearchInput = () => {
  const category = useSelector(selectCategory);

  const dispatch = useAppDispatch();
  const search = useSelector(selectSearch);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.menu}>
        <li
          onClick={() => {
            dispatch(setProductsCategory("women's clothing"));
          }}
          className={category === "women's clothing" ? styles.liActive : ''}
        >
          Woman
        </li>
        <li
          onClick={() => {
            dispatch(setProductsCategory("men's clothing"));
          }}
          className={category === "men's clothing" ? styles.liActive : ''}
        >
          Man
        </li>
        <li
          onClick={() => {
            dispatch(setProductsCategory("kid's clothing"));
          }}
          className={category === "kid's clothing" ? styles.liActive : ''}
        >
          Kids
        </li>
      </ul>
      <input
        className={styles.searchInp}
        type="text"
        placeholder="search for an item, colour, collection..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
    </div>
  );
};

export default SearchInput;
