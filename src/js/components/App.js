const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

const SearchForm = require('./SearchForm');
const SearchResults = require('./SearchResults');

function getAppState () {
    return {
        results: AppStore.getResults(),
        searchText: AppStore.getSearchText()
    };
}

const App = React.createClass({
    getInitialState: function () {
        return getAppState();
    },
    
    componentDidMount: function () {
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        AppStore.removeChangeListener(this._onChange);
    },

    render: function () {
        return (
            <div>
                <SearchForm />
                { this.state.searchText && <SearchResults searchText={ this.state.searchText } results={ this.state.results } /> }
            </div>
        );
    },

    // Update view state when change is received
    _onChange: function () {
        this.setState(getAppState());
    }
});

module.exports = App;