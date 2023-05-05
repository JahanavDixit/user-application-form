import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
const initialState = {
  page1: {
    name: '',
    email: '',
    phone: '',
    add :'',
  },
  page2: {
    dob: '',
    gender: '',
    photo: '',
    quote : {}
  },
};

const formReducer = (state = initialState, action: { type: any; payload: { field: any; value: any; }; }) => {
  switch (action.type) {
    case 'UPDATE_PAGE_1':
      return {
        ...state,
        page1: {
          ...state.page1,
          [action.payload.field]: action.payload.value,
        },
      };
    case 'UPDATE_PAGE_2':
      return {
        ...state,
        page2: {
          ...state.page2,
          [action.payload.field]: action.payload.value,
        },
      };
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  form: formReducer,
});

export const store = configureStore({reducer:rootReducer})

export const updatePage1 = (field:any, value:any) => ({
  type: 'UPDATE_PAGE_1',
  payload: {
    field,
    value,
  },
});

export const updatePage2 = (field:any, value:any) => ({
  type: 'UPDATE_PAGE_2',
  payload: {
    field,
    value,
  },
});