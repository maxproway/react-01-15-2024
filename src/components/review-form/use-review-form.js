import { useReducer } from "react";

const START_VALUE = {
  name: "",
  text: "",
  rating: 1,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "setName":
      return {
        ...START_VALUE,
        name: payload,
      };

    case "setText":
      return {
        ...state,
        text: payload,
      };

    case "setRating":
      return {
        ...state,
        rating: payload,
      };

    default:
      return state;
  }
};

export const useReviewForm = (initialValue = START_VALUE) => {
  const [form, dispatch] = useReducer(reducer, initialValue);

  const setValue = (type, value) => dispatch({ type, payload: value });

  return { form, setValue };
};
