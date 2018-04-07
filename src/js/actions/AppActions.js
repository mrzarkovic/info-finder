const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

const AppActions = {
    searchText: function (search) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_TEXT,
            search: search
        });
    },

    receiveResults: function (results) {
      AppDispatcher.handleViewAction({
          actionType: AppConstants.RECEIVE_RESULTS,
          results: results
      });
  },
};

module.exports = AppActions;