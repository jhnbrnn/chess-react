var React = require('react');
var Chessboard = require('./Chessboard.jsx');
var ChessboardDetails = require('./ChessboardDetails.jsx');

var Main = React.createClass({
  render: function() {
    return (
      <main>
        <Chessboard />
        <ChessboardDetails />
      </main>
    );
  }
});

module.exports = Main;
