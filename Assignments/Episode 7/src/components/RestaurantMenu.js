import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";
import { RES_MENU_DEL_ICON } from "../../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    city,
    avgRating,
    totalRatingsString,
    areaName,
    sla,
    feeDetails,
    expectationNotifiers,
  } = resInfo?.cards[2]?.card?.card?.info;

  //   const { itemCards } =
  //     resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  console.log(resInfo);

  //   const recoMenu = itemCards.map((itemcard) => {
  //     return <li key={itemcard.card.info.id}>{itemcard.card.info.name}</li>;
  //   });

  return (
    <div className="menu">
      {/* <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {recoMenu}
      </ul> */}

      <div className="res-path">
        <Link className="res-menu-home-link" to="/">
          <p>Home</p>
        </Link>
        <p>/</p>
        <p>{city}</p>
        <p>/</p>
        <p className="res-path-resname">{name}</p>
      </div>
      <h1 className="resmenu--name">{name}</h1>
      <div className="resmenu--container">
        <div className="resmenu--details">
          <div className="resmenu--ratingdetails">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              role="img"
              aria-hidden="true"
              strokecolor="rgba(2, 6, 12, 0.92)"
              fillcolor="rgba(2, 6, 12, 0.92)"
            >
              <circle
                cx="10"
                cy="10"
                r="9"
                fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
              ></circle>
              <path
                d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                fill="white"
              ></path>
              <defs>
                <linearGradient
                  id="StoreRating20_svg__paint0_linear_32982_71567"
                  x1="10"
                  y1="1"
                  x2="10"
                  y2="19"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#21973B"></stop>
                  <stop offset="1" stopColor="#128540"></stop>
                </linearGradient>
              </defs>
            </svg>
            <p>{avgRating}</p>
            <p>({totalRatingsString})</p>
            <div className="dot1--rating"></div>
            <p>{costForTwoMessage}</p>
          </div>
          <div className="resmenu--cuisine--container">
            {cuisines.map((cuisine) => {
              return (
                <a className="resmenu--cuisines" key={cuisine}>
                  {cuisine}
                </a>
              );
            })}
          </div>

          <div className="resmenu--outlet--details">
            <div className="dot-line-dot">
              <div className="dot1"></div>
              <div className="line"></div>
              <div className="dot1"></div>
            </div>

            <div className="resmenu--outlet--outer">
              <div className="resmenu--outlet--container">
                <p>Outlet</p>
                <p>{areaName}</p>
              </div>

              <p>{sla.slaString}</p>
            </div>
          </div>
          <hr></hr>
          <div className="resmenu--delivery--details">
            <img
              className="del--icon"
              src={`${RES_MENU_DEL_ICON}/${expectationNotifiers[0].icon.imageId}`}
            ></img>
            <p>{sla.lastMileTravel} kms</p>
            <div className="line--delivery"></div>
            <p>₹{feeDetails.amount / 100} Delivery fee will apply</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
