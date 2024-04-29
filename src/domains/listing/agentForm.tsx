import { useEffect, useState } from "react";
import { theme } from "../../assets/theme";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { emailValidation } from "../../utils";
import style from "./index.module.css";
import useLocalStorage from "../../customHooks/useLocalStorage";

interface Props {
  setIsContactSaved: Function;
  IsContactSaved: any;
}

const AgentFrom = (props: Props) => {
  const { setIsContactSaved, IsContactSaved } = props;

  const [formInformation, setFormInformation] = useState({
    send: false,
    name: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [errorMsg, setErrorMsg] = useState<{ msgs: object[]; names: string[] }>(
    { msgs: [], names: [] }
  );

  useEffect(() => {
    setFormInformation({
      ...formInformation,
      name: IsContactSaved.name,
      email: IsContactSaved.email,
      phone: IsContactSaved.phone,
      comments: IsContactSaved.comments,
    });
  }, [IsContactSaved]);

  const { getItem } = useLocalStorage("savedProperties");

  const handleForm = (e: any) => {
    let lSData = getItem();
    const newData = {
      ...formInformation,
      [e.target.name]: e.target.value,
    };
    const agentContact = (({ send, ...rest }) => rest)(newData);
    setIsContactSaved(
      lSData.some(
        (e: any) => JSON.stringify(e) === JSON.stringify(agentContact)
      )
        ? 1
        : 2
    );
    setErrorMsg({ msgs: [], names: [] });
    setFormInformation({
      ...newData,
      send: false,
    });
  };

  const handleButton = () => {
    const { name, email, phone, comments } = formInformation;
    let fieldsError = [];
    let errorNames = [];

    if (name == "") {
      fieldsError.push({
        name: "name",
        msg: "Full Name is Required",
      });
      errorNames.push("name");
    }
    if (email == "") {
      fieldsError.push({
        name: "email",
        msg: "The Email is Required",
      });
      errorNames.push("email");
    } else if (!emailValidation(email)) {
      fieldsError.push({
        name: "email",
        msg: "Invalid Email Format",
      });
      errorNames.push("email");
    }
    if (phone == "") {
      fieldsError.push({
        name: "phone",
        msg: "The Phone is Required",
      });
      errorNames.push("phone");
    }
    if (comments == "") {
      fieldsError.push({
        name: "comments",
        msg: "Comments are Required",
      });
      errorNames.push("comments");
    }

    if (fieldsError.length) {
      setErrorMsg({
        msgs: fieldsError,
        names: errorNames,
      });
    } else {
      setFormInformation({ ...formInformation, send: true });
      const agentContact = (({ send, ...rest }) => rest)(formInformation);
      setIsContactSaved(3, agentContact);
    }
  };

  const getErrorMsg = (name: string) => {
    return errorMsg.msgs.filter((errorInfo: any) => errorInfo.name == name);
  };

  return (
    <div className={style.afContainer}>
      <Input
        name="name"
        placeholder="Full Name *"
        type="text"
        hasError={errorMsg.names.includes("name")}
        errorMsg={getErrorMsg("name")}
        onChange={handleForm}
        value={formInformation.name}
      />
      <Input
        name="email"
        placeholder="Email *"
        type="email"
        hasError={errorMsg.names.includes("email")}
        errorMsg={getErrorMsg("email")}
        onChange={handleForm}
        value={formInformation.email}
      />
      <Input
        name="phone"
        placeholder="Phone Number *"
        type="tel"
        hasError={errorMsg.names.includes("phone")}
        errorMsg={getErrorMsg("phone")}
        onChange={handleForm}
        value={formInformation.phone}
      />
      <Input
        name="comments"
        placeholder="Comments *"
        type="text"
        styles={{ height: "50px" }}
        hasError={errorMsg.names.includes("comments")}
        errorMsg={getErrorMsg("comments")}
        onChange={handleForm}
        value={formInformation.comments}
      />
      <Button
        styles={{
          color: `${theme.palette.white}`,
          backgroundColor: `${theme.palette.primary_500}`,
          border: `1px solid ${theme.palette.primary_700}`,
        }}
        onClick={handleButton}
      >
        Contact Now
      </Button>
      {formInformation.send && (
        <h6
          className={style.afMsg}
          style={{
            color: `${theme.palette.green_700}`,
            backgroundColor: `${theme.palette.green_100}`,
          }}
        >
          Message sent successfully
        </h6>
      )}
    </div>
  );
};

export default AgentFrom;
