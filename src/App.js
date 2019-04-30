import React, { Component } from "react";
import AppContainer from './navigation/AppContainer';
import { Provider } from 'react-redux'
import Store from './store/configureStore'

/*import { Root } from "native-base";*/

export default class App extends Component {
  render() {
    /*return(
      <Provider store={Store}>
        <Root>
          <AppContainer />
        </Root>
      </Provider>
    );*/
    return (
      <Provider store={Store}>
        <AppContainer />
      </Provider>
    );
  }
}
