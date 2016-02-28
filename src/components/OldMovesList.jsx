var React = require('react');

var OldMovesList = React.createClass({
  render: function() {
    return (
      <div className="old-moves">
        <h3 className="title">Previous Moves</h3>
        <table>
          <tbody>
            <tr>
              <th>Move</th>
              <th>White</th>
              <th>Black</th>
            </tr>
            <tr>
              <td>1</td>
              <td>d4</td>
              <td>d5</td>
            </tr>
            <tr>
              <td>2</td>
              <td>a4</td>
              <td>a5</td>
            </tr>
          </tbody>
        </table>
      </div>);
  }
});

module.exports = OldMovesList;
