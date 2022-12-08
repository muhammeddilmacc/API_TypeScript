import {cleanEnv, str, port} from 'envalid';

function validateEnv() {
  cleanEnv(process.env, {
    NODE_ENV: str({choices: ['development', 'production', 'test'], default: 'development'}),
    MONGO_PATH: str(),
    MONGO_USER: str(),
    MONGO_PASSWORD: str(),
    PORT: port({default: 3000}),
  });
}

export default validateEnv;