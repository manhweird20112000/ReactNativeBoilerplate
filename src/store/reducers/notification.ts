import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';

interface INotification {
  content?: string | React.ReactNode;
  isShow?: boolean;
  icon?: React.ReactNode;
  textAction?: string;
  onAction?(): void;
}

interface InitialState {
  notification: INotification;
}

const initialState: InitialState = {
  notification: {
    content: '',
    textAction: '',
    isShow: false,
  },
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<INotification>) => {
      state.notification = action.payload;
    },
  },
});

export const { setNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
