'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Exports the constants used for triggering transitions using Angular UI Router
//
// STATE_GO: Action for triggering a $state.go
// STATE_RELOAD: Action for triggering a $state.reload
// STATE_TRANSITION_TO: Action for triggering a $state.transitionTo
//
var STATE_GO = exports.STATE_GO = '@@reduxUiRouter/stateGo';
var STATE_RELOAD = exports.STATE_RELOAD = '@@reduxUiRouter/stateReload';
var STATE_TRANSITION_TO = exports.STATE_TRANSITION_TO = '@@reduxUiRouter/transitionTo';

// UI Router Events
var STATE_CHANGE_START = exports.STATE_CHANGE_START = '@@reduxUiRouter/onStart';
var STATE_CHANGE_SUCCESS = exports.STATE_CHANGE_SUCCESS = '@@reduxUiRouter/onSuccess';
var STATE_CHANGE_FINISH = exports.STATE_CHANGE_FINISH = '@@reduxUiRouter/onFinish';
var STATE_CHANGE_ERROR = exports.STATE_CHANGE_ERROR = '@@reduxUiRouter/onError';

var actions = {
  STATE_GO: STATE_GO,
  STATE_RELOAD: STATE_RELOAD,
  STATE_TRANSITION_TO: STATE_TRANSITION_TO,
  STATE_CHANGE_START: STATE_CHANGE_START,
  STATE_CHANGE_SUCCESS: STATE_CHANGE_SUCCESS,
  STATE_CHANGE_FINISH: STATE_CHANGE_FINISH,
  STATE_CHANGE_ERROR: STATE_CHANGE_ERROR
};

exports.actions = actions;