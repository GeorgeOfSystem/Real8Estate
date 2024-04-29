import logo from "../../assets/img/logo.png";
import { theme } from "../../assets/theme";
import ListingList from "../../domains/dashboard/listingList";
import WithFilter from "../../domains/dashboard/withFilter";
import InformationCard from "../../domains/shared/informationCard";
import style from "./index.module.css";

const listings = [
  {
    _id: 1,
    title: "title1",
    location: "156 Natural Retreats LABELLE, NS B4V 8T8",
    date: "Feb 18, 2022",
    price: 4,
    beds: 1,
    baths: 6,
    parking: 1,
    sqft: 1503,
    yearBuilt: 1996,
    description:
      "Listing description goes here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi elit, volutpat ut euismod non, elementum sed leo. Aliquam at facilisis purus, sit amet blandit augue. Done faucibus fermentum nunc, ac facilisis odio rutrum nec. Fusce et varius orci, vitae pulvinar dui. Curabitur interdum ligula scelerisque scelerisque fringilla. Done dapibus pharetra lectus sed scelerisque. Morbi sit amet mauris lacus. Pellentesque sagittis, nisi non congue eleifend, tortor eros suscipit velit, vel efficitur nunc eros nec dui. Suspendisse sed tempus purus. In hac habitasse platea dictumst. Nam lacinia dolor eu odio ornare efficitur. Quisque imperdiet erat vitae ante semper posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia cure; Suspendisse ac elit nec justo euismod commodo. Fusce nec felis et turpis rutrum hendrerit non sit amet metus.",
  },
  {
    _id: 2,
    title: "title1",
    location: "156 Natural Retreats LABELLE, NS B4V 8T8",
    date: "Feb 18, 2022",
    price: 4,
    beds: 2,
    baths: 5,
    parking: 1,
    sqft: 1503,
    yearBuilt: 1996,
    description:
      "Listing description goes here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi elit, volutpat ut euismod non, elementum sed leo. Aliquam at facilisis purus, sit amet blandit augue. Done faucibus fermentum nunc, ac facilisis odio rutrum nec. Fusce et varius orci, vitae pulvinar dui. Curabitur interdum ligula scelerisque scelerisque fringilla. Done dapibus pharetra lectus sed scelerisque. Morbi sit amet mauris lacus. Pellentesque sagittis, nisi non congue eleifend, tortor eros suscipit velit, vel efficitur nunc eros nec dui. Suspendisse sed tempus purus. In hac habitasse platea dictumst. Nam lacinia dolor eu odio ornare efficitur. Quisque imperdiet erat vitae ante semper posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia cure; Suspendisse ac elit nec justo euismod commodo. Fusce nec felis et turpis rutrum hendrerit non sit amet metus.",
  },
  {
    _id: 3,
    title: "title1",
    location: "156 Natural Retreats LABELLE, NS B4V 8T8",
    date: "Feb 18, 2022",
    price: 4,
    beds: 3,
    baths: 4,
    parking: 1,
    sqft: 1503,
    yearBuilt: 1996,
    description:
      "Listing description goes here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi elit, volutpat ut euismod non, elementum sed leo. Aliquam at facilisis purus, sit amet blandit augue. Done faucibus fermentum nunc, ac facilisis odio rutrum nec. Fusce et varius orci, vitae pulvinar dui. Curabitur interdum ligula scelerisque scelerisque fringilla. Done dapibus pharetra lectus sed scelerisque. Morbi sit amet mauris lacus. Pellentesque sagittis, nisi non congue eleifend, tortor eros suscipit velit, vel efficitur nunc eros nec dui. Suspendisse sed tempus purus. In hac habitasse platea dictumst. Nam lacinia dolor eu odio ornare efficitur. Quisque imperdiet erat vitae ante semper posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia cure; Suspendisse ac elit nec justo euismod commodo. Fusce nec felis et turpis rutrum hendrerit non sit amet metus.",
  },
  {
    _id: 4,
    title: "title1",
    location: "156 Natural Retreats LABELLE, NS B4V 8T8",
    date: "Feb 18, 2022",
    price: 4,
    beds: 4,
    baths: 3,
    parking: 1,
    sqft: 1503,
    yearBuilt: 1996,
    description:
      "Listing description goes here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi elit, volutpat ut euismod non, elementum sed leo. Aliquam at facilisis purus, sit amet blandit augue. Done faucibus fermentum nunc, ac facilisis odio rutrum nec. Fusce et varius orci, vitae pulvinar dui. Curabitur interdum ligula scelerisque scelerisque fringilla. Done dapibus pharetra lectus sed scelerisque. Morbi sit amet mauris lacus. Pellentesque sagittis, nisi non congue eleifend, tortor eros suscipit velit, vel efficitur nunc eros nec dui. Suspendisse sed tempus purus. In hac habitasse platea dictumst. Nam lacinia dolor eu odio ornare efficitur. Quisque imperdiet erat vitae ante semper posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia cure; Suspendisse ac elit nec justo euismod commodo. Fusce nec felis et turpis rutrum hendrerit non sit amet metus.",
  },
  {
    _id: 5,
    title: "title1",
    location: "156 Natural Retreats LABELLE, NS B4V 8T8",
    date: "Feb 18, 2022",
    price: 4,
    beds: 5,
    baths: 2,
    parking: 1,
    sqft: 1503,
    yearBuilt: 1996,
    description:
      "Listing description goes here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi elit, volutpat ut euismod non, elementum sed leo. Aliquam at facilisis purus, sit amet blandit augue. Done faucibus fermentum nunc, ac facilisis odio rutrum nec. Fusce et varius orci, vitae pulvinar dui. Curabitur interdum ligula scelerisque scelerisque fringilla. Done dapibus pharetra lectus sed scelerisque. Morbi sit amet mauris lacus. Pellentesque sagittis, nisi non congue eleifend, tortor eros suscipit velit, vel efficitur nunc eros nec dui. Suspendisse sed tempus purus. In hac habitasse platea dictumst. Nam lacinia dolor eu odio ornare efficitur. Quisque imperdiet erat vitae ante semper posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia cure; Suspendisse ac elit nec justo euismod commodo. Fusce nec felis et turpis rutrum hendrerit non sit amet metus.",
  },
  {
    _id: 6,
    title: "title1",
    location: "156 Natural Retreats LABELLE, NS B4V 8T8",
    date: "Feb 18, 2022",
    price: 1234567,
    beds: 6,
    baths: 1,
    parking: 1,
    sqft: 1503,
    yearBuilt: 1996,
    description:
      "Listing description goes here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi elit, volutpat ut euismod non, elementum sed leo. Aliquam at facilisis purus, sit amet blandit augue. Done faucibus fermentum nunc, ac facilisis odio rutrum nec. Fusce et varius orci, vitae pulvinar dui. Curabitur interdum ligula scelerisque scelerisque fringilla. Done dapibus pharetra lectus sed scelerisque. Morbi sit amet mauris lacus. Pellentesque sagittis, nisi non congue eleifend, tortor eros suscipit velit, vel efficitur nunc eros nec dui. Suspendisse sed tempus purus. In hac habitasse platea dictumst. Nam lacinia dolor eu odio ornare efficitur. Quisque imperdiet erat vitae ante semper posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia cure; Suspendisse ac elit nec justo euismod commodo. Fusce nec felis et turpis rutrum hendrerit non sit amet metus.",
  },
];

const Dashboard = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src={logo} height={150} width={400} />
      </div>
      <InformationCard
        headerTitle="Listings"
        bodyBackground={`${theme.palette.background}`}
      >
        <WithFilter dataset={listings} Component={ListingList} />
      </InformationCard>
    </div>
  );
};

export default Dashboard;
