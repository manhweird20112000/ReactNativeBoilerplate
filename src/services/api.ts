import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
} from 'axios';

const options: CreateAxiosDefaults = {
  baseURL: process.env.BASE_API,
  timeout: 10000,
  headers: {
    Authorization: 'Bearer ',
  },
};

const instance = axios.create(options);

instance.interceptors.request.use(
  (config: any | AxiosRequestConfig) => {
    const token = '';
    if (token) {
      // @ts-ignore
      config.headers.Authorization = 'Bearer ' + token;
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return Promise.resolve(response);
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default instance;
