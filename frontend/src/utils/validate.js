import { object, string } from 'yup';

const userSchema = () => object().shape({
  username: string().required(),
  password: string().required(),
});

export default userSchema;