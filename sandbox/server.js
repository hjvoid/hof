/* eslint-disable */
'use strict';

const bootstrap = require('../');

bootstrap({
  translations: './apps/sandbox/translations',
  routes: [
    require('./apps/sandbox')
  ],
  getAccessibility: true
});
