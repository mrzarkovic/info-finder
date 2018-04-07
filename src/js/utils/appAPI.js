const AppActions = require('../actions/AppActions');

module.exports = {
  searchText: function (search) {
    let url = 'https://api.duckduckgo.com/?q=' + search.text + '&format=json&pretty=1';

    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'jsonp', // for cross-domain request
      cache: false,
      success: function (data) {
          AppActions.receiveResults(data.RelatedTopics);
      }.bind(this),
      error: function (xhr, status, error) {
          console.log(error);
      }.bind(this)
    });
  }
};