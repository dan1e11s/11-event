import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';

import { getProducts } from '../../../features/products/products-actions';
import { selectAllCart } from '../../../features/cart/cart-selectors';
import { selectRelatedProducts } from '../../../features/products/products-selectors';
import { setTotalPrice } from '../../../features/cart/carts-slice';

import CartItem from '../CartItem/CartItem';

import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';

const CartContent = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { cart, totalPrice } = useSelector(selectAllCart);

  const products = useSelector((state: RootState) =>
    selectRelatedProducts(state, cart)
  );

  useEffect(() => {
    dispatch(setTotalPrice());
    dispatch(getProducts());
  }, [cart, dispatch]);

  return (
    <>
      <div className={styles.cartContent}>
        <div className={styles.cartList}>
          {cart &&
            cart.map((item) => <CartItem key={item.item.id} cartItem={item} />)}
        </div>
        <div className={styles.cartRelated}>
          {products.map((item) => (
            <div
              key={item.id}
              style={{
                width: '45%',
                height: '185px',
                marginBottom: '20px',
                cursor: 'pointer',
              }}
              onClick={() => navigate(`/products/${item.id}`)}
            >
              <img
                src={item.image}
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.cartTotal}>
        <p>Total: {Math.round(totalPrice)}$</p>
        <button>continue</button>
      </div>
    </>
  );
};

export default CartContent;
