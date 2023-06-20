import { useSelector } from 'react-redux';
import { selectOneProduct } from '../../../features/products/products-selectors';

import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../../store';
import { getOneProduct } from '../../../features/products/products-actions';
import { useParams } from 'react-router-dom';

import { BiBookmark } from 'react-icons/bi';
import { BsFillBookmarkFill } from 'react-icons/bs';

import styles from './index.module.scss';
import {
  addToFavourites,
  removeToFavourites,
  selectAllFavourites,
} from '../../../features/favourites/favourites-slice';
import { addToCart } from '../../../features/cart/carts-slice';
import { setCartBar } from '../../../features/configs/configs-slice';

const ProductsDetails = () => {
  const [choice, setShoice] = useState('');

  const [scroll, setScroll] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const oneProduct = useSelector(selectOneProduct);
  const { favourites } = useSelector(selectAllFavourites);
  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getOneProduct(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    const progressBar = progressBarRef.current;

    if (progressBar) {
      const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = progressBar;

        const totalScroll = scrollTop;
        const windowHeight = scrollHeight - clientHeight;
        const scroll = totalScroll / windowHeight;

        setScroll(scroll);
      };

      progressBar.addEventListener('scroll', handleScroll);

      return () => {
        progressBar.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.composition}>
        <h5>Composition & Care</h5>
        <h5>Composition</h5>
        <p>
          We work with monitoring programmes to ensure compliance with our
          social, environmental and health and safety standards for our
          garments. <br /> <br /> To assess compliance, we have developed a
          programme of audits and continuous improvement plans.
        </p>
        <button>View more</button>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.main} ref={progressBarRef}>
          {oneProduct &&
            oneProduct.images.map((item) => (
              <div key={item} className={styles.img}>
                <img src={item} alt="" />
              </div>
            ))}
        </div>
        <div className={styles.progressBarContainer}>
          <div
            className={styles.progressBar}
            style={{ height: `${Math.round(scroll * 502)}px` }}
          ></div>
        </div>
      </div>
      <div className={styles.descr}>
        <div>
          <h5>{oneProduct?.title}</h5>
          {favourites.length !== 0 ? (
            <>
              {favourites.some((item) => item.item.id === oneProduct?.id) ? (
                <BsFillBookmarkFill
                  onClick={() => {
                    dispatch(removeToFavourites(oneProduct?.id));
                  }}
                  style={{ cursor: 'pointer' }}
                />
              ) : (
                <BiBookmark
                  onClick={() => {
                    if (oneProduct)
                      dispatch(
                        addToFavourites({
                          count: 1,
                          item: oneProduct,
                          size: choice,
                          subPrice: oneProduct?.price,
                        })
                      );
                  }}
                  style={{ cursor: 'pointer' }}
                />
              )}
            </>
          ) : (
            <BiBookmark
              onClick={() => {
                if (oneProduct)
                  dispatch(
                    addToFavourites({
                      count: 1,
                      item: oneProduct,
                      size: choice,
                      subPrice: oneProduct?.price,
                    })
                  );
              }}
              style={{ cursor: 'pointer' }}
            />
          )}
        </div>
        <p>{oneProduct?.price}$</p>
        <p>{oneProduct?.description}</p>
        <ul className={styles.sizeList}>
          <li
            onClick={(e) =>
              e.currentTarget.textContent &&
              setShoice(e.currentTarget.textContent)
            }
            style={
              choice === 'XS (extra small)'
                ? { fontWeight: '700' }
                : { fontWeight: 'normal' }
            }
          >
            XS (extra small)
          </li>
          <li
            onClick={(e) =>
              e.currentTarget.textContent &&
              setShoice(e.currentTarget.textContent)
            }
            style={
              choice === 'S (small)'
                ? { fontWeight: '700' }
                : { fontWeight: 'normal' }
            }
          >
            S (small)
          </li>
          <li
            onClick={(e) =>
              e.currentTarget.textContent &&
              setShoice(e.currentTarget.textContent)
            }
            style={
              choice === 'M (middle)'
                ? { fontWeight: '700' }
                : { fontWeight: 'normal' }
            }
          >
            M (middle)
          </li>
          <li
            onClick={(e) =>
              e.currentTarget.textContent &&
              setShoice(e.currentTarget.textContent)
            }
            style={
              choice === 'L (large)'
                ? { fontWeight: '700' }
                : { fontWeight: 'normal' }
            }
          >
            L (large)
          </li>
          <li
            onClick={(e) =>
              e.currentTarget.textContent &&
              setShoice(e.currentTarget.textContent)
            }
            style={
              choice === 'XL (extra large)'
                ? { fontWeight: '700' }
                : { fontWeight: 'normal' }
            }
          >
            XL (extra large)
          </li>
          <li
            onClick={(e) =>
              e.currentTarget.textContent &&
              setShoice(e.currentTarget.textContent)
            }
            style={
              choice === 'XXL (extra extra large)'
                ? { fontWeight: '700' }
                : { fontWeight: 'normal' }
            }
          >
            XXL (extra extra large)
          </li>
        </ul>
        <button
          onClick={() => {
            if (oneProduct) {
              if (choice !== '') {
                dispatch(addToCart({ item: oneProduct, size: choice }));
                dispatch(setCartBar(true));
              } else {
                alert('Choice size!!!');
              }
            }
          }}
        >
          Add to bag
        </button>
      </div>
    </div>
  );
};

export default ProductsDetails;
