import { filterItems } from "../../utils";
import ListingCard from "./listingCard";

const ListingList = ({ query, dataset }: any) => {
  const items = filterItems(query, dataset);
  return (
    <div
      style={{
        overflow: "auto",
        display: "flex",
        height: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {items.map((listing: any) => (
        <ListingCard
          key={listing._id}
          listing={listing}
        />
      ))}
    </div>
  );
};

export default ListingList;
