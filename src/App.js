import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Jacek',
          id: '1efe21e'
        },
        {
          name: 'Placek',
          id: '12erwferw'
        },
        {
          name: 'Wacek',
          id: 'rew1132r'
        },
        {
          name: 'Maciek',
          id: 'rewqq1223'
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}><h1>{monster.name}</h1></div>
          })
        }
      </div>
    );
  }
}

export default App;
