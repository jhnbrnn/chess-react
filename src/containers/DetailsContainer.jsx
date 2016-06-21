let { connect } = require('react-redux')
let ChessboardDetails = require('../components/ChessboardDetails.jsx')

function mapStateToProps (state) {
  return {
    board: state.board.fen(),
    history: state.history
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onSubmitMove: (move) => {
      dispatch({
        type: 'MOVE',
        value: move
      })
    }
  }
}

const DetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ChessboardDetails)

module.exports = DetailsContainer
