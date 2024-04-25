import logo from "../../assets/img/logo.png";
import ListingList from "../../domains/dashboard/listingList";
import WithFilter from "../../domains/dashboard/withFilter";

const listings = [
  {
    _id: 1,
    title: "title1",
    location: "Urubo",
    price: 4.0,
    beds: 1,
    baths: 5,
  },
  {
    _id: 2,
    title: "title2",
    location: "Urubo",
    price: 4.0,
    beds: 2,
    baths: 4,
  },
  {
    _id: 3,
    title: "title3",
    location: "Urubo",
    price: 4.0,
    beds: 3,
    baths: 3,
  },
  {
    _id: 4,
    title: "title4",
    location: "Urubo",
    price: 4.0,
    beds: 4,
    baths: 2,
  },
  {
    _id: 5,
    title: "title5",
    location: "Urubo",
    price: 4.0,
    beds: 5,
    baths: 1,
  },
];

const Dashboard = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "10px",
        }}
      >
        <img src={logo} height={150} width={400} />
      </div>
      <WithFilter dataset={listings} Component={ListingList} />{" "}
    </div>
  );
};

export default Dashboard;
