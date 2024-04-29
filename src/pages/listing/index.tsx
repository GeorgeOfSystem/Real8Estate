import { Link, useLocation, useParams } from "react-router-dom";
import InformationCard from "../../domains/shared/informationCard";
import ListingDetails from "../../domains/listing/listingDetails";
import AgentFrom from "../../domains/listing/agentForm";
import { theme } from "../../assets/theme";
import style from "./index.module.css";
import AgentContact from "../../domains/listing/agentContact";

const Listing = () => {
  const { listingId } = useParams();
  const information = useLocation();

  /**
   * Back-end connection Here:
   * The user might share the information by URL to someone else Or just load by cache the URL., if that is the case. the Listing Detail page wont work.
   * because the listing information is pass by link state when is clicked on dashboard. That's why here need the back-end connection to do a GET By Id if the information is null | undefined.
   * This might need a loader.
   */

  return (
    <div
      className={style.container}
      style={{ backgroundColor: `${theme.palette.background}` }}
    >
      <p style={{ paddingLeft: "30px" }}>
        <Link to={"/"} color="blue">
          Dashboard
        </Link>
        /Listing #{listingId}
      </p>
      <div className={style.cardsContainer}>
        <div style={{ display: "flex", flex: 3, height: "750px" }}>
          <InformationCard headerTitle="Listing Info">
            <ListingDetails listing={information.state} />
          </InformationCard>
        </div>
        <div style={{ display: "flex", flex: 1, height: "100px" }}>
          <InformationCard headerTitle="Contact Agent">
            <AgentContact />
          </InformationCard>
        </div>
      </div>
    </div>
  );
};

export default Listing;
