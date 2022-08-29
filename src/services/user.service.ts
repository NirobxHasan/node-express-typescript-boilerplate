import models from '@src/models';
import { NotFound } from '@src/utils/error';

export const allUser = async () => {
  return await models.User.find({});
};

export const saveUser = async (user: any) => {
  const model = new models.User(user);
  const savedUser = await model.save();
  return savedUser;
};

export const update = async (user: any) => {
  const id = user._id;
  const model = await models.User.findById(id);
  if (model) {
    model.username = user.username;
    model.save();
    return model;
  }
  throw new NotFound('User Not found by id: ' + id);
};
