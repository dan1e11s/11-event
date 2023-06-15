import * as Yup from 'yup';

export const validateSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Please enter email!'),
  password: Yup.string()
    .required('Please enter password!')
    .min(6, 'Password is too short'),
  repeatPassword: Yup.string()
    .required('Please re-type your password')
    .oneOf([Yup.ref('password')], 'Password does not match'),
  firstName: Yup.string()
    .required('Please enter first name')
    .max(50, 'Too Long!'),
  lastName: Yup.string()
    .required('Please enter last name')
    .max(50, 'Too Long!'),
  address: Yup.string().required('Please enter address').max(50, 'Too Long!'),
  city: Yup.string().required('Please enter city!'),
  postcode: Yup.string().required('Please enter poscode!'),
  province: Yup.string().required('Please enter poscode!'),
  telephone: Yup.string().required('Please enter your phone number!'),
});
