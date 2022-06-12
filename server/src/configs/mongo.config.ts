import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(),
    ...getMongoOptions(),
  };
};

const getMongoString = () => {
  return 'mongodb+srv://admin:qwert123@cluster0.mulie.mongodb.net/?retryWrites=true&w=majority';
};

const getMongoOptions = () => ({});
