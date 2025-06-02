import { createSlice } from "@reduxjs/toolkit";

const initialStateCostumer = {
  fullName: "",
  nationalID: "",
  createdAt: new Date().toISOString(),
};

const customerSlice = createSlice({
  name: "customer",
  initialState: initialStateCostumer,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = new Date().toISOString();
      },
    },
    updateName: (state, action) => {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;
/*
export default function customerReducer(state = initialStateCostumer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

store.dispatch(deposit(400), createCustomer("John Doe", "123456789"));
store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(1000, "To buy a car"));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

export function createCustomer(fullName, nationalID) {
    return {
        type: "customer/createCustomer",
        payload: {
            fullName,
            nationalID,
        },
    };
}
export function updateName(fullName) {
    return {
        type: "customer/updateName",
        payload: {
            fullName,
        },
    };
}

*/
