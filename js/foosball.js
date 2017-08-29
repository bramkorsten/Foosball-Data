var database = firebase.database();

var teammatches = database.ref('games/teammatch');
var singlematches = database.ref('games/singlematch');

var Bram = {
  name: 'Bram',
  nick: 'Brem',
  gamesPlayed: 0,
  gamesPlayedRed: 0,
  gamesPlayedBlue: 0,
  singlematchesPlayed: 0,
  teammatchesPlayed: 0,
  gamesWon: 0,
  percentWon: 0
}

var Dylan = {
  name: 'Dylan',
  nick: 'Dalyn',
  gamesPlayed: 0,
  gamesPlayedRed: 0,
  gamesPlayedBlue: 0,
  singlematchesPlayed: 0,
  teammatchesPlayed: 0,
  gamesWon: 0,
  percentWon: 0
}

var Arne = {
  name: 'Arne',
  nick: 'Aarne',
  gamesPlayed: 0,
  gamesPlayedRed: 0,
  gamesPlayedBlue: 0,
  singlematchesPlayed: 0,
  teammatchesPlayed: 0,
  gamesWon: 0,
  percentWon: 0
}

var Riley = {
  name: 'Riley',
  nick: 'Rilay',
  gamesPlayed: 0,
  gamesPlayedRed: 0,
  gamesPlayedBlue: 0,
  singlematchesPlayed: 0,
  teammatchesPlayed: 0,
  gamesWon: 0,
  percentWon: 0
}

var Mandarijn = {
  name: 'Mandarijn',
  nick: 'Mandarijn',
  gamesPlayed: 0,
  gamesPlayedRed: 0,
  gamesPlayedBlue: 0,
  singlematchesPlayed: 0,
  teammatchesPlayed: 0,
  gamesWon: 0,
  percentWon: 0
}

var Marinus = {
  name: 'Marinus',
  nick: 'Marinus',
  gamesPlayed: 0,
  gamesPlayedRed: 0,
  gamesPlayedBlue: 0,
  singlematchesPlayed: 0,
  teammatchesPlayed: 0,
  gamesWon: 0,
  percentWon: 0
}

var teammatchesTotal = 0;
var singlematchesTotal = 0;

singlematches.once('value').then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    singlematchesTotal++;
  });
});

teammatches.once('value').then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    teammatchesTotal++;
    var matchData = childSnapshot.val();
    //var matchname1 = matchData['gameData']['blueTeam']['member1'];
    var matchKey = childSnapshot.key;
    newGame(matchData['gameData']);
    //pushBookmark(bookmarkName, bookmarkValue, bookmarkKey);
  });

  setPlayedGames();

  $('#teamTotal').text(teammatchesTotal);
  $('#singleTotal').text(singlematchesTotal);
  countStats();
  calcScores();
  setPercentScore()
  countTotal();
  countPercents();
  markPercent(sortPlayers('percentWon'));

  $('#main-loader').fadeOut();
});

function newGame(gameData) {
  countIfPlayed(gameData);
}

function countStats() {
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });
}

function countPercents() {
  $('.countpercent').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        },
        complete: function() {
          console.log('Animations finished');
        }
    });
  });
}

function countTotal() {
  $('.countTotal').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });
}

function countFeatures() {
  $('.count-feature').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });
}

function countIfPlayed(gameData) {
  var players = [Bram, Arne, Dylan, Riley, Mandarijn, Marinus];
  players.forEach(function(player) {
    var played = '';
    if ((gameData['blueTeam']['member1'] === player.nick) || (gameData['blueTeam']['member2'] === player.nick)) {
      player.gamesPlayed++;
      player.gamesPlayedBlue++;
      player.teammatchesPlayed++;
      played = 'blue';
    }
    else if ((gameData['redTeam']['member1'] === player.nick) || (gameData['redTeam']['member2'] === player.nick)) {
      player.gamesPlayed++;
      player.gamesPlayedRed++;
      player.teammatchesPlayed++;
      played = 'red';
    }
    switch(played) {
      case 'blue':
        if (gameData['blueTeam']['score'] > gameData['redTeam']['score']) {
          player.gamesWon++;
        }
        break;
      case 'red':
        if (gameData['redTeam']['score'] > gameData['blueTeam']['score']) {
          player.gamesWon++;
        }
        break;
      default:

    }
  });
}

function sortPlayers(type) {
  var players = [Bram, Arne, Dylan, Riley, Mandarijn, Marinus];

  switch(type) {
    case 'played':
        players.sort(function(x, y) { return y.gamesPlayed - x.gamesPlayed; });
        break;
    case 'won':
      players.sort(function(x, y) { return y.gamesWon - x.gamesWon; });
      break;
    case 'percentWon':
      players.sort(function(x, y) { return y.percentWon - x.percentWon; });
      break;
    default:
      console.log("something whent wrong while sorting players");
  }
  return players;
}

function calcScores() {
  var players = [Bram, Arne, Dylan, Riley, Mandarijn, Marinus];
  players.forEach(function(player) {
    player.score = Math.round(player.gamesWon / player.gamesPlayed * 100);
  });
}

function markPlayer(playerArray) {
  $('.blue').each(function(){
    $(this).removeClass('blue');
  });
  switch(playerArray[0].name) {
    case 'Dylan':
        $('#dylan').addClass('blue');
        break;
    case 'Mandarijn':
        $('#marijn1').addClass('blue');
        break;
    case 'Marinus':
        $('#marijn2').addClass('blue');
        break;
    case 'Riley':
        $('#riley').addClass('blue');
        break;
    case 'Bram':
        $('#bram').addClass('blue');
        break;
    case 'Arne':
        $('#arne').addClass('blue');
        break;
    default:
      console.log("something whent wrong");
  }
}

function markPercent(playerArray) {
  $('.bluepercent').each(function(){
    $(this).removeClass('bluepercent');
  });
  switch(playerArray[0].name) {
    case 'Dylan':
        $('#dylan-small').addClass('bluepercent');
        break;
    case 'Mandarijn':
        $('#marijn1-small').addClass('bluepercent');
        break;
    case 'Marinus':
        $('#marijn2-small').addClass('bluepercent');
        break;
    case 'Riley':
        $('#riley-small').addClass('bluepercent');
        break;
    case 'Bram':
        $('#bram-small').addClass('bluepercent');
        break;
    case 'Arne':
        $('#arne-small').addClass('bluepercent');
        break;
    default:
      console.log("something whent wrong");
  }
}

function setWonGames() {
  markPlayer(sortPlayers('won')); //players sorted on gamesplay
  $('#bram').text(Bram.gamesWon);
  $('#arne').text(Arne.gamesWon);
  $('#dylan').text(Dylan.gamesWon);
  $('#riley').text(Riley.gamesWon);
  $('#marijn1').text(Mandarijn.gamesWon);
  $('#marijn2').text(Marinus.gamesWon);
}

function setPlayedGames() {
  markPlayer(sortPlayers('played')); //players sorted on gamesplay
  $('#bram').text(Bram.gamesPlayed);
  $('#arne').text(Arne.gamesPlayed);
  $('#dylan').text(Dylan.gamesPlayed);
  $('#riley').text(Riley.gamesPlayed);
  $('#marijn1').text(Mandarijn.gamesPlayed);
  $('#marijn2').text(Marinus.gamesPlayed);
}

function setPercentScore() {
  $('#bram-small .countpercent').text(Bram.score);
  $('#arne-small .countpercent').text(Arne.score);
  $('#dylan-small .countpercent').text(Dylan.score);
  $('#riley-small .countpercent').text(Riley.score);
  $('#marijn1-small .countpercent').text(Mandarijn.score);
  $('#marijn2-small .countpercent').text(Marinus.score);
}

function showPlayerDetails(index) {
  var activePlayer;
  switch (index) {
    case 1:
      activePlayer = Dylan;
      break;
    case 2:
      activePlayer = Bram;
      break;
    case 3:
      activePlayer = Arne;
      break;
    case 4:
      activePlayer = Riley;
      break;
    case 5:
      activePlayer = Mandarijn;
      break;
    case 6:
      activePlayer = Marinus;
      break;
    default:

  }

  $('#player-image').removeClass('Bram Dylan Arne Riley Mandarijn Marinus').addClass(activePlayer.name);
  $('#player-name').text(activePlayer.nick);
  $('#playerwon').text(activePlayer.gamesWon);
  $('#playerplayed').text(activePlayer.gamesPlayed);
  $('#featured-percent').text(activePlayer.score);
  $('#playedred').text(activePlayer.gamesPlayedRed);
  $('#playedblue').text(activePlayer.gamesPlayedBlue);
  $('#player-wrap').fadeIn();
  countFeatures();
}

function closePlayerDetails() {
  $('#player-wrap').fadeOut();
}

$(function(){
  $('#checkbox').change(function(event) {
      var checkbox = event.target;
      if (checkbox.checked) {
          setWonGames();
            $('#matchdatatype').text("MATCHES WON");
      } else {
          setPlayedGames();
          $('#matchdatatype').text("MATCHES PLAYED");
      }
      countStats();
  });
});
