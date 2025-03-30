import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UrlState {
  originalUrl: string;
  shortenedUrl: string;
}

const initialState: UrlState = {
  originalUrl: "",
  shortenedUrl: "",
};

const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    setOriginalUrl: (state, action: PayloadAction<string>) => {
      state.originalUrl = action.payload;
    },
    setShortenedUrl: (state, action: PayloadAction<string>) => {
      state.shortenedUrl = action.payload;
    },
    clearShortenedUrl(state) {
      state.shortenedUrl = "";
    },
  },
});

export const { setOriginalUrl, setShortenedUrl, clearShortenedUrl } =
  urlSlice.actions;
export default urlSlice.reducer;
