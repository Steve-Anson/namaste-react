import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listRestuarants, setListRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchname, setSearchName] = useState("");
  const handleChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleSearch = () => {
    const searchedCard = listRestuarants.filter((res) =>
      res.info.name.toLowerCase().includes(searchname.toLowerCase())
    );
    setFilteredRestaurant(searchedCard);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )}`
    );
    const jsondata = await data.json();
    const json = JSON.parse(jsondata.contents);
    // console.log(json);
    setListRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return listRestuarants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          onChange={handleChange}
          className="search-bar"
          type="text"
          value={searchname}
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
              setFilteredRestaurant(filteredList);
            }}
          >
            Filter Top
          </button>
        </div>
      </div>

      <div className="card-container">
        {filteredRestaurant.map((card) => (
          <Link
            key={card.info.id}
            className="res-card-link"
            to={`/restaurants/${card.info.id}`}
          >
            <RestaurantCard resData={card} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
