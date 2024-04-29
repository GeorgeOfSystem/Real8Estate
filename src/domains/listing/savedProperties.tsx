import { MouseEventHandler, useState } from "react";
import Modal from "../../components/modal";
import { theme } from "../../assets/theme";
import useLocalStorage from "../../customHooks/useLocalStorage";
import Button from "../../components/Button";
import InformationCard from "../shared/informationCard";

interface Props {
  closeModal: MouseEventHandler<HTMLDivElement>;
  fillInformation: Function;
}
const SavedProperties = (props: Props) => {
  const { closeModal, fillInformation } = props;
  const { getItem } = useLocalStorage("savedProperties");
  const [properties, _] = useState(getItem() ?? []);
  const [toFill, setToFill] = useState<any>();
  return (
    <Modal close={closeModal}>
      <div onClick={(event) => event.stopPropagation()}>
        <InformationCard headerTitle="Saved Properties">
          {properties.length ? (
            <div>
              <h3>Please Choose the Email of the Property</h3>
              <select
                onChange={(e) => {
                  const index = e.target.value;
                  if (e.target.value !== "Emails") {
                    setToFill(properties[index]);
                  }
                }}
                style={{ height: "30px", marginBottom: "10px" }}
              >
                <option>Emails</option>
                {properties.map((property: any, index: number) => (
                  <optgroup label={property.name}>
                    <option key={index} value={index}>
                      {property.email}
                    </option>
                  </optgroup>
                ))}
              </select>
            </div>
          ) : (
            <div>There is no Properties Saved</div>
          )}
          {toFill && (
            <div>
              <div>Full Name: {toFill?.name}</div>
              <div>Email: {toFill.email}</div>
              <div>Phone Number: {toFill.phone}</div>
              <div>Comments: {toFill.comments}</div>
              <Button
                styles={{ backgroundColor: `${theme.palette.primary_500}` }}
                onClick={() => {
                  fillInformation(toFill);
                  //closeModal;
                }}
              >
                <div style={{ color: `${theme.palette.white}` }}>
                  Fill Information
                </div>
              </Button>
            </div>
          )}
        </InformationCard>
      </div>
    </Modal>
  );
};

export default SavedProperties;
