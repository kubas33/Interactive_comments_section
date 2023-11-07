
import { Fragment, useState } from "react";
import { Badge, Form, Stack } from "react-bootstrap";
import { Comment, User } from "../interfaces/CommentInterfaces";
import DeleteModal from "./DeleteModal";

export default function CommentCard({
  comment,
  currentUser,
}: {
  comment: Comment;
  currentUser: User | null;
}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteModal(true); // Pokaż DeleteModal po kliknięciu "Delete"
  }

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false); // Ukryj DeleteModal
  }

  const handleReplyClick = (e) => {
    {currentUser && <AddComment user={currentUser} isReply={true} />};
    console.log('Reply clicked');
  }

  return (
    <div key={comment.id} className="comment-card">
      <Stack direction='horizontal' gap={3} className="user-info">
        <User user={comment.user} />
        <CurrentUserBadge user={comment.user} currentUser={currentUser} />
        <span className="created-at">{comment.createdAt}</span>
      </Stack>
      {isEditing ?
        <EditPost comment={comment} /> :
        <p className="comment-content">
          {comment.replyingTo ? (
            <span className="replying-to fw-bold">{`@${comment.replyingTo} `}</span>
          ) : null}
          {comment.content}
        </p>}

      <LikesCounter likes={comment.score} />
      {isEditing === false &&
        <Actions user={comment.user} currentUser={currentUser} handleDeleteClick={handleDeleteClick} handleEditClick={() => setIsEditing(!isEditing)} />}
      <DeleteModal show={showDeleteModal} onDelete={handleCloseDeleteModal} />
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
  handleDeleteClick,
  handleEditClick,
  handleReplyClick,
}: {
  user: User;
  currentUser: User | null;
  handleDeleteClick: () => void;
  handleEditClick: () => void;
  handleReplyClick: () => void;
}) {
  const isCurrent = user.username === currentUser?.username;
  console.log(`Current user is ${currentUser?.username}`);
  return isCurrent ? (
    <Stack direction="horizontal" className="comment-actions">
      <button className="action-btn delete-link-btn" onClick={handleDeleteClick}>Delete</button>
      <button className="action-btn primary-link-btn edit-link-btn" onClick={handleEditClick}>Edit</button>
    </Stack>
  ) : (
    <button className="action-btn primary-link-btn reply-link-btn comment-actions" onClick={handleReplyClick}>Reply</button>
  );
}

function CurrentUserBadge({
  user,
  currentUser,
}: {
  user: User;
  currentUser: User | null;
}) {
  if (currentUser && user.username === currentUser.username) {
    return (
      <Badge className="badge">
        you
      </Badge>
    );
  }
  return null;
}

function LikesCounter({ likes }: { likes: number }) {
  const [count, setCount] = useState(likes);

  const onPlusClick = () => {
    setCount(count + 1);
  };

  const onMinusClick = () => {
    if (count > 0)
      setCount(count - 1);
  };

  return (
    <div className="likes-counter" aria-label="Scores">
      <button type="button" className="minus" onClick={onMinusClick} >
        <img src="./images/icon-minus.svg" alt="minus" />
      </button>
      <span id="scores" className="read-only-value">
        {count}
      </span>
      <button type="button" className="plus" onClick={onPlusClick}>
        <img src="./images/icon-plus.svg" alt="plus" />
      </button>
    </div>
  );
}

function EditPost({ comment }: { comment: Comment }) {
  return (
    <Form>
      <Form.Control className="edit-textarea" as="textarea" rows={4} value={
        comment.replyingTo ? `@${comment.replyingTo} ${comment.content}`
          : comment.content} />
      <button className="btn btn-primary update-btn">Update</button>
    </Form>
  );
}

