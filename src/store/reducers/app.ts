import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  loading: boolean;
  isConnectedNetwork: boolean;
}

const initialState: InitialState = {
  loading: false,
  isConnectedNetwork: false,
};
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setIsConnectedNetwork: (state, action: PayloadAction<boolean>) => {
      state.isConnectedNetwork = action.payload;
    },
  },
});

export const { setLoading, setIsConnectedNetwork } = appSlice.actions;
export default appSlice.reducer;
