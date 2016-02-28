var React = require('react');
var NewMoveForm = require('./NewMoveForm.jsx');
var OldMovesList = require('./OldMovesList.jsx');

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
