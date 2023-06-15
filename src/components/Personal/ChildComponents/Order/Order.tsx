import styles from './index.module.scss';
import { AiOutlineContainer } from 'react-icons/ai';

const Order = () => {
  return (
    <div className={styles.orderWrapper}>
      <div className={styles.orderContent}>
        <span>
          <AiOutlineContainer />
        </span>
        <p>You have not placed orders yet</p>
      </div>
    </div>
  );
};

export default Order;
