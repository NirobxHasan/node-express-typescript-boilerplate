import Joi from 'joi';

const schema = Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(30),
});

const validate = (data: Idata) => {
  const result = schema.validate(data);
  data.createAt = new Date();
  result.value = data;
  return result;
};

interface Idata {
  username: string;
  createAt?: Date;
}
export default validate;
