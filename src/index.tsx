import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {App} from "./components/App";
import {rootReducer} from "./store/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("app")
);



