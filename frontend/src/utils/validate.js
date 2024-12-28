import { object, string } from 'yup';

const userSchema = () => object().shape({
  username: string().min(3).required(),
  password: string().required(),
});

export default userSchema;