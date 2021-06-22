import { createSlice } from '@reduxjs/toolkit';



export const appSlice = createSlice({
  name: 'app',
  initialState : {
    roomId: null,
  },
  reducers: {
               enterRoom : (state,action) =>
               {
                 state.roomId = action.payload.roomId
               }
            },

  
});

export const appSliceActions = appSlice.actions;


export default appSlice.reducer;
