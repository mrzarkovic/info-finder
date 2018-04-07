const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

const SearchForm = React.createClass({
    render: function () {
        return (
            <div>
                <form className="well" onSubmit={ this.searchText }>
                  <div className="form-group">
                    <label>Search for Something...</label>
                    <input type="text" className="form-control" ref="text" />
                  </div>
                </form>
            </div>
        );
    },

    searchText: function (e) {
      e.preventDefault();

      let search = {
        text: this.refs.text.value.trim()
      };

      AppActions.searchText(search);
    }
});

module.exports = SearchForm;