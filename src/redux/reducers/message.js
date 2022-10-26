import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    message: "Initial message",
  },
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
  },
});

//export const stateMessage = (state) => state.message.message;

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;
