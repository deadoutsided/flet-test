import { CommentData } from "../../api/commentsApi";
import avatar from '../../../assets/avatar.png'
import styles from "./style.module.css";

type CommentItemProps = {
  data: CommentData;
};

function CommentItem({ data }: CommentItemProps) {
  return (
    <div className={styles.CommentItemWrapper}>
      <img src={avatar} className={styles.avatar} />
      <div>
        <p className={styles.commentName}>Name: {data.name}</p>
        <p className={styles.commentBody}>{data.body}</p>
      </div>
    </div>
  );
}

export default CommentItem;
