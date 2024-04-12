import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    getAllData: (state, action) => {
      state.user=(action.payload);
     
    },
    createUser: (state, action) => {
      state.user.push(action.payload);
    },

    updateUser: (state, action) => {
      const { _id, firstname, lastname, phone, email, alternativeno } =
        action.payload;

      const index = state.user.findIndex((user) => user._id === _id);

      if (index !== -1) {
        state.user[index] = {
          ...state.user[index], 
          firstname,
          lastname,
          phone,
          email,
          alternativeno,
        };
      }
    },

    deleteUser: (state, action) => {
      const id = action.payload;
      const index = state.user.findIndex((user) => user.id === id);
      // Remove the user if found
      if (index !== -1) {
        state.user.splice(index, 1);

      }
    },
  },
});

export const { getAllData, createUser, deleteUser, updateUser } =
  userSlice.actions;

export default userSlice.reducer;
