import styles from "./style.module.css";
import { JSX } from "react";
import { CommentData } from "../../api/commentsApi";

type CommentsListProps = {
  data: CommentData[];
  renderFunc: (data: CommentData) => JSX.Element;
};

function CommentsList({ data, renderFunc }: CommentsListProps) {

  return (
    <section className={styles.commentsList}>
      <p className={styles.title}>Comments</p>
      <div className={styles.listWrapper}>
        {data && data.map((el) => renderFunc(el))}
      </div>
    </section>
  );
}

export default CommentsList;
