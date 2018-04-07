const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');

const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');
const AppAPI = require('../utils/appAPI');

const CHANGE_EVENT = 'change';

var _results = [];
var _searchText = '';

const AppStore = assign({}, EventEmitter.prototype, {
    setSearchText: function (search) {
      _searchText = search.text;
    },

    getSearchText: function () {
      return _searchText;
    },
    
    getResults: function () {
      return _results;
    },

    setResults: function (results) {
      _results = results;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function (payload) {
    let action = payload.action;

    switch(action.actionType) {
      case AppConstants.SEARCH_TEXT:
        console.log('Searching for text...');

        // Store State
        AppStore.setSearchText(action.search);

        // API Search
        AppAPI.searchText(action.search);

        AppStore.emitChange();
        break;
      case AppConstants.RECEIVE_RESULTS:
        console.log('Receiving results...');

        // Store Update State
        AppStore.setResults(action.results);

        AppStore.emitChange();
        break;
    }

    return true;
});

module.exports = AppStore;