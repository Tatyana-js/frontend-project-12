import { object, string, ref } from 'yup';

const userSchema = (t) => object().shape({
  username: string()
            .trim()
            .min(3, t('modal.schema.minMax'))
            .max(20,  t('modal.schema.minMax'))
            .required(t('modal.schema.required')),
  password: string()
            .required(t('modal.schema.required'))
            .min(6, t('signUpForm.minSymbolForPassword')),
  confirmPassword: string()
            .required(t('modal.schema.required'))
            .oneOf([ref('password')], t('signUpForm.oneOfPassword'))
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