import { useAppDispatch } from '../../../../store';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../features/users/users-selectors';

import { BsChevronRight } from 'react-icons/bs';

import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import { setCurrentUser } from '../../../../features/users/users-slice';
import { endSession, getSession } from '../../../../firebase/storage/local';
import { useEffect } from 'react';
import { getUserByEmail } from '../../../../features/users/users-actions';

const Account = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    const userEmail = getSession().userEmail;
    if (userEmail !== null) {
      const getOneUser = async () => {
        const { payload } = await dispatch(getUserByEmail(userEmail));
        dispatch(setCurrentUser(payload));
      };
      getOneUser();
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
                dispatch(setCurrentUser(null));
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
