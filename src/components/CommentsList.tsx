import { useEffect, useState } from "react";
import { Comment, User } from "../interfaces/CommentInterfaces";
import CommentCard from "./CommentCard";
import RepliesList from "./RepliesList";

export default function CommentsList() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null); // Deklaruj currentUser i inicjalizuj jako null

  const getData = async () => {
    try {
      const response = await fetch("./src/data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      const comments = data["comments"];
      const user = data["currentUser"];
      setComments(comments);
      setCurrentUser(user); // Ustaw currentUser na otrzymany użytkownik z danych
    } catch (error) {
      console.error("Błąd podczas pobierania danych:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <CommentCard comment={comment} currentUser={currentUser} />{" "}
          {/* Przekaż currentUser jako prop */}
          {comment.replies.length > 0 && <RepliesList comment={comment} />}
        </div>
      ))}
    </div>
  );
}
