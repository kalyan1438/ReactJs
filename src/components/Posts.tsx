import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "@/redux/slices/postSlice";

const Posts = () => {
  const { posts, loading, error } = useSelector(
    (state: any) => state.posts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts() as any);
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {posts.map((post: any) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default Posts;
