import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    getAllData: (state, action) => {
      // console.log(action)
      // console.log(state.user)

      state.user = action.payload;

      //   action.payload.map((e) => {
      //     state.user.push(e);
      //   });
    },
    createUser: (state, action) => {
      state.user.push(action.payload);
    },

    updateUser: (state, action) => {
      const { _id, firstname, lastname, phone, email, alternativeno } =
        action.payload;

      // Find the index of the user with the specified ID
      const index = state.user.findIndex((user) => user._id === _id);

      // If the user is found, update their details
      if (index !== -1) {
        console.log(index);
        state.user[index] = {
          ...state.user[index], // Maintain other properties of the user
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

        console.log(state.user);
      }
    },
  },
});

export const { getAllData, createUser, deleteUser, updateUser } =
  userSlice.actions;

export default userSlice.reducer;
