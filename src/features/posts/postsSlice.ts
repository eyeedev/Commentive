import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Post {
    id: string
    title: string
    content: string
}

const initialState : Post[] = [
    {id: '1', title: 'First Post!', content: 'Hello!'},
    {id: '2', title: 'Second Post!', content: 'More text.'}
]


const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action: PayloadAction<Post>){
            state.push(action.payload);
        }
    }
})

//export the auto-generated action creator with the same name: the createSlice does that!!:))
//its like posts/postAdded
export const {postAdded} = postSlice.actions;
export default postSlice.reducer