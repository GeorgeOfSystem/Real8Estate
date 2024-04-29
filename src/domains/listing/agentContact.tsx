import Button from "../../components/Button";
import hearth from "../../assets/svg/hearth.svg";
import check from "../../assets/svg/checked.svg";
import { theme } from "../../assets/theme";
import AgentFrom from "./agentForm";
import { useEffect, useState } from "react";
import Modal from "../../components/modal";
import SavedProperties from "./savedProperties";
import useLocalStorage from "../../customHooks/useLocalStorage";

const AgentContact = () => {
  const [modalInfo, setModalInfo] = useState<{
    isOpen: boolean;
    agentInfo: any;
    isSaved: 1 | 2 | 3; //1 Saved, 2 saved Properties 3 Save Property
    toFill: any;
  }>({
    isSaved: 2,
    isOpen: false,
    agentInfo: {},
    toFill: {},
  });
  const { setItem } = useLocalStorage("savedProperties");

  const handleInfo = (name: string, value: any) => {
    setModalInfo({
      ...modalInfo,
      [name]: value,
    });
  };

  return (
    <div>
      <div
        style={{
          marginTop: "-15px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          styles={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: `${
              modalInfo.isSaved === 1
                ? theme.palette.green_700
                : theme.palette.primary_500
            }`,
          }}
          onClick={() => {
            if (modalInfo.isSaved === 2) {
              handleInfo("isOpen", true);
            } else if (modalInfo.isSaved === 3) {
              setItem(modalInfo.agentInfo);
              handleInfo("isSaved", 1);
            }
          }}
        >
          <img
            src={modalInfo.isSaved === 1 ? check : hearth}
            height={15}
            style={{ marginRight: "5px" }}
          />
          <div style={{ color: `${theme.palette.primary_50}` }}>
            {modalInfo.isSaved === 1
              ? "Saved"
              : modalInfo.isSaved === 2
              ? "Saved Properties"
              : "Save Property"}
          </div>
        </Button>
      </div>
      <AgentFrom
        IsContactSaved={modalInfo.toFill}
        setIsContactSaved={(isSaved: 1 | 2 | 3, agentContact?: any) => {
          isSaved === 3
            ? setModalInfo({
                ...modalInfo,
                agentInfo: agentContact,
                isSaved: isSaved,
              })
            : handleInfo("isSaved", isSaved);
        }}
      />
      {modalInfo.isOpen && (
        <SavedProperties
          closeModal={() => handleInfo("isOpen", false)}
          fillInformation={(toFill: any) =>
            setModalInfo({
              ...modalInfo,
              toFill: toFill,
              isOpen: false,
            })
          }
        />
      )}
    </div>
  );
};
export default AgentContact;
