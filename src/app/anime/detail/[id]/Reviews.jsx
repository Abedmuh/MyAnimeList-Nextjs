
const ReviewTxt  = ({review}) => {
  return (
    <>
    {review?.review && (
      <div className="border-white border-2 p-2 rounded-md">
        <h1>{review.user_email}</h1>
        <h1>{review.review}</h1>
      </div>
    )}
    </>
  )
}

export default ReviewTxt