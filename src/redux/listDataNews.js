import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [],
}

export const listDataNews = createSlice({
  name: 'listingnews',
  initialState,
  reducers: {
    
    setListDataNews: (state, actions) => {

        state.list = actions.payload;
    },
 
  }
})

export const {setListDataNews} = listDataNews.actions

export default listDataNews.reducer