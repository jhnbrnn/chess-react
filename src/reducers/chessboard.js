let ChessJS = require('chess.js')

const initialState = {
  board: new ChessJS(),
  history: []
}

function chessApp (state = initialState, action) {
  switch (action.type) {
    case 'MOVE':
      console.log(action)
      let newBoard = new ChessJS(state.board.fen())
      let moveWasSuccessful = newBoard.move(action.value)
      if (moveWasSuccessful) {
        let newHistory = state.history.concat(newBoard.history())
        return Object.assign({}, state, {
          board: newBoard,
          history: newHistory
        })
      } else {
        return state
      }
    default:
      return state
  }
}

module.exports = {
  chessApp,
  initialState
}
