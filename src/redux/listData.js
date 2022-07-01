import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [],
}

export const listData = createSlice({
  name: 'listing',
  initialState,
  reducers: {
    
    setListData: (state, actions) => {

        state.list = actions.payload;
    },
 
  }
})



export const {setListData} = listData.actions

export default listData.reducer

