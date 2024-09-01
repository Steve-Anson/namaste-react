import resList from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [listRestuarants, setListRestaurants] = useState(resList);

  const [searchname, setSearchName] = useState("");
  const handleChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleSearch = () => {
    const searchedCard = listRestuarants.filter(
      (res) => res.info.name.toLowerCase() == searchname.toLowerCase()
    );
    setListRestaurants(searchedCard);
  };

  return (
    <div className="body">
      <div className="search">
        <input
          onChange={handleChange}
          className="search-bar"
          type="text"
        ></input>
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listRestuarants.filter(
                (res) => res.info.avgRating > 4.4
              );
              setListRestaurants(filteredList);
            }}
          >
            Filter Top
          </button>
        </div>
      </div>

      <div className="card-container">
        {listRestuarants &&
          listRestuarants.map((card) => (
            <RestaurantCard key={card.info.id} resData={card} />
          ))}
        {listRestuarants.length == 0 && <p>{searchname} Not Found</p>}
      </div>
    </div>
  );
};

export default Body;
