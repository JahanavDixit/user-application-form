import { configureStore} from '@reduxjs/toolkit';

import { createAction } from '@reduxjs/toolkit';

const UPDATE_FIELD = 'UPDATE_FIELD';
const SUBMIT_FORM = 'SUBMIT_FORM';

// Define the action creators
export const updateField = createAction<{ key: string, value: any }>(UPDATE_FIELD);
export const submitForm = createAction<void>(SUBMIT_FORM);

interface PageOneState {
  name: string;
  address: string;
  phoneNumber: string;
  emailAddress: string;
}

interface PageTwoState {
  dateOfBirth: string;
  gender: string;
  photo: string;
}

interface store {
  pageone: PageOneState;
  pagetwo: PageTwoState;
}

// Define initial state
const initialState = {
  pageone:{
  name: '',
  address: '',
  phoneNumber: '',
  emailAddress: '',
  },
  pagetwo: {
  dateOfBirth: '',
  gender: '',
  photo: ''
  }
};

const formReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_FIELD:
      const { key, value } = action.payload;
      return {
        ...state,
        [key]: value,
      };
    case SUBMIT_FORM:
      return state;
    default:
      return state;
  }
};


const store = configureStore({
  reducer: formReducer,
  preloadedState: initialState,
});

//const store = createStore(formReducer, initialState);

export default store;




// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
