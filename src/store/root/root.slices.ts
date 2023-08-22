import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  color: string
}

const initialState: IInitialState = {
  color: '#ccc',
}

const rootSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeColor: (state, { payload }: PayloadAction<{ color: string }>) => {
      state.color = payload.color
    }
  }
})

export const { reducer, actions } = rootSlice