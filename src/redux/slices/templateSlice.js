import { createSlice } from "@reduxjs/toolkit";
import apiService from "../../api/axios";
import { apiEndpoints } from "../../api/apiEndPoint";
import { convertCardData, convertUserCardData } from "@/util/cardHelper";
const initialState = {
  cardsData: [],
  userDetails: {},
  loading: false,
};

const templateSlice = createSlice({
  name: "templateSlice",
  initialState,
  reducers: {
    setCards(state, { payload }) {
      state.cardsData = convertCardData(payload);
    },
    setLoading(state, { payload }) {
      state.loading = payload;
    },
    setUserPersonalDetails(state, { payload }) {
      if (payload.length > 0) {
        state.userDetails = convertUserCardData(payload);
      } else {
        state.userDetails = {};
      }
    },
  },
});

export const { setCards, setLoading, setUserPersonalDetails } =
  templateSlice.actions;
export default templateSlice.reducer;

export const getCardsByUserData = (userId) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await apiService.get(
      `${apiEndpoints.getTemplate}/${userId}`
    );

    console.log("response", response.data.data);
    dispatch(setCards(response.data.data));
    dispatch(setUserPersonalDetails(response.data.data));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
  }
};
