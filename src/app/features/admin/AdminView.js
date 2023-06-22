import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import StockInfos from "../../../components/StockInfos";
import {
  addphones as addPhonesAction,
  addtablets as addTabletsAction,
} from "../phones/PhoneSlice";
import { addtvs as addTvAction } from "../tvs/TvSlice";

const container = {
  width: "300px",
  padding: "20px",
  border: "1px solid grey",
  margin: "10px auto",
};

const btnContainer = {
  display: "flex",
  marginBottom: "12px",
};

function AdminView() {
  const dispatch = useDispatch();
  const { phone, television } = useSelector((state) => state);
  const [phoneNum, setPhoneNum] = useState("");
  const [tabletNum, setTabletNum] = useState("");
  const [tvNum, setTvNum] = useState("");

  return (
    <div style={container}>
      <h2>Admin</h2>

      <StockInfos product="Téléphones" stock={phone.phones}></StockInfos>
      <div style={btnContainer}>
        <input
          type="number"
          min={1}
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
        ></input>
        <button onClick={() => dispatch(addPhonesAction(Number(phoneNum)))}>
          Augmenter Stock
        </button>
      </div>

      <StockInfos product="Tablettes" stock={phone.tablets}></StockInfos>
      <div style={btnContainer}>
        <input
          type="number"
          min={1}
          value={tabletNum}
          onChange={(e) => setTabletNum(e.target.value)}
        ></input>
        <button onClick={() => dispatch(addTabletsAction(Number(tabletNum)))}>
          Augmenter Stock
        </button>
      </div>

      <StockInfos product="Télévisions" stock={television.tvs}></StockInfos>
      <div style={btnContainer}>
        <input
          type="number"
          min={1}
          value={tvNum}
          onChange={(e) => setTvNum(e.target.value)}
        ></input>
        <button onClick={() => dispatch(addTvAction(Number(tvNum)))}>
          Augmenter Stock
        </button>
      </div>
    </div>
  );
}

export default AdminView;
