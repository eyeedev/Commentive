import { RootState } from './../../app/store';
import { createSlice } from "@reduxjs/toolkit";


interface User {
    id: string
    name: string
}

const initialState: User[] = [
    {id: '0', name:'Tiana Jenkins'},
    {id: '1', name:'Tom Holand'},
    {id: '2', name:'Harry Styles'}
];



const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});



export default usersSlice.reducer;

export const selectAllUsers = (state: RootState) => state.users;
export const selectUserById = (state: RootState, userId: string | null) =>
  state.users.find(user => user.id === userId);