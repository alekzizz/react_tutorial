import { Component } from "react";

import "./card.styles.css";

class Card extends Component {
  render() {
    return (
      <div className="card-container" key={this.props.id}>
        <img alt={this.props.imgAlt} src={this.props.imgSrc} />
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Card;
