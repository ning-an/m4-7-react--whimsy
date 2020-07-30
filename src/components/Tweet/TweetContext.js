import React, { createContext, useState } from "react";
import moment from "moment";
import avatar from "../../assets/carmen-sandiego.png";

const date = moment().format("h:mm a - MMMM Do, YYYY");

export const TweetContext = createContext(null);

export const TweetProvider = ({ children }) => {
  const [numOfLikes, setnumOfLikes] = useState(460);
  const [numOfRetweets, setNumOfRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const handleToggleLike = () => {
    isLiked ? setnumOfLikes(numOfLikes - 1) : setnumOfLikes(numOfLikes + 1);
    setIsLiked(!isLiked);
  };
  const handleToggleRetweet = () => {
    isRetweeted
      ? setNumOfRetweets(numOfRetweets - 1)
      : setNumOfRetweets(numOfRetweets + 1);
    setIsRetweeted(!isRetweeted);
  };
  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
        date,
        numOfLikes,
        numOfRetweets,
        handleToggleLike,
        handleToggleRetweet,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
