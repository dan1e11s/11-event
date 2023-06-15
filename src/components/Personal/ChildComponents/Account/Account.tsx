import { useEffect } from 'react';
import { useAppDispatch } from '../../../../store';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../features/users/users-selectors';
import { getOneUser } from '../../../../features/users/users-actions';

import { BsChevronRight } from 'react-icons/bs';

import styles from './index.module.scss';
import { endSession } from '../../../../firebase/storage/local';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      dispatch(getOneUser(userId));
    }
  }, [dispatch]);

  return (
    <div>
      {currentUser && (
        <div className={styles.main}>
          <p className={styles.title}>
            {currentUser.firstName} {currentUser.lastName}
          </p>
          <ul>
            <li className={styles.item}>
              <p>Adresses</p>
              <BsChevronRight />
            </li>
            <li className={styles.item}>
              <div>
                <p>Email</p>
                <p className={styles.email}>{currentUser.email}</p>
              </div>
              <BsChevronRight />
            </li>
            <li className={styles.item}>
              <div>
                <p>Change password</p>
                <p>{currentUser.password.split('').fill('.', 0).join('')}</p>
              </div>
              <BsChevronRight />
            </li>
          </ul>
          <div className={styles.signOut}>
            <p
              onClick={() => {
                endSession();
                navigate('/');
              }}
            >
              Sign out
            </p>
            <p className={styles.privacy}>
              At EVENT we take your privacy very seriously and are committed to
              the protection of your personal data. Learn more about how we care
              for and use your data in our <span>Privacy Policy</span>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
