import { configureStore } from '@reduxjs/toolkit'
import listingReducer from '../redux/listDataNews'

export default configureStore({
  reducer: {
    listingnews: listingReducer
  }
})