import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

const navSlice = createSlice({
  name: 'navSlice',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      return {
        ...state,
        origin: action.payload,
      };
    },
    setDestination: (state, action) => {
      return {
        ...state,
        destination: action.payload,
      };
    },
    setTravelTimeInformation: (state, action) => {
      return {
        ...state,
        travelTimeInformation: action.payload,
      };
    },
  },
});

export const {setOrigin, setDestination, setTravelTimeInformation} =
  navSlice.actions;

export {navSlice};
