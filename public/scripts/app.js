
$(document).ready(function() {

  const createTweetElement = function (obj) {
    const username = obj.user.name;
    const avatar = obj.user.avatars.large;
    const handle = obj.user.handle;
    const tweetContent = obj.content.text;
    const time = obj.created_at;

    const format = `
                <article class="tweet">

                  <header>
                    <div class=flexbox>
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

                  <footer class="flexbox">
                    <span class="time">
                    </span>
                    <span class="flags">
                      <i class="fas fa-flag"></i>
                      <i class="fas fa-retweet"></i>
                      <span class="click-for-likes">
                        <i class="fas fa-heart" ></i><span class="likes"></span>
                      </span>
                    </span>
                  </footer>

                </article>`;

    const $tweet = $(format);
    $tweet.find('.icon').attr('src', avatar);
    $tweet.find('.usernamePosition').text(username);
    $tweet.find('.handle').text(handle);
    $tweet.find('.content').text(tweetContent);
    $tweet.find('.time').text(time);

    return $tweet;
  };


  function renderTweets(tweetsArray) {
    tweetsArray.forEach(function(el) {
      $('#tweet-container').append(createTweetElement(el))
    });
  }


  // toggles "compose tweet"
  $('button').click(function() {
    $('.new-tweet').slideToggle("slow")
    $('textarea').focus()
    $('textarea').select()
  });


  // renders the tweets already in the server
  $.ajax('/tweets', {method: 'GET'})
    .then(function(newTweet) {
      renderTweets(newTweet)
    });


  // new tweet submitted
  $( "#submitNew" ).submit(function( event ) {
    event.preventDefault();
    const $tweetContent = $(this).serialize()
    if($tweetContent.length <= 5) {
      $('.error').css("visibility", "visible")
      $('.error').html("Brevity is the soul of wit \nbut yours is nonexistent\ninput needed")
    } else if ($tweetContent.length > 140) {
      $('.error').css("visibility", "visible")
      $('.error').html("Such grand ideas!\nToo large for here\ninput smaller message")
    } else {
      $.ajax('/tweets', {method: 'POST', data : $tweetContent})
        .done(function(newTweet) {
          $('#tweet-container').prepend(createTweetElement(newTweet))
          $('.error').css("visibility", "hidden")
          $('#submitNew')[0].reset()
          $('.counter').html("140")
        });
    }
  });

});
