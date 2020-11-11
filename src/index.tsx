import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import reducer from './redux/reducers';
import rootSaga from './redux/sagas';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';

const sageMidleWare = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sageMidleWare))
);

sageMidleWare.run(rootSaga);

class Home extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Body />
        <Footer />
      </Provider>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));
