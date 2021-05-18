import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slices/countSlice'

export default configureStore({
  reducer: {counter: counterReducer,},
})


