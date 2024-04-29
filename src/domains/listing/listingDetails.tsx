import house from "../../assets/img/house.jpeg";
import style from "./index.module.css";

interface Props {
  listing: any;
}

const ListingDetails = (props: Props) => {
  const { listing } = props;
  const {
    title,
    location,
    date,
    price,
    beds,
    baths,
    parking,
    sqft,
    yearBuilt,
    description,
  } = listing;
  const TitleInformation = ({
    title,
    info,
  }: {
    title: string;
    info: string;
  }) => (
    <div className={style.ldTitleInfoT}>
      <h4>{title}</h4>
      <div className={style.ldTitleInfoI}>{info}</div>
    </div>
  );

  return (
    <div className={style.ldContainer}>
      <div>
        <img src={house} className={style.ldImg} />
        <TitleInformation title="Beds: " info={beds} />
        <TitleInformation title="Baths: " info={baths} />
        <TitleInformation title="Parking: " info={parking} />
        <TitleInformation title="SQFT: " info={sqft} />
        <TitleInformation title="Year Built: " info={yearBuilt} />
      </div>
      <div className={style.ldMainInfo}>
        <div>
          <TitleInformation title="Listing Title:" info={title} />
          <TitleInformation title={`$ ${price}`} info="" />
          <TitleInformation title="Location:" info={location} />
          <TitleInformation title="Date:" info={date} />
        </div>
        <div>
          <TitleInformation title="Description: " info={description} />
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
