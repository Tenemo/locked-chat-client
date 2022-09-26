import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { formatISO } from "date-fns";
import { Imessage } from "../../types";


const initialState: { chat: Imessage[] } = {
  chat: [
    {
      text: "test",
      timeStamp: formatISO(Date.now()),
      nick: "admin",
    },
  ],
};

export const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessageXD: (state, action: PayloadAction<Imessage>) => {
      state.chat = [...state.chat, action.payload];
    },
  },
});

export const { addMessageXD} = messageSlice.actions
export default messageSlice.reducer
