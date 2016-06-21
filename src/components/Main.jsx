let React = require('react')
let ChessboardContainer = require('../containers/ChessboardContainer.jsx')
let DetailsContainer = require('../containers/DetailsContainer.jsx')

const Main = function () {
  return (
    <main>
      <ChessboardContainer />
      <DetailsContainer />
    </main>
  )
}

module.exports = Main
