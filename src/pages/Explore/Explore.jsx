import "./Explore.css";
import { Post } from "../../components/Post/Post";

import React from "react";
import { usePosts } from "../../contexts/PostsProvider";
import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";
import { Discover } from "../../components/Discover/Discover";
import { useAuth } from "../../contexts/AuthProvider";

export const Explore = () => {
  const { allPosts, postLoading } = usePosts();
  const { auth } = useAuth();

  const allPostsSortedByLatest = allPosts?.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  return (
    <>
      {" "}
      {auth.isAuth && <Header />}
      <div className="app-container">
        {auth.isAuth && <Navbar />}

        {
          <main className="feed explore-page-container">
            {!postLoading &&
              allPostsSortedByLatest?.map((post) => {
                return <Post post={post} />;
              })}
          </main>
        }

        {auth.isAuth && <Discover className="discover" />}
      </div>
    </>
  );
};
