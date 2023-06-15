import { useState } from 'react';
import styles from './index.module.scss';
import {
  setProductsCategory,
  setSearch,
} from '../../features/controls/controls-slice';
import { useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { selectSearch } from '../../features/controls/controls-selectors';

const SearchInput = () => {
  const [category, setCategory] = useState({
    kids: false,
    woman: true,
    man: false,
  });

  const dispatch = useAppDispatch();
  const search = useSelector(selectSearch);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.menu}>
        <li
          onClick={() => {
            dispatch(setProductsCategory("women's clothing"));
            setCategory({ kids: false, woman: true, man: false });
          }}
          className={category.woman ? styles.liActive : ''}
        >
          Woman
        </li>
        <li
          onClick={() => {
            dispatch(setProductsCategory("men's clothing"));
            setCategory({ kids: false, woman: false, man: true });
          }}
          className={category.man ? styles.liActive : ''}
        >
          Man
        </li>
        <li
          onClick={() => {
            dispatch(setProductsCategory("kid's clothing"));
            setCategory({ kids: true, woman: false, man: false });
          }}
          className={category.kids ? styles.liActive : ''}
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
