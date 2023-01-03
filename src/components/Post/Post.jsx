import React, { useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import styles from "./Post.module.css";

export const Post = ({ post } = props) => {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");
  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL HH:mm'h'",
    {
      locale: ptBR,
    }
  );
  const publishedDateRelativeNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([
      ...comments,
      {
        id: String(new Date().getTime()),
        author: {
          avatarUrl: "http://github.com/mariaclarabarbosa.png",
          name: "Maria Clara",
          role: "Front-end Developer",
        },
        comment: newCommentText,
        publishedAt: new Date(),
      },
    ]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleDeleteComment(commentId) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  const isNewCommentEmpty = !newCommentText;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeNow}
        </time>
      </header>
      <div className={styles.content}>
        {post.comment.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form
        onSubmitCapture={handleCreateNewComment}
        className={styles.commentForm}
      >
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          value={newCommentText}
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onDeleteComment={handleDeleteComment}
          />
        ))}
      </div>
    </article>
  );
};
