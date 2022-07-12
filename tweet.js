class Tweet {
  constructor(username, tweetText, tweetLink, numberOfLikes) {
    this.sender = username;
    this.content = tweetText;
    this.link = tweetLink || 'no link provided';
    this.retweets = 0;
    this.replies = [];
    this.replyCount = 0;
    this.likes = 0 || numberOfLikes;
  }

  addNumberOfLikes(){
 if (numberOfLikes > 0) {
   return numberOfLikes;
 }
}
}

module.exports = Tweet;
