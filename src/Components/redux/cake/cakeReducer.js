import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numofCakes: 10,
};
const CakeReducer = (State = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...State,
        numofCakes: State.numofCakes - 1,
      };
    default:
      return State;
  }
};
export default CakeReducer;
