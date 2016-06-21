let React = require('react')

function whiteOrBlack (char) {
  return char === 'w' ? 'White' : 'Black'
}

function currentMoveColor (board) {
  let rankRegex = /^[\w+\/?]+\s(\w){1}/
  return rankRegex.exec(board)[1].trim()
}

const NewMoveForm = React.createClass({
  render: function () {
    let { board, onSubmitMove } = this.props
    let currentColor = whiteOrBlack(currentMoveColor(board))

    return (
      <div className='new-move'>
        <h3>{currentColor}: Submit Your Move</h3>
        <form>
          <input type='text' onChange={this.handleInputChange}></input>
          <button type='button' onClick={() => onSubmitMove(this.state.input)}>Submit Move</button>
        </form>
      </div>
    )
  },

  handleInputChange: function (event) {
    this.setState({input: event.target.value})
  }
})

module.exports = NewMoveForm
