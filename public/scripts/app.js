/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

const tweetData = {
  "user": {
    "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}


// console.log(tweetData)

const createTweetElement = function (obj) {


const username = obj.user.name;
const avatar = obj.user.avatars.large;
const handle = obj.user.handle;
const tweetContent = obj.content.text;
const time = obj.created_at;

console.log(handle)

const format = `
            <article class="tweet">

              <header>
                <div class=userhead>
                  <div class="username">
                    <span>
                        <img class="icon" src="">
                    </span>
                    <span class="usernamePosition">
                    </span>
                  </div>

                  <div class="handle">
                  </div>
                </div>
              </header>

              <section class="content">
              </section>

              <footer class="time">
                Date
              </footer>
            </article>`;

const $tweet = $(format);

$tweet.find('.icon').attr('src', avatar);
$tweet.find('.usernamePosition').text(username);
$tweet.find('.handle').text(handle);
$tweet.find('.content').text(tweetContent);
$tweet.find('.time').text(time);

  return $tweet
}




function renderTweets(tweets) {
  // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  let $tweet;

    data.forEach(function(el) {
      $tweet = createTweetElement(el)
      $('#tweet-container').append($tweet)
    });

}

renderTweets(data)


})







