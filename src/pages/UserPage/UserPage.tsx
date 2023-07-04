import Personal from '../../components/Personal/Personal';

import styles from './index.module.scss';

const UserPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Personal />
      </div>
    </div>
  );
};

export default UserPage;
