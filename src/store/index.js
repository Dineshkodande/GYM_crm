import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import { encryptTransform } from "redux-persist-transform-encrypt";
import { configureStore } from "@reduxjs/toolkit";

const key = process.env.REACT_APP_PERSIST_KEY;

// Configure persist options
const persistConfig = {
  key: key, // key for the persist storage
  storage, // storage engine
  transforms: [
    encryptTransform({
      secretKey: "$iTrad$",
      onError: function (error) {
        // Optionally handle errors
      },
    }),
  ],
  // whitelist: ["authReducer","empReducer"], // to persist data
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({ serializableCheck: false });

    // Only add logger middleware in development environment
    if (process.env.NODE_ENV === "development") {
      const logger = require("redux-logger").default; // Lazy load the logger only in development
      middlewares.push(logger);
    }

    return middlewares;
  },
});

// Create persistor
const persistor = persistStore(store);

export { store, persistor };
