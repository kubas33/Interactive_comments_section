import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { Comment, User } from "../interfaces/CommentInterfaces";
import CommentCard from "./CommentCard";

export default function RepliesList({
  comment,
  currentUser,
}: {
  comment: Comment;
  currentUser: User;
}) {
  const replies = comment.replies;

  return (
    <Stack as="section" direction="horizontal" gap={3}>
      <div className="vr"></div>
      <Stack direction="vertical">
        {replies?.map((reply) => <CommentCard comment={reply} currentUser={currentUser} />)}
      </Stack>
    </Stack>
  );
}
