import { Component } from "react";
import SearchForm from "./SearchForm";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected"
}

export class App extends Component {

  state = {
    pokemonName: null,
    pokemon: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.pokemonName;
    const nextName = this.state.pokemonName;
    
    if (prevName !== nextName) {
      
      this.setState({ isLoading: true });
      setTimeout( () =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
          .then(res => res.json())
          .then(pokemon => this.setState({pokemon}))
          .finally(() => this.setState({ isLoading: false })),
        6000);
    }
  }

  searchSubmit = (pokemonName) => {
      this.setState({pokemonName});    
  }

  render() {
    const { pokemonName, pokemon, isLoading } = this.state;

    return (
      <>
        <SearchForm searchSubmit={this.searchSubmit} />

        {!pokemonName && <h3>Enter pokemon name</h3>}
        {isLoading && <h3>Loading pokemon...</h3>}
        {pokemon && <h2>{pokemon.name}</h2>}
      </>
    );
  }
};
