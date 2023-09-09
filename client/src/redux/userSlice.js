import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'user',
  initialState:{
    isLogin:false,

    username: '',
    email:'',
    password:''
  },
  reducers: {
    login: (state) => {
        state.isLogin = true
    },
    logout: (state) => {
        state.isLogin = true
   
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { login,logout } = counterSlice.actions

export default counterSlice.reducer