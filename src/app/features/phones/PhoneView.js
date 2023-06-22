import { useState } from "react";
import phone from "../../../images/phone.png";
import tablet from "../../../images/tablet.png";
import { useDispatch, useSelector } from "react-redux";
import { phones as phoneAction, tablets as tabletAction } from "./PhoneSlice";

/**
 * The PhoneView function displays the availability of phones and tablets and allows the user to
 * purchase them through dispatching actions.
 * @returns The PhoneView component is being returned.
 */
function PhoneView() {
  const { phones, tablets } = useSelector((state) => state.phone);
  const dispatch = useDispatch();
  const [tabletNum, setTabletNum] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  return (
    <>
      <div className="container">
        <img src={phone} alt="phone" />
        <p>
          Disponibilité: <span className="count">{phones}</span>
        </p>

        <div className="btnContainer">
          <button onClick={() => dispatch(phoneAction(phoneNum))}>
            Acheter
          </button>
          <input
            type="number"
            min={1}
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="container">
        <img src={tablet} alt="tablet" />
        <p>
          Disponibilité: <span className="count">{tablets}</span>
        </p>

        <div className="btnContainer">
          <button onClick={() => dispatch(tabletAction(tabletNum))}>
            Acheter
          </button>
          <input
            type="number"
            min={1}
            value={tabletNum}
            onChange={(e) => setTabletNum(e.target.value)}
          ></input>
        </div>
      </div>
    </>
  );
}

export default PhoneView;
