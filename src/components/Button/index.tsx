import { MouseEventHandler, ReactNode } from "react";
import style from "./index.module.css";

interface Props {
  children: string | ReactNode;
  styles?: React.CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: Props) => {
  const { children, styles, onClick } = props;
  return (
    <button className={style.button} style={{ ...styles }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
