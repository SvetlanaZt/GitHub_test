import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData, IUsers, IItem } from "../type";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState: IUsers = {
  data: [],
  usersName: "",
  favourites: [],
};

export const userSlice = createSlice({
  name: "gitHub",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IItem[] | undefined>) => {
      state.data = action.payload;
    },
    setUsersName: (state, action: PayloadAction<string>) => {
      state.usersName = action.payload;
    },
    setAddFavourite: (state, action: PayloadAction<string>) => {
      state.favourites.push(action.payload);
    },
    setRemoveFavourite: (state, action: PayloadAction<string>) => {
      state.favourites = state.favourites.filter((f) => f !== action.payload);
    },
  },
});

const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  userSlice.reducer
);

export const { setData, setUsersName, setAddFavourite, setRemoveFavourite } =
  userSlice.actions;

export default userSlice.reducer;
