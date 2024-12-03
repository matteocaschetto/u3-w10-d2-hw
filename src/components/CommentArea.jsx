import React, { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" + asin,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTgxZjhhZDEyOTAwMTU4NzZiZTQiLCJpYXQiOjE3MzMyMzQzNzQsImV4cCI6MTczNDQ0Mzk3NH0.tHq9bN5GM9RDmifvdg9kDk4_FY6DZTgNeHIXB2JrEHM"
            }
          }
        );
        if (response.ok) {
          let commentsData = await response.json();
          setComments(commentsData);
          setIsLoading(false);
          setIsError(false);
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    if (asin) {
      fetchComments();
    }
  }, [asin]); // L'effetto si attiva ogni volta che asin cambia

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
