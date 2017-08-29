<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Foosball</title>
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <script src="js/jquery.min.js" charset="utf-8"></script>
    <script src="https://rawgit.com/bramkorsten/snackbar.js/v1.2.2/snackbar.js"></script>
    <script src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js"></script>
    <script>
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyCpjVZwZpIU7AaHkT2secBceSS-5OrdqWM",
        authDomain: "fussball-a2cb9.firebaseapp.com",
        databaseURL: "https://fussball-a2cb9.firebaseio.com",
        projectId: "fussball-a2cb9",
        storageBucket: "fussball-a2cb9.appspot.com",
        messagingSenderId: "901631249389"
      };
      firebase.initializeApp(config);
    </script>
    <script src="js/foosball.js" charset="utf-8"></script>
  </head>
  <body>
    <div class="image-wrap">
      <a onclick="showPlayerDetails(1)"><div class="Dylan"></div></a>
      <a onclick="showPlayerDetails(2)"><div class="Bram"></div></a>
      <a onclick="showPlayerDetails(3)"><div class="Arne"></div></a>
      <a onclick="showPlayerDetails(4)"><div class="Riley"></div></a>
      <a onclick="showPlayerDetails(5)"><div class="Mandarijn"></div></a>
      <a onclick="showPlayerDetails(6)"><div class="Marinus"></div></a>
    </div>

    <div class="overall-wrap">
      <div id="main-loader" class="loader-wrap">
        <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
      </div>
      <h2 class="title">Overall Stats</h2>
      <div class="stat-wrap">
        <p id="matchdatatype" class="subtitle">MATCHES PLAYED</p>
        <div class="switch-wrap">
          <input type="checkbox" id="checkbox" name="set-name" class="switch-input checkbox">
          <label for="checkbox" class="switch-label"></label>
        </div>
        <div class="hero" onclick="showPlayerDetails(1)">
          <p class="hero-number count" id="dylan">-</p>
          <p class="hero-number-small" id="dylan-small"><span class="countpercent">-</span><span>%</span></p>
          <p class="subtitle">Dylan</p>
        </div>
        <div class="hero" onclick="showPlayerDetails(2)">
          <p class="hero-number count" id="bram">-</p>
          <p class="hero-number-small" id="bram-small"><span class="countpercent">-</span><span>%</span></p>
          <p class="subtitle">Bram</p>
        </div>
        <div class="hero" onclick="showPlayerDetails(3)">
          <p class="hero-number count" id="arne">-</p>
          <p class="hero-number-small" id="arne-small"><span class="countpercent">-</span><span>%</span></p>
          <p class="subtitle">Arne</p>
        </div>
        <div class="hero" onclick="showPlayerDetails(4)">
          <p class="hero-number count" id="riley">-</p>
          <p class="hero-number-small" id="riley-small"><span class="countpercent">-</span><span>%</span></p>
          <p class="subtitle">Riley</p>
        </div>
        <div class="hero" onclick="showPlayerDetails(5)">
          <p class="hero-number count" id="marijn1">-</p>
          <p class="hero-number-small" id="marijn1-small"><span class="countpercent">-</span><span>%</span></p>
          <p class="subtitle">Mandarijn</p>
        </div>
        <div class="hero" onclick="showPlayerDetails(6)">
          <p class="hero-number count" id="marijn2">-</p>
          <p class="hero-number-small" id="marijn2-small"><span class="countpercent">-</span><span>%</span></p>
          <p class="subtitle">Marinus</p>
        </div>
      </div>
      <div class="stat-total-wrap">
        <p class="subtitle">TOTAL MATCHES PLAYED</p>
        <div class="hero">
          <p class="hero-number countTotal" id="teamTotal">-</p>
          <p class="subtitle">Teammatches</p>
        </div>
        <div class="hero">
          <p class="hero-number countTotal" id="singleTotal">-</p>
          <p class="subtitle">1v1 Matches</p>
        </div>
      </div>
      <p class="info">FOOSBALL DATA (LESS-JANKY VERSION) - V1.2 - <a target="_blank" href="https://github.com/bramkorsten/Foosball-Data">GITHUB</a></p>
    </div>
      <div id="player-wrap" class="player-wrap">
        <h2 class="title">Player Stats</h2>
        <a class="close" onclick="closePlayerDetails()"><i class="fa fa-times" aria-hidden="true"></i></a>
        <div class="left-pane-wrap">
          <div id="player-image" class="player-image"></div>
        </div>
        <div class="right-pane-wrap">
          <div class="player-main">
            <p class="subtitle">PLAYER NAME</p>
            <p id="player-name" class="player-name hero-text">NONE</p>
            <p class="subtitle">MATCHES WON VS PLAYED</p>
            <div class="featured">
                <p class="hero-number"><span class="count-feature" id="playerwon">-</span> / <span class="count-feature" id="playerplayed">-</span></p>
                <p class="hero-number" id="featured-percent-wrap"><span class="count-feature" id="featured-percent">-</span>% WON</p>
            </div>
            <p class="subtitle">SIDES PLAYED</p>
            <p class="hero-number"><span class="count-feature" id="playedred">-</span> / <span class="count-feature" id="playedblue">-</span></p>
          </div>
        </div>
      </div>

      <div class="raw-data-option">
        <input type="checkbox" id="showGames" name="set-name" class="switch-input checkbox">
        <label for="showGames" class="switch-label switch-label-option"></label>
        <p class="showGamesTitle">SHOW RAW GAMES</p>
      </div>

      <div id="game-feed" class="game-feed">

      </div>
  </body>
</html>
