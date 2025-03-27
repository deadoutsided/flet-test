import { NavLink } from "react-router";
import { PostData } from "../../api/postsApi";

type PostsListItemProps = {
  data: PostData;
};

function PostsListItem({ data }: PostsListItemProps) {
  return (
  <div>
    <NavLink to={`/post/${data.id}`}> {data.title} </NavLink>
  </div>
  );
}

export default PostsListItem;
