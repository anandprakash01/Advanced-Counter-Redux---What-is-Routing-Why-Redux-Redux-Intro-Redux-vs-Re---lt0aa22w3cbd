export const increment = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
export const incrementByAmount = (amt = 0) => {
  return {
    type: "INCREMENTBYAMOUNT",
    payload: amt,
  };
};
export const signIn = () => {
  return {
    type: "SIGN_IN",
  };
};
export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
