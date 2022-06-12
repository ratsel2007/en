import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(),
    ...getMongoOptions(),
  };
};

const getMongoString = () => {
  return 'mongodb://docker:mongopw@localhost:49153';
};

const getMongoOptions = () => ({});
