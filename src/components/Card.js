import React from "react";
import "./Card.css";
import Card from "@material-ui/core/Card";

import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

function DataCard({ data }) {
  return (
    <Card raised={true} className="root">
      <CardActionArea>
        <CardMedia className="media" image={data.flag} title={data.name} />
        <CardContent className="content">
          <h1>{data.name}</h1>
          <h2>Capital: {data.capital}</h2>
          <h2>Region: {data.region}</h2>
          <h2>Sub Region: {data.subregion}</h2>
          <h2>Population: {data.population}</h2>
          <h2 className="brd">Borders: {data.borders.join(",")}</h2>
          <h2>
            Languages:
            {data.languages.map((language) => {
              return `${language.name},`;
            })}
          </h2>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default DataCard;
