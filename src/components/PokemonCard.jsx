import React from "react";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { StarOutlined } from "@ant-design/icons";

const PokemonCard = ({ pokemon }) => {
  const { sprites, name } = pokemon;
  return (
    <div>
      <Card
        title={name}
        cover={<img src={sprites.front_default} alt={name} />}
        extra={<StarOutlined />}
      >
        <Meta description={pokemon.abilities.map((ability) => {
          return ` ${ability.ability.name} `
        })} />
        {}
      </Card>
    </div>
  );
};

export default PokemonCard;
