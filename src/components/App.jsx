import { Component } from "react";
import { PokemonInfo } from "./PokemonInfo/PokemonInfo";
import SearchForm from "./SearchForm";


export class App extends Component {

  state = {
    pokemonName: "",
  };

  

  searchSubmit = (pokemonName) => {
      this.setState({pokemonName});    
  }

  render() {
    const { pokemonName } = this.state;

    return (
      <>
        <SearchForm searchSubmit={this.searchSubmit} />
        <PokemonInfo pokemonName={pokemonName} />
      </>
    );
  }
};
