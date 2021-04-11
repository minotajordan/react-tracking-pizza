import React from "react";
import NextApp from "next/app";
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { initializeStore } from '../redux/store';
import '../styles/globals.css'
import '../public/css/sb-admin-2.css'

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = (Component.getInitialProps ? await Component.getInitialProps(ctx) : {});
    return { pageProps };
  }

  render() {
    const store = initializeStore();
    const { Component, pageProps } = this.props;
    const persistor = persistStore(store);
    
    return (
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
    </Provider>
    );
    
  }
}

export default withReduxStore(App)