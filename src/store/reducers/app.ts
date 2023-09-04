import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  loading: boolean;
}

const initialState: InitialState = {
  loading: false,
};
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export default appSlice.reducer;
