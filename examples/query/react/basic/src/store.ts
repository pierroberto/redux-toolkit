import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from './services/pokemon'

const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
})

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(pokemonApi.middleware as any)

      },
    preloadedState,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
