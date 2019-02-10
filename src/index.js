/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import cyan from 'material-ui/colors/cyan';
import ReactGA from 'react-ga';

import ScrollToTop from './components/ScrollToTop';
import store, { history } from './store';
import 'typeface-roboto';
import './index.css';
import App from './App';

// import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
  palette: {
    secondary: cyan,
  },
  overrides: {
    MuiDrawer: {
      paperAnchorLeft: {
        backgroundColor: '#F3F3F3',
      }
    },
    MuiIconButton: {
      label: {
        color: '#7C7C7C',
      }
    },
    MuiSelect: {
      selectMenu: {
        backgroundColor: 'transparent',
      }
    },
    MuiTouchRipple: {
      root: {
        color: '#31F0EF',
      }
    },
    MuiButton: {
      mini: {
        backgroundColor: '#31F0EF !important',
        color: '#7C7C7C'
      }
    }
  }
});

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ScrollToTop>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </ScrollToTop>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));

// registerServiceWorker();

// Check that service workers are registered
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

// Init GA
ReactGA.initialize('UA-134252237-1');
ReactGA.pageview(window.location.pathname + window.location.search);
