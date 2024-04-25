import { ChangeEventHandler } from "react";

interface Props {
  title: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  backgroundColor?: string;
}

const Dropdown = (props: Props) => {
  const { title, backgroundColor, onChange } = props;

  return (
    <div
      style={{
        display: "flex",
        margin: "10px",
        backgroundColor: backgroundColor ?? "white",
        borderRadius: "5px",
        padding: "5px",
      }}
    >
      {title}
      <select
        style={{
          marginLeft: "8px",
          backgroundColor: backgroundColor ?? "white",
          borderRadius: "5px",
          border: "none",
        }}
        onChange={onChange}
        name={title.toLocaleLowerCase()}
      >
        <option key={'all'} value={0}>
          -
        </option>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((option: number) => (
          <option key={option} value={option + 1}>
            {option + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
