import { Link } from "react-router-dom";
import houseImage from "../../assets/img/house.jpeg";
import Button from "../../components/Button";
import { theme } from "../../assets/theme";
import style from "./index.module.css";

interface Props {
  listing: any;
}

const ListingCard = (props: Props) => {
  const { listing } = props;
  const { _id, title, location, beds, baths, price } = listing;
  return (
    <div
      className={style.lcContainer}
      style={{
        backgroundColor: `${theme.palette.white}`,
        boxShadow: `0px 0px 10px 5px ${theme.palette.gray_200}`,
      }}
    >
      <img src={houseImage} className={style.lcImg} />

      <div className={style.lcTextContainer}>
        <h2>{title}</h2>
        <div>{location}</div>
        <div className={style.lcBedBathContainer}>
          <div>{beds} Beds |</div>
          <div> {baths} Baths</div>
        </div>
        <div style={{ fontSize: "32px" }}>${price}</div>
        <Link to={`/listing/${_id}`} state={listing}>
          <Button
            styles={{
              width: "200px",
              border: `1px solid ${theme.palette.primary_700}`,
              color: `${theme.palette.white}`,
              backgroundColor: `${theme.palette.primary_500}`,
            }}
          >
            See Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;
