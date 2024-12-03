import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: asin
  });

  useEffect(() => {
    setComment((prevComment) => ({
      ...prevComment,
      elementId: asin
    }));
  }, [asin]); // Questo effetto si attiverà ogni volta che asin cambia

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTgxZjhhZDEyOTAwMTU4NzZiZTQiLCJpYXQiOjE3MzMyMzQzNzQsImV4cCI6MTczNDQ0Mzk3NH0.tHq9bN5GM9RDmifvdg9kDk4_FY6DZTgNeHIXB2JrEHM"
          }
        }
      );

      if (response.ok) {
        alert("Recensione inviata!");
        setComment({
          comment: "",
          rate: 1,
          elementId: asin
        });
      } else {
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={comment.comment}
            onChange={(e) =>
              setComment((prevComment) => ({
                ...prevComment,
                comment: e.target.value
              }))
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment((prevComment) => ({
                ...prevComment,
                rate: e.target.value
              }))
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
