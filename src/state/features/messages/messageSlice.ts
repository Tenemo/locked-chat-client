import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { formatISO } from "date-fns";
import { Imessage } from "../../types";


const initialState: { chat: Imessage[] } = {
  chat: [
    {
      text: "test",
      timeStamp: formatISO(Date.now()),
      author: "admin",
    },
  ],
};

export const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Imessage>) => {
      state.chat = [...state.chat, action.payload];
    },
  },
});

export const { addMessage} = messageSlice.actions
export default messageSlice.reducer
