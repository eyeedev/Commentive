import { configureStore } from '@reduxjs/toolkit'
import type { Action } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

function counterReducer(state: CounterState = { value: 0}, action: Action){
  switch (action.type){
    default: {
      return state
    }
  }
}

export const store = configureStore({
  // Pass in the root reducer setup as the `reducer` argument
  reducer: {
    counter: counterReducer
  }
})

//store type
export type AppStore = typeof store;
//dispatch type
export type AppDispatch = typeof store.dispatch;
//root state type
export type RootState = ReturnType<typeof store.getState>