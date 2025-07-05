import { configureStore } from '@reduxjs/toolkit'
import agentReducer from '@/store/agentSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            agents: agentReducer,
        },
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']