import { ThumbsUp, Trash } from "phosphor-react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";
import { useState } from "react";

export const Comment = ({ comment, onDeleteComment }) => {
  const [likeCount, setLikeCount] = useState(0);
  const publishedDateFormatted = format(
    comment.publishedAt,
    "d 'de' LLLL HH:mm'h'",
    {
      locale: ptBR,
    }
  );
  const publishedDateRelativeNow = formatDistanceToNow(comment.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleDeleteComment() {
    onDeleteComment(comment.id);
  }

  function handleLikeComment() {
    setLikeCount((previous) => previous + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar src={comment.author.avatarUrl} hasBorder={false} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{comment.author.name}</strong>
              <time
                title={publishedDateFormatted}
                dateTime={comment.publishedAt.toISOString()}
              >
                {publishedDateRelativeNow}
              </time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{comment.comment}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
