import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from './redux/reducers';
import rootSaga from './redux/sagas';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';

const sageMidleWare = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sageMidleWare));

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
