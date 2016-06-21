let React = require('react')

let ChessMap = {
  'k': '&#9818;',
  'q': '&#9819;',
  'b': '&#9821;',
  'n': '&#9822;',
  'r': '&#9820;',
  'p': '&#9823;',
  'K': '&#9812;',
  'Q': '&#9813;',
  'B': '&#9815;',
  'N': '&#9816;',
  'R': '&#9814;',
  'P': '&#9817;'
}

function generateMarkup (rankString) {
  return rankString.split('').map(function (char) {
    if (Number.isNaN(parseInt(char))) {
      return [renderSquare(char)]
    } else {
      let empties = []
      for (let i = 0; i < parseInt(char); i++) {
        empties.push(renderSquare(0))
      }
      return empties
    }
  }).reduce(function (a, b) {
    return a.concat(b)
  })
}

function renderSquare (pieceChar) {
  var markup = ''

  if (typeof pieceChar === 'number') {
    markup = '&nbsp;'
  } else {
    markup = ChessMap[pieceChar]
  }
  return (
    <span className='square' dangerouslySetInnerHTML={createMarkup(markup)}></span>
  )
}

function createMarkup (markup) {
  return {__html: markup}
}

const ChessboardRank = function ({ index, rank }) {
  let rankNum = 8 - index
  let rankClass = 'row-odd'
  if (rankNum % 2 === 0) {
    rankClass = 'row-even'
  }

  let squaresMarkup = generateMarkup(rank)
  return (
    <span key={index} className={rankClass}>
      <span classname='square-annotation'>{rankNum}</span>
      {squaresMarkup}
      <br />
    </span>
  )
}

module.exports = ChessboardRank
