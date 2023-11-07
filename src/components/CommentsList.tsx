import axios from "axios";
import { useEffect, useState } from "react";
import { Comment, User } from "../interfaces/CommentInterfaces";
import CommentCard from "./CommentCard";
import RepliesList from "./RepliesList";
import { Stack } from "react-bootstrap";
import AddComment from "./AddComment";

export default function CommentsList() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const getData = async () => {
    try {
      const response = await axios.get("./src/data.json");
      const data = response.data;
      const comments = data["comments"];
      const user = data["currentUser"];
      setComments(comments);
      setCurrentUser(user);
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <Stack direction="vertical" gap={3}>
      {comments.map((comment) => (
        <Stack direction="vertical" gap={3} key={comment.id}>
          {currentUser !== undefined && (
            <CommentCard comment={comment} currentUser={currentUser} />
          )}
          {comment.replies && comment.replies.length > 0 && <RepliesList comment={comment} currentUser={currentUser} />}

        </Stack>
      ))}
      {currentUser && <AddComment user={currentUser} isReply={false} />}

    </Stack>
  );
}
