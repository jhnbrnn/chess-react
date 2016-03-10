var React = require('react');
var Chessboard = require('./Chessboard.jsx');
var ChessboardDetails = require('./ChessboardDetails.jsx');

var Main = React.createClass({
  getInitialState() {
      return {
        pieces: [
          [
            {color: 'white', piece: 'R'},
            {color: 'white', piece: 'N'},
            {color: 'white', piece: 'B'},
            {color: 'white', piece: 'K'},
            {color: 'white', piece: 'Q'},
            {color: 'white', piece: 'B'},
            {color: 'white', piece: 'N'},
            {color: 'white', piece: 'R'},
          ],
          [
            {color: 'white', piece: 'p'},
            {color: 'white', piece: 'p'},
            {color: 'white', piece: 'p'},
            {color: 'white', piece: 'p'},
            {color: 'white', piece: 'p'},
            {color: 'white', piece: 'p'},
            {color: 'white', piece: 'p'},
            {color: 'white', piece: 'p'},
          ],
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0],
          [
            {color: 'black', piece: 'p'},
            {color: 'black', piece: 'p'},
            {color: 'black', piece: 'p'},
            {color: 'black', piece: 'p'},
            {color: 'black', piece: 'p'},
            {color: 'black', piece: 'p'},
            {color: 'black', piece: 'p'},
            {color: 'black', piece: 'p'},
          ],
          [
            {color: 'black', piece: 'R'},
            {color: 'black', piece: 'N'},
            {color: 'black', piece: 'B'},
            {color: 'black', piece: 'K'},
            {color: 'black', piece: 'Q'},
            {color: 'black', piece: 'B'},
            {color: 'black', piece: 'N'},
            {color: 'black', piece: 'R'},
          ],
        ]
      };
  },
  render: function() {
    return (
      <main>
        <Chessboard data={this.state.pieces} />
        <ChessboardDetails />
      </main>
    );
  }
});

module.exports = Main;
