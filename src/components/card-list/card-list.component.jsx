import { Component } from "react";

import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <Card
              key={id}
              imgAlt={`monster ${name}`}
              imgSrc={`https://robohash.org/${id}?set=set2&size=180x180`}
              title={name}
              description={email}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
