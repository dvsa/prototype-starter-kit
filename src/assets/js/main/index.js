import store from 'store';
import expirePlugin from 'store/plugins/expire';

import { domReady } from './../shared';
import { initGDS } from './../gds';
import { initModules } from './modules';

// Polyfills
import 'core-js/es6/array';
import 'classlist.js';
import 'element-closest';

// Third-party
// Non-NPM packages
import './../third-party';

// Add expiry plugin for store
store.addPlugin(expirePlugin);

domReady(() => {
  // GDS
  initGDS();

  // Modules
  initModules();
});
