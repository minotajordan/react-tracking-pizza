import React from "react";
import NextApp from "next/app";
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import '../styles/globals.css'
import '../public/css/sb-admin-2.css'

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { 
      pageProps, 
    };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(App)