import React from "react";

export default function Header() {
  return (
    <div>
      <div class="head-card">
        <div class="head-header">
          <div class="profile-info">
            <h3>Our Government Bodies</h3>
            <br />
          </div>
        </div>
        <div class="img-container">
          <a
            href="https://cghs.gov.in/CghsGovIn/faces/ViewPage.xhtml"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://th.bing.com/th/id/R.26ecdb6f5e1e4fb126e5d07cff507a26?rik=u4X3mMKhsw7dLQ&riu=http%3a%2f%2fwww.ima-india.org%2fima%2fimages%2fIMA+LOGO.jpg&ehk=E591Rjwqr7MjLrc%2bcfu7gg%2bXphye%2bq%2bYItw85%2fNn47M%3d&risl=&pid=ImgRaw&r=0"
              alt="img 1"
              class="hover-image"
            />
            Health
          </a>

          <a
            href="https://joinindianarmy.nic.in/Default.aspx?id=5&lg=eng&"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://wallpapercave.com/wp/wp2869504.png"
              alt="img 2"
              class="hover-image"
            />
            Army
          </a>
          <a
            href="https://indianrailways.gov.in/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.pinimg.com/originals/6a/72/4b/6a724b9501764fd83a4abcd37b58144d.png"
              alt="img 3"
              class="hover-image"
            />
            Railway
          </a>
          <a href="https://moef.gov.in/en/" target="_blank" rel="noreferrer">
            <img
              src="https://img.collegedekhocdn.com/media/img/careers/indian-forest-officer.jpg"
              alt="img 4"
              class="hover-image"
            />
            Forest
          </a>
          <a href="https://police.gov.in/" target="_blank" rel="noreferrer">
            <img
              src="https://wallpapercave.com/wp/wp2617957.png"
              alt="img 5"
              class="hover-image"
            />
            Police
          </a>
          <a href="https://www.isro.gov.in/" target="_blank" rel="noreferrer">
            <img
              src="https://www.logolynx.com/images/logolynx/5c/5ce2caad057764f5eb18ecae5f9fb364.jpeg"
              alt="8"
              class="hover-image"
            />
            ISRO
          </a>
          <a
            href="https://www.india.gov.in/topics/agriculture"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://th.bing.com/th/id/R.f4dfcf6cdf682a876f20e52c9306e3d8?rik=7sBIP03MLDASwg&riu=http%3a%2f%2flogowiki.net%2fwp-content%2fuploads%2fimgp%2fdepartment-of-agriculture-Logo-1-3956.png&ehk=M6bQcyr%2f1ALUzMdoGboYQjCCZdHwAHCwdhhIDXdgFPs%3d&risl=&pid=imgRaw&r=0"
              alt="6"
              class="hover-image"
            />
            Agriculture
          </a>
        </div>

        <br />
        <div class="content">
          <div class="additional-content">
            <a
              href="https://www.india.gov.in/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://2.bp.blogspot.com/-bFK78T72o9w/WSKduKlw-bI/AAAAAAAAJr0/mEvsCwrShlIj7xcgu8cf9gE5PB_3-MvMwCLcB/s1600/National_Emblem_India.jpg"
                alt=" 7"
                class="hover-image"
              />
              <br />
              National Portal Of India
            </a>
          </div>

          <br />
          <button id="see-more-btn">View All</button>
          <script src="header.js"></script>
        </div>
      </div>
      <br />
    </div>
  );
}
