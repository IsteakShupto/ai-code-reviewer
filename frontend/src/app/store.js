import { configureStore } from "@reduxjs/toolkit";
import AnimalReducer from "../features/AnimalsSlice";
import LanguageReducer from "../features/LanguageSlice";
import CodeReducer from "../features/CodeSlice";
import ReviewReducer from "../features/ReviewSlice";
import { agentApi } from "../features/api/agentApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    animal: AnimalReducer,
    language: LanguageReducer,
    code: CodeReducer,
    review: ReviewReducer,
    [agentApi.reducerPath]: agentApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(agentApi.middleware),
});

setupListeners(store.dispatch);
