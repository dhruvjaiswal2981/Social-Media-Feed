import "./Profile.css";
import React from "react";
import { usePosts } from "../../contexts/PostsProvider";
import { useAuth } from "../../contexts/AuthProvider";
import { Post } from "../../components/Post/Post";
import { useUser } from "../../contexts/UserProvider";
import { CgCalendarDates } from "react-icons/cg";

export const Profile = () => {
  const { auth } = useAuth();

  const { userState } = useUser();
  const { allPosts } = usePosts();
  const postsByUser = allPosts?.filter(
    (post) => post.username === auth.username
  );

  const user = userState.allUsers?.find(
    ({ username }) => username === auth.username
  );

  const createdOnDate = () => {
    const createdOn = new Date(user?.createdAt);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return createdOn.toLocaleDateString("en-US", options);
  };

  console.log(user);

  return (
    <main className="feed">
      <div className="user-info-container">
        <div className="profilepicture-container">
          <img src={user?.avatarURL} alt={user?.firstName} />
          <button>Edit Profile</button>
        </div>
        <div className="username-container">
          <p className="name">
            {user?.firstName} {user?.lastName}
          </p>
          <p className="username">@{user?.username}</p>
        </div>
        <div className="bio-container">
          <p>{user?.bio}</p>
        </div>

        <div className="website-container">
          <a>{user?.website}</a>
          <div className="joining-date-container">
            <CgCalendarDates />
            <span>Joined {createdOnDate()}</span>
          </div>
        </div>
        <div className="post-followers-following-container">
        <p>
            {postsByUser.length}
            <span>Posts</span>
          </p>
          <p>
            {user?.following.length}
            <span>Following</span>
          </p>
          <p>
            {user?.followers.length}
            <span>Followers</span>
          </p>
        </div>
      </div>

      <div className="user-posts-container">
        {postsByUser.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </main>
  );
};
