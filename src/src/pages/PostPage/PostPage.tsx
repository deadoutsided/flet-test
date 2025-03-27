import styles from "./style.module.css";
import { useParams } from "react-router";
import { useGetPostsQuery } from "../../api/postsApi";
import { Post } from "../../components/Post";
import { useCallback, useMemo } from "react";
import { useGetUsersQuery } from "../../api/usersApi";
import { CommentsList } from "../../components/CommentsList";
import { CommentData, useGetCommentsQuery } from "../../api/commentsApi";
import { CommentItem } from "../../components/CommentItem";

function PostPage() {
  const { data: postsData } = useGetPostsQuery();
  const { data: usersData, isLoading } = useGetUsersQuery();
  const {
    data: commentsData,
    isLoading: isCommentsLoading,
  } = useGetCommentsQuery();

  const params = useParams();
  const postIdNum = Number(params.postId);

  const renderCommentItem = useCallback((data: CommentData) => {
    return <CommentItem data={data} key={data.id} />;
  }, []);

  const currentPost = useMemo(() => {
    return postsData
      ? postsData?.filter((el) => el.id === postIdNum)[0]
      : { title: "Loading..", body: "Loading..", id: -1, userId: -1 };
  }, [params, postsData]);
  const currentPostAuthor = useMemo(() => {
    return usersData && !isLoading
      ? usersData?.filter((el) => el.id === currentPost.userId)[0]?.username
      : "Loading..";
  }, [params.postId, usersData]);
  const currentComments = useMemo(() => {
    return commentsData?.filter((el) => el.postId === postIdNum)
  }, [params, commentsData])

  return (
    <div className={styles.PostsWrapper}>
      <Post data={currentPost} author={currentPostAuthor} />
      {currentComments !== undefined && <CommentsList data={currentComments} renderFunc={renderCommentItem} />}
      {isCommentsLoading && <p>Comments currently loading..</p>}
    </div>
  );
}

export default PostPage;
