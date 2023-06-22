import { useState } from "react";
import tv from "../../../images/tv.png";
import { useDispatch, useSelector } from "react-redux";
import { tvs as tvsAction } from "./TvSlice";

function TvView() {
  const { tvs } = useSelector((state) => state.television);
  const dispatch = useDispatch();
  const [tvNum, setTvNum] = useState("");

  const handelDispatchTv = () => {
    dispatch(tvsAction(tvNum));
    setTvNum(1);
  };

  return (
    <div className="container">
      <img src={tv} alt="tv" />
      <p>
        Disponibilité: <span className="count">{tvs}</span>
      </p>

      {tvs > 0 && (
        <div className="btnContainer">
          <button onClick={handelDispatchTv}>Acheter</button>
          <input
            type="number"
            min={1}
            value={tvNum}
            onChange={(e) => setTvNum(e.target.value)}
          ></input>
        </div>
      )}
    </div>
  );
}

export default TvView;
