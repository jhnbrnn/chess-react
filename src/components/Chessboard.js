var React = require('react');

var Chessboard = React.createClass({
  render: function() {
    return (
      <article className="width-7">
        <span className="row-even"><span className="square-annotation">8</span><span className="square">&#9820;</span><span className="square">&#9822;</span><span className="square">&#9821;</span><span className="square">&#9819;</span><span className="square">&#9818;</span><span className="square">&#9821;</span><span className="square">&#9822;</span><span className="square">&#9820;</span></span><br />
        <span className="row-odd"><span className="square-annotation">7</span><span className="square">&#9823;</span><span className="square">&#9823;</span><span className="square">&#9823;</span><span className="square">&#9823;</span><span className="square">&#9823;</span><span className="square">&#9823;</span><span className="square">&#9823;</span><span className="square">&#9823;</span></span><br />
        <span className="row-even"><span className="square-annotation">6</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span></span><br />
        <span className="row-odd"><span className="square-annotation">5</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span></span><br />
        <span className="row-even"><span className="square-annotation">4</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span></span><br />
        <span className="row-odd"><span className="square-annotation">3</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span><span className="square">&nbsp;</span></span><br />
        <span className="row-even"><span className="square-annotation">2</span><span className="square">&#9817;</span><span className="square">&#9817;</span><span className="square">&#9817;</span><span className="square">&#9817;</span><span className="square">&#9817;</span><span className="square">&#9817;</span><span className="square">&#9817;</span><span className="square">&#9817;</span></span><br />
        <span className="row-odd"><span className="square-annotation">1</span><span className="square">&#9814;</span><span className="square">&#9816;</span><span className="square">&#9815;</span><span className="square">&#9813;</span><span className="square">&#9812;</span><span className="square">&#9815;</span><span className="square">&#9816;</span><span className="square">&#9814;</span></span><br />
        <span className="row-annotation"><span className="square-annotation">&nbsp;</span><span className="square">A</span><span className="square">B</span><span className="square">C</span><span className="square">D</span><span className="square">E</span><span className="square">F</span><span className="square">G</span><span className="square">H</span></span>
      </article>
    );
  }
});

module.exports = Chessboard;
