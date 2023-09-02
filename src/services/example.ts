import instance from './api';
import {AxiosResponse} from 'axios';

export function posts(): Promise<AxiosResponse> {
  return instance.get('posts');
}
