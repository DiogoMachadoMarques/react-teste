import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider>
          <Provider store={store}>  
              <App /> 
          </Provider>
        </MuiThemeProvider>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
