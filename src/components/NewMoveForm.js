var React = require('react');

var NewMoveForm = React.createClass({
  render: function() {
    return (
      <div className="new-move">
        <h3>Submit Your Move</h3>
        <form>
          <input type="text"></input>
          <button type="submit">Submit Move</button>
        </form>
      </div>
    );
  }
});

module.exports = NewMoveForm;
