let React = require('react')

const OldMovesList = React.createClass({
  render: function () {
    let { history } = this.props
    console.log(history)
    let whiteMoves = history.filter(function (move, index) {
      return index % 2 === 0
    })
    let blackMoves = history.filter(function (move, index) {
      return index % 2 !== 0
    })

    return (
      <div className='old-moves'>
        <h3 className='title'>Previous Moves</h3>
        <table>
          <tbody>
            <tr>
              <th>Move</th>
              <th>White</th>
              <th>Black</th>
            </tr>
            {whiteMoves.map((move, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{move}</td>
                  <td>{blackMoves[index]}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
})

module.exports = OldMovesList
