import { object, string } from 'yup';

const userSchema = (t) => object().shape({
  username: string().required(),
  password: string().required(),
});

export default userSchema;