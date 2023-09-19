import React from "react";
import PostPhoto from "../../assets/Post.jpg";

const Post = () => {
  return (
    <div class="post-card">
      <div class="post-header">
        <img
          class="profile-picture"
          src="https://i.pinimg.com/originals/6e/68/07/6e6807a013c46b7d94cdd7bfc8a8dba1.png"
          alt="Profile"
        />
        <div class="time">2 hours ago</div>
        <div class="profile-info">
          <h3>AyushHarshuu</h3>
          <p>Gurugram</p>
        </div>
      </div>
      <br />
      <div class="post-footer">
        <p class="caption">Okayyy!</p>
        <br />
        <p class="hashtags">@kushagra @kashmir @UT</p>
      </div>
      <br />
      <img
        //class="post-image"
        src={PostPhoto}
        alt="Post"
      />
      <br />
      <br />
      <div class="icons">
        <div class="likes">
          <span> &#10084;123</span>
        </div>
        <div class="retweet">
          <span> &#8617;Retweet</span>
        </div>
        <div class="comment">
          <span> &#128173;Comment</span>
        </div>
        <div class="Views">
          <span> &#128563;Views</span>
        </div>
        <div class="favourite">
          <span> &#127775;favourite</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
