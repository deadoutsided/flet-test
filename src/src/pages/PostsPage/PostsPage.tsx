import styles from "./style.module.css";
import { NavLink, useParams } from "react-router";
import { PostData, useGetPostsQuery } from "../../api/postsApi";
import { useCallback } from "react";
import { PostsList } from "../../components/PostsList";
import { PostsListItem } from "../../components/PostListItem";

function PostsPage() {
    const params = useParams();
    const page = Number(params.page);
  
    const { data: postsData, isLoading} = useGetPostsQuery();
  
    const renderItem = useCallback((data: PostData) => {
      return <PostsListItem data={data} key={data.id} />;
    }, []);
    const renderPagination = useCallback(
      (renderPage: number) => {
        if (page === renderPage) {
          return (
            <p key={renderPage} className={styles.paginationPar}>
              {renderPage}
            </p>
          );
        }
  
        return (
          <NavLink to={`/${renderPage}`} className={styles.paginationLinks} key={renderPage}>
            {renderPage}
          </NavLink>
        );
      },
      [page]
    );

  return (
    <>
        {postsData && <PostsList data={postsData} renderFunc={renderItem} renderPagination={renderPagination} page={page} />}
        {isLoading && <p>Loading...</p>}
    </>
  );
}

export default PostsPage;
