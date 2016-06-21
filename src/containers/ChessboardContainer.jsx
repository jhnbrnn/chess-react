let { connect } = require('react-redux')
let Chessboard = require('../components/Chessboard.jsx')

function mapStateToProps (state) {
  return {
    board: state.board.fen()
  }
}

const ChessboardContainer = connect(mapStateToProps, {})(Chessboard)

module.exports = ChessboardContainer
