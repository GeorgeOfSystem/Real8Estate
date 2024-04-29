import Button from "../../components/Button";
import icon from "../../assets/icon/Icon.png";
import { Link } from "react-router-dom";
import style from "./index.module.css";

const NotFoundPage = () => {
  return (
    <div className={style.container}>
      <h3>404 Error</h3>
      <img src={icon} height={"400px"} />
      <h1>Oops!!! Page not found</h1>
      <Button>
        <Link to="/">Go Home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
