import "./TweetButton.css";
import React from "react";

function TweetButton({ handleTweet, fact }) {
  console.log(fact.text);
  return (
    <div className="tweet">
      <a
        href={`https://twitter.com/intent/tweet?text=${fact.text}`}
        target="blank"
      >
        Tweet
      </a>
    </div>
  );
}

export default TweetButton;

// tweetBtn.href = `https://twitter.com/intent/tweet?text=${fact}`
