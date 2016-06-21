let React = require('react')
let NewMoveForm = require('./NewMoveForm.jsx')
let OldMovesList = require('./OldMovesList.jsx')

const ChessboardDetails = ({ board, history, onSubmitMove }) => (
  <aside className='width-5'>
    <NewMoveForm onSubmitMove={onSubmitMove} board={board} />
    <OldMovesList history={history} />
  </aside>
)

module.exports = ChessboardDetails
