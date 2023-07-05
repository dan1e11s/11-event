import { useNavigate } from 'react-router-dom';

import { signInUser } from '../../firebase/firebase';

import { useFormik } from 'formik';
import * as Yup from 'yup';

// icons
import { BiErrorCircle } from 'react-icons/bi';

import styles from './index.module.scss';
import { setCurrentUser } from '../../features/users/users-slice';
import { useAppDispatch } from '../../store';
import { getUserByEmail } from '../../features/users/users-actions';
import { startSession } from '../../firebase/storage/local';
import { User } from '../../features/users/types';

const LoginForm = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        await signInUser(values.email, values.password);
        const { payload } = (await dispatch(getUserByEmail(values.email))) as {
          payload: User;
        };
        dispatch(setCurrentUser(payload));
        startSession(payload.firstName, values.email);
        navigate('/');
      } catch (error) {
        if (error instanceof Error) {
          console.log('Error', error.message);
        }
      }
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Invalid email')
        .required('Please enter email!'),
      password: Yup.string()
        .required('Please enter password!')
        .min(6, 'Password is too short'),
    }),
  });

  return (
    <div className={styles.wrapper}>
      <div>
        <h4>Login to your account</h4>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formItem}>
            <input
              name="email"
              value={values.email}
              className={styles.formInput}
              style={
                errors.email && touched.email ? { borderColor: '#ff0000' } : {}
              }
              type="text"
              placeholder=" "
              onChange={handleChange}
            />
            <label className={styles.formLabel}>e-mail</label>
            {errors.email && touched.email && (
              <div className={styles.error}>
                <BiErrorCircle />
                <p className={styles.errorText}>{errors.email}</p>
              </div>
            )}
          </div>
          <div className={styles.formItem}>
            <input
              name="password"
              value={values.password}
              className={styles.formInput}
              type="password"
              style={
                errors.password && touched.password
                  ? { borderColor: '#ff0000' }
                  : {}
              }
              placeholder=" "
              onChange={handleChange}
            />
            <label className={styles.formLabel}>password</label>
            {errors.password && touched.password && (
              <div className={styles.error}>
                <BiErrorCircle />
                <p className={styles.errorText}>{errors.password}</p>
              </div>
            )}
          </div>
          <button type="submit" className={styles.logBtn}>
            Log in
          </button>
          <p className={styles.forgotText}>Have you forgotten your password?</p>
        </form>
      </div>
      <div>
        <h4>Need an account?</h4>
        <button
          className={styles.registerBtn}
          onClick={() => navigate('/register')}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
