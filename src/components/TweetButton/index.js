import React from "react";

function TweetButton({ handleTweet, fact }) {
    console.log(fact.text)
  return (
    <div>
    <a href={`https://twitter.com/intent/tweet?text=${fact.text}`}
    target="blank" onClick ={()=>{handleTweet()}}>Tweet</a>
    </div>
  );
}

export default TweetButton;

// tweetBtn.href = `https://twitter.com/intent/tweet?text=${fact}`