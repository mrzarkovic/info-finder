const AppActions = require('../actions/AppActions');

module.exports = {
  searchText: function (search) {
      $.ajax({
        url: '',
        type: 'GET',
        dataType: 'json',
        cache: false,
        success: function (data) {
            AppActions.receiveData(data);
        }.bind(this),
        error: function (xhr, status, error) {
            console.log(error);
        }.bind(this)
      });
    }
};