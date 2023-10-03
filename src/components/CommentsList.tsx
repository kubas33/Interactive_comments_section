import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";

export default function CommentsList() {
  const [comments, setComments] = useState([]);

  const getData = async () => {
    const response = await fetch("./src/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    const comments = data["comments"];
    setComments(comments);
    console.log({ comments });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {comments.map((comment) => (
        <CommentCard comment={comment} />
      ))}
    </div>
  );
}
