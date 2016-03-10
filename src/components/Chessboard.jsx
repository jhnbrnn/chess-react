var React = require('react');

var ChessMap= {
  'black': {
    'K': '&#9818;',
    'Q': '&#9819;',
    'B': '&#9821;',
    'N': '&#9822;',
    'R': '&#9820;',
    'p': '&#9823;'
  },
  'white': {
    'K': '&#9812;',
    'Q': '&#9813;',
    'B': '&#9815;',
    'N': '&#9816;',
    'R': '&#9814;',
    'p': '&#9817;'
  }
};

/**
 * Expect rankPieces: [0, 0, 0, 'wp', 'bB', 0, 0, 0]
 */
function renderRank(rankNum, rankPieces) {
  var rankClass;
  if (rankNum % 2 === 0) {
    rankClass = 'row-even';
  } else {
    rankClass = 'row-odd';
  }

  var squaresMarkup = rankPieces.map(function(piece) {
    return renderSquare(piece);
  });

  return (
    <span className={rankClass}>
      <span className="square-annotation">{rankNum}</span>
      {squaresMarkup}
    </span>
  );
};

function renderSquare(pieceInSquare) {
  var markup = '';
  if (typeof pieceInSquare === 'number') {
    markup = '&nbsp;'
  } else {
    markup = ChessMap[pieceInSquare.color][pieceInSquare.piece];
  }

  return <span className="square" dangerouslySetInnerHTML={{__html: markup}}></span>;
}

var Chessboard = React.createClass({
  render: function() {
    return (
      <article className="width-7">
        {renderRank(8, this.props.data[7])}
        <br />
        {renderRank(7, this.props.data[6])}
        <br />
        {renderRank(6, this.props.data[5])}
        <br />
        {renderRank(5, this.props.data[4])}
        <br />
        {renderRank(4, this.props.data[3])}
        <br />
        {renderRank(3, this.props.data[2])}
        <br />
        {renderRank(2, this.props.data[1])}
        <br />
        {renderRank(1, this.props.data[0])}
      </article>
    );
  }
});

module.exports = Chessboard;
