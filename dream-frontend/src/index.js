import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import RootStore from './Stores/RootStore'

ReactDOM.render(
    <Provider rootStore={new RootStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);
