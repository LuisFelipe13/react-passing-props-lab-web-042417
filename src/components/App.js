import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  state = {
    fruit: [],
    filters: [],
    items: [],
    currentFilter: null
  }

  componentWillMount() {
    this.fetchFilters()
    this.fetchFruits()
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters: filters }));
  }

  fetchFruits = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items: items }));
  }

  handleFilterChange = event => {
    this.setState({
      currentFilter: event.target.value
    })
  }

  render() {
    return (
      <FruitBasket
        leProps={this.state}
        handleFilterChange={this.handleFilterChange}
      />
    )
  }
}

export default App;
