var React = require('react');
var NewMoveForm = require('./NewMoveForm');
var OldMovesList = require('./OldMovesList');

var ChessboardDetails = React.createClass({
  render: function() {
    return (
      <aside className="width-5">
        <NewMoveForm />
        <OldMovesList />
      </aside>
    );
  }
});

module.exports = ChessboardDetails;
