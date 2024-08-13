import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((card) => (
          <RestaurantCard key={card.info.id} resData={card} />
        ))}
      </div>
    </div>
  );
};

export default Body;
