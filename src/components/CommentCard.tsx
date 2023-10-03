import { Fragment } from "react";

interface CommentCardProps {
  comment: {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: {
      image: {
        png: string;
        webp: string;
      };
      username: string;
    };
    replies: Array<Object>;
  };
}

export default function CommentCard({ comment }: CommentCardProps) {
  return (
    <div key={comment.id} className="comment-card">
      <div>
        <User user={comment.user} />
        <span className="created-at">{comment.createdAt}</span>
      </div>
      <p>{comment.content}</p>
    </div>
  );
}

function User({ user }: { user: CommentCardProps["comment"]["user"] }) {
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
