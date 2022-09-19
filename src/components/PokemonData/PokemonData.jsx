const PokemonData = ({ pokemon }) => {
    console.log(pokemon);
    return (
        <>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} width="250px" />
        </>
    )
}

export default PokemonData;