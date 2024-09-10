const User = (props) => {
  const { name, location } = props;
  return (
    <div className="user--details">
      <h1>{name}</h1>
      <h2>{location}</h2>
    </div>
  );
};

export default User;
