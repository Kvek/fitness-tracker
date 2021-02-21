import { createStore, Store } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension/logOnlyInProduction";

import { rootReducer } from "./rootReducer";
import { AppState } from "./rootType";

export const store = (initialState?: AppState): Store<AppState> =>
  createStore(rootReducer, initialState, devToolsEnhancer({}));
