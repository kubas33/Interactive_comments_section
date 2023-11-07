
import { Stack } from "react-bootstrap";
import { Comment, User } from "../interfaces/CommentInterfaces";
import CommentCard from "./CommentCard";

export default function RepliesList({
  comment,
  currentUser,
}: {
  comment: Comment;
  currentUser: User | null;
}) {
  const replies = comment.replies;

  return (
    <Stack as="section" direction="horizontal" className="gap-3 gap-sm-0">
      <div className="vr ms-sm-5 me-sm-5"></div>
      <Stack direction="vertical" gap={3}>
        {replies?.map((reply) => <CommentCard key={reply.id} comment={reply} currentUser={currentUser} />)}
      </Stack>
    </Stack>
  );
}
