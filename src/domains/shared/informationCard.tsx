import { theme } from "../../assets/theme";
import style from "./index.module.css";

interface Props {
  headerTitle: string;
  children: any;
  bodyBackground?: string;
}

const InformationCard = (props: Props) => {
  const { headerTitle, children, bodyBackground } = props;
  return (
    <div
      className={style.container}
      style={{ boxShadow: `0px 0px 10px 5px ${theme.palette.gray_200}` }}
    >
      <div
        className={style.headerTitleContainer}
        style={{ backgroundColor: `${theme.palette.primary}` }}
      >
        <h3 className={style.headerTitle}>{headerTitle}</h3>
      </div>
      <div
        className={style.childrenContainer}
        style={{ backgroundColor: bodyBackground ?? `${theme.palette.white}` }}
      >
        {children}
      </div>
    </div>
  );
};

export default InformationCard;
