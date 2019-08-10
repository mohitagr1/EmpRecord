import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducer from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router'

class App extends Component{

  componentWillMount(){
    const config = {
      apiKey: "AIzaSyBnxBtYjFsRC5xBidvZgt5sF3B6GPCTIAE",
      authDomain: "manager-db9e5.firebaseapp.com",
      databaseURL: "https://manager-db9e5.firebaseio.com",
      projectId: "manager-db9e5",
      storageBucket: "manager-db9e5.appspot.com",
      messagingSenderId: "264721865673"
    };
    firebase.initializeApp(config);
  
  }

    render(){
      const store=createStore(reducer,{},applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}

export default App;