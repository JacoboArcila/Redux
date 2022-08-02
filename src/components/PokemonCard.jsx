import React from "react";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import StarButton from "./StarButton";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../actions";


const PokemonCard = ({ pokemon }) => {
  const { sprites, name, abilities, id, favorite } = pokemon;
  const typeString = abilities.map(elem => elem.ability.name).join(', ')
  const dispatch = useDispatch()

  const handleOnFavorite = () => {
    dispatch(setFavorite({pokemonId: id}))
  }

  return (
    <div>
      <Card
        title={name}
        cover={<img src={sprites.front_default} alt={name} />}
        extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
      >
        <Meta description={typeString} />
        {}
      </Card>
    </div>
  );
};

export default PokemonCard;
