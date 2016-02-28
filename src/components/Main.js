var React = require('react');
var Chessboard = require('./Chessboard');
var ChessboardDetails = require('./ChessboardDetails');

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
