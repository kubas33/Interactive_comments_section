import { Fragment } from "react";
import { Button, Stack } from "react-bootstrap";
import { Comment, User } from "../interfaces/CommentInterfaces";

export default function CommentCard({
  comment,
  currentUser,
}: {
  comment: Comment;
  currentUser: User;
}) {
  console.log(comment.user.username);
  return (
    <div key={comment.id} className="comment-card">
      <div>
        <User user={comment.user} />
        <span className="created-at">{comment.createdAt}</span>
      </div>
      <p>
        {comment.replyingTo ? (
          <span className="replying-to">{`@${comment.replyingTo} `}</span>
        ) : null}
        {comment.content}
      </p>
      <Actions user={comment.user} currentUser={currentUser} />
    </div>
  );
}

function User({ user }: { user: User }) {
  return (
    <>
      <picture>
        <source srcSet={user.image.webp} type="image/webp" />
        <img src={user.image.png} alt={user.username} />
      </picture>
      <strong>{user.username}</strong>
    </>
  );
}

function Actions({
  user,
  currentUser,
}: {
  user: User;
  currentUser: User | null;
}) {
  const isCurrent = user.username === currentUser?.username;
  console.log(currentUser?.username);
  return isCurrent ? (
    <Stack direction="horizontal">
      <Button>Delete</Button>
      <Button>Edit</Button>
    </Stack>
  ) : (
    <Button>Reply</Button>
  );
}
