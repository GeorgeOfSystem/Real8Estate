import { Children, useState } from "react";
import Dropdown from "../../components/dropdown";
import { JsxElement } from "typescript";

interface Props {
  Component: any;
  dataset: any;
}

const WithFilter = (props: Props) => {
  const { dataset, Component } = props;
  const [query, setQuery] = useState({
    price: 6,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
  });
  console.log("query: ", query);

  const handleOnChange = (e: any) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      style={{
        height: "80%",
        backgroundColor: "#61a5c2",
        margin: "0px 20px",
        borderRadius: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
          margin: "10px 40px",
          justifyContent: "space-between",
          backgroundColor: "#2a6f97",
          borderRadius: "16px",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <Dropdown
            title="Bedrooms"
            backgroundColor="#a9d6e5"
            onChange={handleOnChange}
          />
        </div>
        <div style={{ display: "flex" }}>
          <Dropdown
            title="Bathrooms"
            backgroundColor="#a9d6e5"
            onChange={handleOnChange}
          />
        </div>
        <div style={{ display: "flex" }}>
          <Dropdown
            title="Parking"
            backgroundColor="#a9d6e5"
            onChange={handleOnChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#a9d6e5",
            borderRadius: "10px",
            margin: "0px 10px",
            padding: "8px",
            height: "20px",
          }}
        >
          Price Range
          <input
            type="range"
            id="volume"
            name="price"
            min="0"
            max="11"
            onChange={handleOnChange}
          />
        </div>
      </div>
      <div
        style={{
          height: "85%",
          flexWrap: "wrap",
        }}
      >
        <Component query={query} dataset={dataset} />
      </div>
      
    </div>
  );
};

export default WithFilter;
