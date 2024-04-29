import { ChangeEventHandler } from "react";
import style from "./index.module.css";

interface Props {
  title: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

const Dropdown = (props: Props) => {
  const { title, onChange } = props;

  return (
    <div className={style.container}>
      <h5>{title}</h5>
      <select
        className={style.select}
        onChange={onChange}
        name={title.toLocaleLowerCase()}
      >
        <option key={"all"} value={0}>
          All
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
