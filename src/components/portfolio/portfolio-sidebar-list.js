import React from "react";
import PortfolioItem from "./portfolio-item";

const PortfolioSidebarList = props => {
  const portfolioList = props.data.map(PortfolioItem => {
    return (
      <div>
        <h1>{PortfolioItem.name}</h1>
        <h2>{PortfolioItem.id}</h2>
      </div>
    );
  });
  return <div>{portfolioList}</div>;
};

export default PortfolioSidebarList;
