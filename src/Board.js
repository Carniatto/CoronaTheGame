import React from "react";

class Board extends React.Component {
  render() {
    if (this.props.ctx.gameover) {
      return (
        <div className="board">
          <h2>You survived {this.props.ctx.gameover.days} day(s)</h2>
          <div className="actions">
            <button className="button is-primary" onClick={this.props.reset}>
              Restart
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="board">
          <p>Day: {this.props.G.day}</p>
          <p>Supplies: {this.props.G.supplies}</p>
          <div className="actions">
            <button
              className="button is-primary"
              onClick={this.props.moves.goGroceries}
            >
              Buy Groceries
            </button>
            <button
              className="button is-primary"
              onClick={this.props.moves.stayHome}
            >
              Stay home
            </button>
          </div>
        </div>
      );
    }
  }
}

export default Board;
