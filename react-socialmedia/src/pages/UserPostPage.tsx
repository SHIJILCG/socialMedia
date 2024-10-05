import { useGetPosts } from "../api/posts/usergetPosts";
import { PostDetailsType } from "../Type/type";
import PostCard from "../components/PostCard";
export const UserPostPage = () => {
  const { data: Post, isError, isLoading } = useGetPosts();
  if (isLoading) return <div>Data is Loading.....</div>;
  if (isError) return <div>Error Occured While Fetching Data</div>;
  return (
    <div>
      {Post.map((post: PostDetailsType) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
