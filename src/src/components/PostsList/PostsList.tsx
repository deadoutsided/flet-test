import styles from "./style.module.css";
import { JSX } from "react";
import { PostData } from "../../api/postsApi";
import { NavLink } from "react-router";

type PostsListProps = {
  data: PostData[];
  renderFunc: (data: PostData) => JSX.Element;
  page: number;
  renderPagination: (renderPage: number) => JSX.Element;
};

function PostsList({
  data,
  renderFunc,
  page,
  renderPagination,
}: PostsListProps) {
  return (
    <section className={styles.postsList}>
      <div className={styles.listWrapper}>
        {data
          ?.filter((el, i) => i < page * 10 && i >= (page - 1) * 10)
          .map((el) => renderFunc(el))}
      </div>
      {data && (
        <div className={styles.paginationWrapper}>
          {page > 1 ? (
            <NavLink className={styles.paginationLinks} to={`/${page - 1}`}>
              ←
            </NavLink>
          ) : (
            <p className={styles.paginationPar}>←</p>
          )}
          <div className={styles.paginationNumbers}>
            {data &&
              Array(data.length / 10)
                .fill(1, 0, page * 10)
                .map((el, i) => renderPagination(i + 1))}
          </div>
          {page < Math.ceil(data.length / 10) ? (
            <NavLink className={styles.paginationLinks} to={`/${page + 1}`}>
              →
            </NavLink>
          ) : (
            <p className={styles.paginationPar}>→</p>
          )}
        </div>
      )}
    </section>
  );
}

export default PostsList;
