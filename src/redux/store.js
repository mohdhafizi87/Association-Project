import { configureStore } from '@reduxjs/toolkit'
import listingReducer from '../redux/listData'
import listingNewsReducer from'../redux/listDataNews'

export default configureStore({
  reducer: {
    listing: listingReducer,
    listingnews: listingNewsReducer
  }
})