const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

const Result = React.createClass({
    render: function () {
        return (
            <div>
              <p className="content lead" dangerouslySetInnerHTML={{__html: this.props.result.Result}}></p>
            </div>
        );
    }
});

module.exports = Result;