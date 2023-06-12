import "./Post.css";
import { FaRegComment } from "react-icons/fa";
import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { BsShare } from "react-icons/bs";

import React from "react";

export const Post = ({ post }) => {
  const {
    _id,
    avatarURL,
    firstName,
    lastName,
    username,
    createdAt,
    content,
    mediaUrl,
    comments,
    likes,
  } = post;

  const getTimeDifference = (date) => {
    const datePosted = new Date(date);
    const currentTime = new Date();
    const milliseconds = currentTime - datePosted;
    const seconds = Math.floor(milliseconds / 1000);

    if (seconds > 59) {
      const minutes = Math.floor(seconds / 60);
      if (minutes > 59) {
        const hours = Math.floor(minutes / 60);
        if (hours > 23) {
          const days = Math.floor(hours / 24);
          if (days > 30) {
            const months = Math.floor(days / 30);
            if (months > 11) {
              const options = {
                year: "numeric",
                month: "short",
                day: "numeric",
              };
              return datePosted.toLocaleDateString("en-US", options);
            } else {
              return `${months} month${months === 1 ? "" : "s"} ago`;
            }
          } else {
            return `${days} day${days === 1 ? "" : "s"} ago`;
          }
        } else {
          return `${hours} hour${hours === 1 ? "" : "s"} ago`;
        }
      } else {
        return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
      }
    } else {
      return milliseconds;
    }
  };
  return (
    <div  className="post-card">
      <div className="profile-picture-container">
        <img src={avatarURL} />
      </div>
      <div className="post-card-content">
        <div className="name-container">
          <div>
            <span className="name">
              {firstName} {lastName}
            </span>{" "}
            <span className="username">{`@${username}`}</span>{" "}
            <span className="date">{getTimeDifference(createdAt)}</span>
          </div>
          <div>Edit</div>
        </div>

        <div className="caption-container">
          <p>{content}</p>
        </div>

        <div className="media">
          <video muted loop>
            <source src={mediaUrl} />
          </video>
        </div>

        <div className="post-actions-container">
          <div className="comments-container">
            <FaRegComment />
            <span>{comments?.length}</span>
          </div>
          <div className="comments-container">
            <RiHeart3Line />
            <span>{likes?.likeCount}</span>
          </div>
          <div className="comments-container">
            <BsShare />
            <span>{}</span>
          </div>
          <div className="comments-container">
            <FaRegBookmark />
            <span>{}</span>
          </div>
        </div>
      </div>
    </div>
  );
};