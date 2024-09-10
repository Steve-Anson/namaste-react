import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      {/* <User name="Steve-function" location="location-function" /> */}
      <UserClass name="Steve-class" location="location-class" />
    </div>
  );
};

export default About;
