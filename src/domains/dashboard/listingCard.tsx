import { Link } from "react-router-dom";
import houseImage from "../../assets/img/house.jpeg";
import Buttons from "../../components/buttons";

interface Props {
  listing: any;
}

const ListingCard = (props: Props) => {
  const { listing } = props;
  const { _id, title, location, beds, baths, price } = listing;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "10px",
        padding: "10px 20px",
        borderRadius: "16px",
        width: "45%",
        backgroundColor: "white",
        height: "240px",
      }}
    >
      <img src={houseImage} style={{ borderRadius: "10px" }} />
      <div
        style={{
          marginLeft: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "180px",
          width: "100%",
        }}
      >
        <h2>{title}</h2>
        <div>{location}</div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div>{beds} Beds |</div>
          <div> {baths} Baths</div>
        </div>
        <text style={{ fontSize: "32px" }}>${price}</text>
        <Buttons>
          <Link to={`/listing/${_id}`}>See Details</Link>
        </Buttons>
      </div>
    </div>
  );
};

export default ListingCard;
