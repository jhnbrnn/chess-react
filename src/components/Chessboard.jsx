let React = require('react')
let ChessboardRank = require('./ChessboardRank.jsx')

function generateRankArray (board) {
  let rankRegex = /^([\w+\/?]+)\s/
  let ranks = rankRegex.exec(board)[0].trim()
  return ranks.split('/')
}

const Chessboard = ({ board }) => {
  let rankArray = generateRankArray(board)
  return (
    <article className='width-7'>
      {rankArray.map((rank, index) => (
        <ChessboardRank
          key={index}
          index={index}
          rank={rank} />
      ))}
    </article>
  )
}

module.exports = Chessboard
