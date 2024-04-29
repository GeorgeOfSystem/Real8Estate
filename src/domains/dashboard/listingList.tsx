import { filterItems } from "../../utils";
import ListingCard from "./listingCard";
import style from "./index.module.css";

const ListingList = ({ query, dataset }: any) => {
  const items = filterItems(query, dataset);
  return (
    <div className={style.llContainer}>
      {items.map((listing: any) => (
        <ListingCard key={listing._id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingList;
