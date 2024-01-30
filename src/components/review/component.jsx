export const Review = ({ review }) => {
  return (
    <div>
      {review.text}, <strong>{review.user}</strong>, {review.rating}*
    </div>
  );
};
