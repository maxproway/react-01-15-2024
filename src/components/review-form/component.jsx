import { useReducer } from "react";
import styles from "./styles.module.scss";
// import { useReviewForm } from "./use-review-form";

//reducer for useReducer , commment it if use custom Hook (useReviewForm)
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

//variant with useReducer Hook
export const ReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, START_VALUE);
  console.log(form);

  return (
    <div className={styles.root}>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(event) => dispatch({ type: "setName", payload: event.target.value })}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="text">Text</label>
        <input
          id="text"
          type="text"
          value={form.text}
          onChange={(event) => dispatch({ type: "setText", payload: event.target.value })}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          type="number"
          min={1}
          max={5}
          value={form.rating}
          onChange={(event) => dispatch({ type: "setRating", payload: Number(event.target.value) })}
        />
      </div>
      <div className={styles.field}>
        <input type="submit" />
      </div>
    </div>
  );
};

//varian with custom Hook (useReviewForm)
// export const ReviewForm = () => {
//   const { form, setValue } = useReviewForm();
//   console.log(form);
//   return (
//     <div className={styles.root}>
//       <h3>Leave a new Review:</h3>
//       <div className={styles.field}>
//         <label htmlFor="name">Name</label>
//         <input id="name" type="text" value={form.name} onChange={(event) => setValue("setName", event.target.value)} />
//       </div>
//       <div className={styles.field}>
//         <label htmlFor="text">Text</label>
//         <input id="text" type="text" value={form.text} onChange={(event) => setValue("setText", event.target.value)} />
//       </div>
//       <div className={styles.field}>
//         <label htmlFor="rating">Rating</label>
//         <input
//           id="rating"
//           type="number"
//           min={1}
//           max={5}
//           value={form.rating}
//           onChange={(event) => setValue("setRating", event.target.value)}
//         />
//       </div>
//       <div className={styles.field}>
//         <input type="submit" />
//       </div>
//     </div>
//   );
// };
