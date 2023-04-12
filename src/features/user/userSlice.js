import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const createUser = createAsyncThunk(
  "users/createUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/users`,payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, payload);
      const login = await axios(`${BASE_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${res.data.access_token}`,
        },
      });

      return login.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const  addCarrentUser = (state, {payload})=>{
  state.currentUser = payload
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    cart:[],
    formType: "signup",
    showForm: false,
    isLoading: false,
  },
  reducers:{
    addItemToCart: (state, { payload }) => {
        let newCart = [...state.cart];
        const found = state.cart.find(({ id }) => id === payload.id);
  
        if (found) {
          newCart = newCart.map((item) => {
            return item.id === payload.id
              ? { ...item, quantity: payload.quantity || item.quantity + 1 }
              : item;
          });
        } else newCart.push({ ...payload, quantity: 1 });
  
        state.cart = newCart;
      },
      togleForm: (state, {payload})=>{
        state.showForm = payload
      },
      togleFormType: (state, {payload})=>{
       state.formType = payload;
      }
  }, 
  extraReducers: (builder)=>{

    builder.addCase(createUser.fulfilled, addCarrentUser);
    builder.addCase(loginUser.fulfilled,addCarrentUser );
  }
});

export default userSlice.reducer;
export const {addItemToCart, togleForm, togleFormType} = userSlice.actions
