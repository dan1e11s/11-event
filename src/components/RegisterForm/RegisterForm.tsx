import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  getCodeNumber,
  getCountry,
  getNameCountry,
  selectCountries,
} from '../../features/countries/country-slice';
import { useAppDispatch } from '../../store';

//validations
import { useFormik } from 'formik';
import { validateSchema } from './validateSchema';

//icons
import { BiErrorCircle } from 'react-icons/bi';

// firebase
import { createUser } from '../../firebase/firebase';

import { addUser } from '../../features/users/users-actions';
import { setCurrentUser } from '../../features/users/users-slice';

import styles from './index.module.scss';
import { startSession } from '../../firebase/storage/local';

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const { countries, nameCountry, codeNumber } = useSelector(selectCountries);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCodeNumber(nameCountry));
  }, [dispatch, nameCountry]);

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
      firstName: '',
      lastName: '',
      address: '',
      address2: '',
      city: '',
      postcode: '',
      province: '',
      telephone: '',
    },
    onSubmit: async (values) => {
      try {
        await createUser(values);
        await dispatch(addUser(values));
        dispatch(setCurrentUser(values));
        startSession(values.firstName, values.email);
        navigate('/');
      } catch (error) {
        if (error instanceof Error) {
          console.log('Error', error.message);
        }
      }
    },
    validationSchema: validateSchema,
  });

  return (
    <div className={styles.wrapper}>
      <h4>Personal details</h4>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formContent}>
          <div className={styles.formItem}>
            <input
              type="email"
              placeholder=" "
              name="email"
              onChange={handleChange}
              value={values.email}
              style={
                errors.email && touched.email ? { borderColor: '#ff0000' } : {}
              }
            />
            <label htmlFor="">e-mail</label>
            {errors.email && touched.email && (
              <div className={styles.error}>
                <BiErrorCircle />
                <p className={styles.errorText}>{errors.email}</p>
              </div>
            )}
          </div>
        </div>
        <div className={styles.formContent}>
          <div className={styles.formItem}>
            <input
              type="password"
              placeholder=" "
              name="password"
              onChange={handleChange}
              value={values.password}
              style={
                errors.password && touched.password
                  ? { borderColor: '#ff0000' }
                  : {}
              }
            />
            <label htmlFor="">password</label>
            {errors.password && touched.password && (
              <div className={styles.error}>
                <BiErrorCircle />
                <p className={styles.errorText}>{errors.password}</p>
              </div>
            )}
          </div>
          <div className={styles.formItem}>
            <input
              type="password"
              placeholder=" "
              name="repeatPassword"
              onChange={handleChange}
              value={values.repeatPassword}
              style={
                errors.repeatPassword && touched.repeatPassword
                  ? { borderColor: '#ff0000' }
                  : {}
              }
            />
            <label htmlFor="">repeat password</label>
            {errors.repeatPassword && touched.repeatPassword && (
              <div className={styles.error}>
                <BiErrorCircle />
                <p className={styles.errorText}>{errors.repeatPassword}</p>
              </div>
            )}
          </div>
        </div>
        <div className={styles.formContent}>
          <div className={styles.formItem}>
            <input
              type="text"
              placeholder=" "
              name="firstName"
              onChange={handleChange}
              value={values.firstName}
              style={
                errors.firstName && touched.firstName
                  ? { borderColor: '#ff0000' }
                  : {}
              }
            />
            <label htmlFor="">first name</label>
            {errors.firstName && touched.firstName && (
              <div className={styles.error}>
                <BiErrorCircle />
                <p className={styles.errorText}>{errors.firstName}</p>
              </div>
            )}
          </div>
          <div className={styles.formItem}>
            <input
              type="text"
              placeholder=" "
              name="lastName"
              onChange={handleChange}
              value={values.lastName}
              style={
                errors.lastName && touched.lastName
                  ? { borderColor: '#ff0000' }
                  : {}
              }
            />
            <label htmlFor="">last name</label>
            {errors.lastName && touched.lastName && (
              <div className={styles.error}>
                <BiErrorCircle />
                <p className={styles.errorText}>{errors.lastName}</p>
              </div>
            )}
          </div>
        </div>
        <div className={styles.formContent}>
          <div className={styles.formItem}>
            <select
              className={styles.formSelect}
              value={nameCountry}
              onChange={(e) => {
                dispatch(getCodeNumber(nameCountry));
                dispatch(getNameCountry(e.target.value));
              }}
            >
              {countries.map((item: any) => (
                <option key={item.name.common}>{item.name.common}</option>
              ))}
            </select>
            <label htmlFor="">send to</label>
          </div>
        </div>
        <div className={styles.formContent}>
          <div className={styles.formItem}>
            <input
              type="text"
              placeholder=" "
              name="address"
              onChange={handleChange}
              value={values.address}
              style={
                errors.address && touched.address
                  ? { borderColor: '#ff0000' }
                  : {}
              }
            />
            <label htmlFor="">address</label>
            {errors.address && touched.address && (
              <div className={styles.error}>
                <BiErrorCircle />
                <p className={styles.errorText}>{errors.address}</p>
              </div>
            )}
          </div>
          <div className={styles.formItem}>
            <input type="text" placeholder=" " defaultValue="Optional" />
            <label htmlFor="">address 2</label>
            {errors.address && touched.address && (
              <div className={styles.error} style={{ visibility: 'hidden' }}>
                <BiErrorCircle />
                <p className={styles.errorText}>{errors.address}</p>
              </div>
            )}
          </div>
        </div>
        <div className={styles.formContent}>
          <div className={styles.formItem}>
            <input
              type="text"
              placeholder=" "
              name="city"
              onChange={handleChange}
              value={values.city}
              style={
                errors.city && touched.city ? { borderColor: '#ff0000' } : {}
              }
            />
            <label htmlFor="">city/town</label>
            {errors.city && touched.city && (
              <div className={styles.error}>
                <BiErrorCircle />
                <p className={styles.errorText}>{errors.city}</p>
              </div>
            )}
          </div>
          <div className={styles.formItem}>
            <input
              type="text"
              placeholder=" "
              name="postcode"
              onChange={handleChange}
              value={values.postcode}
              style={
                errors.postcode && touched.postcode
                  ? { borderColor: '#ff0000' }
                  : {}
              }
            />
            <label htmlFor="">postcode/zip</label>
            {errors.postcode && touched.postcode && (
              <div className={styles.error}>
                <BiErrorCircle />
                <p className={styles.errorText}>{errors.postcode}</p>
              </div>
            )}
          </div>
        </div>
        <div className={styles.formContent}>
          <div className={styles.formItem}>
            <input
              type="text"
              placeholder=" "
              name="province"
              onChange={handleChange}
              value={values.province}
              style={
                errors.province && touched.province
                  ? { borderColor: '#ff0000' }
                  : {}
              }
            />
            <label htmlFor="">state/province</label>
            {errors.province && touched.province && (
              <div className={styles.error}>
                <BiErrorCircle />
                <p className={styles.errorText}>{errors.province}</p>
              </div>
            )}
          </div>
          <div className={styles.formItem}>
            <input type="text" placeholder=" " readOnly value={codeNumber} />
            <label htmlFor="">prefix</label>
            {errors.province && touched.province && (
              <div className={styles.error} style={{ visibility: 'hidden' }}>
                <BiErrorCircle />
                <p className={styles.errorText}>error</p>
              </div>
            )}
          </div>
          <div className={styles.formItem}>
            <input
              type="phone"
              placeholder=" "
              name="telephone"
              onChange={handleChange}
              value={values.telephone}
              style={
                errors.telephone && touched.telephone
                  ? { borderColor: '#ff0000' }
                  : {}
              }
            />
            <label htmlFor="">telephone</label>
            {errors.telephone && touched.telephone && (
              <div className={styles.error}>
                <BiErrorCircle />
                <p className={styles.errorText}>{errors.telephone}</p>
              </div>
            )}
          </div>
        </div>
        <div className={styles.formContent}>
          <div className={styles.formCheckbox}>
            <label className={styles.checkbox}>
              <input type="checkbox" />
              <span>
                I want to receive personalised commercial communications from{' '}
                <span>EVENT</span> by email.
              </span>
            </label>
          </div>
          <div className={styles.formCheckbox}>
            <label className={styles.checkbox}>
              <input type="checkbox" />
              <span>
                I have read and understand the Privacy and Cookies Policy
              </span>
            </label>
          </div>
        </div>
        <div className={styles.formContent}>
          <div className={styles.formItem}>
            <button type="submit" className={styles.formBtn}>
              Create account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
