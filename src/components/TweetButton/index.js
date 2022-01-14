import React from "react";

function TweetButton({ handleTweet },{tweetURL}) {
  return (
    <div>
    <a href="https://twitter.com/intent/tweet" onClick ={()=>{handleTweet()}}>Tweet</a>
    </div>
  );
}

export default TweetButton;

// tweetBtn.href = `https://twitter.com/intent/tweet?text=${quote} - ${author}`