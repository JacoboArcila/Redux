import "./App.css";
/* import { connect } from 'react-redux'; */
import Searcher from "./components/Searcher";
import { Col, Spin } from "antd";
import PokemonList from "./components/PokemonList";
import logo from "./statics/logo.svg";
import { useEffect } from "react";
import { getPokemon } from "./api";
import { getPokemonsWithDetails, setLoading } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true))
      const pokemonRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonRes));
      dispatch(setLoading(false))
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
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;

/* const mapStateToProps = state => ({
  pokemons: state.pokemons,

});

const mapDispatchToProps = dispatch => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
}); */

/* export default connect(mapStateToProps,mapDispatchToProps)(App); */
