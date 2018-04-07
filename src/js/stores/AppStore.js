const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');

const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');
const AppAPI = require('../utils/appAPI');

const CHANGE_EVENT = 'change';

var _items = [];
var _searchText = '';

const AppStore = assign({}, EventEmitter.prototype, {
    setSearchText: function (search) {
      _searchText = search.text;
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
    }

    return true;
});

module.exports = AppStore;