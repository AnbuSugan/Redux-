import React from "react";
import { connect } from "react-redux";
import { buycake } from "./redux/cake/cakeAction";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes-{props.numofCakes}</h2>
      <button onClick={props.buycake}>BuyCake</button>
    </div>
  );
}
const mapstateToprops = (state) => {
  return {
    numofCakes: state.numofCakes,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    buycake: () => dispatch(buycake()),
  };
};
export default connect(mapstateToprops, mapDispatchToprops)(CakeContainer);
