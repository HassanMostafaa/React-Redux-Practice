import { increament, decreament } from "./actionTypes";

export const increamentCount = () => {
  return {
    type: increament,
    payload: "",
  };
};

export const decreamentCount = () => {
  return {
    type: decreament,
    payload: "",
  };
};
