import {all} from 'redux-saga/effects';
import example from '@sagas/example';

const sagas = [...example];

export default function* root() {
  yield all(sagas);
}
