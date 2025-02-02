import { object, string, ref } from 'yup';

const userSchema = () => object().shape({
  username: string().min(3).required(),
  password: string().required(),
});

export const channelSchema = (t, channelsName) => object({
  name: string()
       .trim()
       .required(t('modal.schema.required'))
       .min(3, t('modal.schema.minMax'))
       .max(20, t('modal.schema.minMax'))
       .notOneOf(channelsName, t('modal.schema.notOneOf'))
});


export default userSchema;