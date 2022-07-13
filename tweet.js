class Tweet {
  constructor(handle, tweet, link) {
    this.sender = handle;
    this.content = tweet;
    this.link = link || 'no link provided';
    this.retweets = 0;
    this.replies = [];
    this.replyCount = 0;
    this.likes = 0;
  }

  like() {
    this.likes++;
  }

  retweet() {
    this.retweets++;
  }

  reply(newReply) {
    this.replies.push(newReply);
    return this.replies.length;
  }

}


module.exports = Tweet;
