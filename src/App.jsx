let React = require('react')
let { Provider } = require('react-redux')
let { createStore } = require('redux')
let { render } = require('react-dom')
let Main = require('./components/Main.jsx')
let { initialState, chessApp } = require('./reducers/chessboard')

let store = createStore(chessApp, initialState,
  window.devToolsExtension && window.devToolsExtension()
)

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
)
