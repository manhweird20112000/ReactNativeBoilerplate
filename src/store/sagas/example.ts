import { delay, takeLatest } from 'redux-saga/effects';

export function* getPosts() {
  yield delay(1000);
  console.log('example');
}

export default [takeLatest('EXAMPLE', getPosts)];
