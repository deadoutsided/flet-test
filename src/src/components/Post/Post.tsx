import styles from './style.module.css'
import { PostData } from "../../api/postsApi";

type PostProps = {
    data: PostData;
    author: string;
}


function Post({data, author} : PostProps) {

  return (
    <div className={styles.PostWrapper}>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        <p>Author: {author}</p>
    </div>
  )
}

export default Post
