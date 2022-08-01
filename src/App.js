import "./App.css";
/* import { connect } from 'react-redux'; */
import Searcher from "./components/Searcher";
import { Col } from "antd";
import PokemonList from "./components/PokemonList";
import logo from "./statics/logo.svg";
import { useEffect } from "react";
import { getPokemon, getPokemonDetails } from "./api";
import { setPokemons } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonRes = await getPokemon();
      const pokemonDetailed = await Promise.all(
        pokemonRes.map((pokemon) => getPokemonDetails(pokemon))
      );
      dispatch(setPokemons(pokemonDetailed));
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

/* const mapStateToProps = state => ({
  pokemons: state.pokemons,

});

const mapDispatchToProps = dispatch => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
}); */

/* export default connect(mapStateToProps,mapDispatchToProps)(App); */
export default App;
