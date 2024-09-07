import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const changeHandler = (event) => {
    setSearchText(event.target.value);
  };

  const searchHandler = () => {
    console.log(searchText);
    const filteredRestaurants = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurants);
  };

  useEffect(() => {
    fetchData();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )}`
    );
    const jsondata = await data.json();
    const json = JSON.parse(jsondata.contents);
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(json.data.cards);
    setListOfRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    setFilteredRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const updateData = async () => {
    // const requestOptions = {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify({
    //     lat: "9.91850",
    //     lng: "76.25580",
    //     nextOffset: "CJhlELQ4KICYv6GahouoGTCnEzgB",
    //     widgetOffset: {
    //       NewListingView_category_bar_chicletranking_TwoRows: "",
    //       NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
    //       Restaurant_Group_WebView_SEO_PB_Theme: "",
    //       collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "9",
    //       inlineFacetFilter: "",
    //       restaurantCountWidget: "",
    //     },
    //     filters: {},
    //     seoParams: {
    //       seoUrl: "https://www.swiggy.com/",
    //       pageType: "FOOD_HOMEPAGE",
    //       apiName: "FoodHomePage",
    //     },
    //     page_type: "DESKTOP_WEB_LISTING",
    //     _csrf: "XUoPBwSiFbHo-Vnkqg7G_gGrtMUrxCNitLZdAaTw",
    //   }),
    // };
    // const data = await fetch(
    //   `https://api.allorigins.win/get?url=${encodeURIComponent(
    //     "https://www.swiggy.com/dapi/restaurants/list/update"
    //   )}`,
    //   requestOptions
    // );
    // const jsondata = await data.json();
    // console.log(jsondata.contents);
    // const json = JSON.parse(jsondata.contents);
    // console.log(json);
    // console.log(json.data.cards[0].card.card.gridElements.infoWithStyle.restaurants);

  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
      document.documentElement.offsetHeight
    ) {
      return;
    }
    console.log("Reached Bottom");
    // updateData();
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          onChange={changeHandler}
          value={searchText}
        ></input>
        <button className="btn btn-search" onClick={searchHandler}>
          Search
        </button>
        <button
          className="btn filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Filter Top
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((card) => (
         <Link className="card-link" key={card.info.id} to={`/restaurants/${card.info.id}`}><RestaurantCard resData={card} /></Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
