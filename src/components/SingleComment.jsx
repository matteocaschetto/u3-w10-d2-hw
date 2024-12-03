import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTgxZjhhZDEyOTAwMTU4NzZiZTQiLCJpYXQiOjE3MzMyMzQzNzQsImV4cCI6MTczNDQ0Mzk3NH0.tHq9bN5GM9RDmifvdg9kDk4_FY6DZTgNeHIXB2JrEHM"
          }
        }
      );
      if (response.ok) {
        alert("La recensione è stata elimata!");
      } else {
        throw new Error("La recensione non è stata eliminata!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
