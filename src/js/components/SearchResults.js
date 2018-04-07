const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

const Result = require('./Result');

const SearchResults = React.createClass({
    render: function () {
        return (
            <div>
              <h2 className="page-header">Results for { this.props.searchText }</h2>
                { this.props.results.map((result, index) => {
                  return (
                    <Result result={ result } key={ index } />
                  );
                }) }
            </div>
        );
    }
});

module.exports = SearchResults;