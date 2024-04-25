import Buttons from "../../components/buttons";
import icon from "../../assets/icon/Icon.png";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h3>404 Error</h3>
      <img src={icon} height={"400px"} />
      <h1>Oops!!! Page not found</h1>
      <Buttons>
        <Link to="/">Go Home</Link>
      </Buttons>
    </div>
  );
};

export default NotFoundPage;
