/* eslint-disable no-var */
'use strict';

const toolkit = require('../../../toolkit');
const helpers = toolkit.helpers;
const progressiveReveal = toolkit.progressiveReveal;
const formFocus = toolkit.formFocus;
const characterCount = toolkit.characterCount;
const validation = toolkit.validation;

const GOVUK = require('govuk-frontend')
GOVUK.initAll();
window.GOVUK = GOVUK;
const cookie = require('./govuk-cookies')
const cookieSettings = require('./cookieSettings');
require('./skip-to-main')

toolkit.detailsSummary();

helpers.documentReady(progressiveReveal);
helpers.documentReady(formFocus);
helpers.documentReady(cookieSettings.initialiseCookieBanner);
helpers.documentReady(cookieSettings.initialiseCookiePage);
helpers.documentReady(cookieSettings.onLoad);
helpers.documentReady(characterCount);
helpers.documentReady(validation);
