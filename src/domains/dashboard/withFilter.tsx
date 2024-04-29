import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import { theme } from "../../assets/theme";
import Input from "../../components/Input";
import style from "./index.module.css";

interface Props {
  Component: any;
  dataset: any;
}

const WithFilter = (props: Props) => {
  const { dataset, Component } = props;
  const [query, setQuery] = useState({
    price: 100,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
  });
  const handleOnChange = (e: any) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={style.wfContainer}>
      <div
        className={style.wfFiltersContainer}
        style={{ backgroundColor: `${theme.palette.primary}` }}
      >
        <Dropdown title="Bedrooms" onChange={handleOnChange} />
        <Dropdown title="Bathrooms" onChange={handleOnChange} />
        <Dropdown title="Parking" onChange={handleOnChange} />

        <div className={style.wfPriceFilter}>
          <div style={{ marginTop: "-20px", marginBottom: "-10px" }}>
            <h5>Price Range</h5>
          </div>
          <div
            className={style.wfRangeContainer}
            style={{ backgroundColor: `${theme.palette.white}` }}
          >
            <div className={style.wfRangeTitle}>
              <h6>{`${
                query.price == 100 ? "All" : `$ 0 - ${query.price * 100}`
              }`}</h6>
            </div>
            <Input
              type="range"
              onChange={handleOnChange}
              name="price"
              value={query.price}
            />
          </div>
        </div>
      </div>
      <div className={style.wfComponentContainer}>
        <Component query={query} dataset={dataset} />
      </div>
    </div>
  );
};

export default WithFilter;
