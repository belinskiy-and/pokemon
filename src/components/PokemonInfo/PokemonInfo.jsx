import PokemonData from "components/PokemonData";
import { Component } from "react";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected"
}

export class PokemonInfo extends Component {
    state = {
        pokemon: null,
        error: false,
        status: Status.IDLE,
    }

    componentDidUpdate(prevProps) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;
    
    if (prevName !== nextName) {
      
        this.setState({ status: Status.PENDING });
        setTimeout( () =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }    

                return Promise.reject(new Error(`Нет покемона с именеи ${nextName}`));    
            })
            .then(pokemon => this.setState({ pokemon, status: Status.RESOLVED }))
            .catch(error => this.setState({error, status: Status.REJECTED})),
        1000);
    }
  }

    render() {        
        const { pokemon, error, status } = this.state;

        if (status === Status.IDLE) {
            return <h3>Enter pokemon name</h3>;
        }

        if (status === Status.PENDING) {
            return <h3>Loading pokemon...</h3>;
        }

        if (status === Status.REJECTED) {
            return <h2>{error.message}</h2>;    
        }

        if (status === Status.RESOLVED) {
            return <PokemonData pokemon={pokemon} />
        }
    }
}