import { MouseEventHandler } from "react";

interface Props {
  close: MouseEventHandler<HTMLDivElement>;
  children: any;
}
const Modal = (props: Props) => {
  const { close, children } = props;
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={close}
    >
      {children}
    </div>
  );
};
export default Modal;
