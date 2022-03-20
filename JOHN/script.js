var langs =
[['Afrikaans',       ['af-ZA']],
 ['Bahasa Indonesia',['id-ID']],
 ['Bahasa Melayu',   ['ms-MY']],
 ['Català',          ['ca-ES']],
 ['Čeština',         ['cs-CZ']],
 ['Deutsch',         ['de-DE']],
 ['English',         ['en-AU', 'Australia'],
                     ['en-CA', 'Canada'],
                     ['en-IN', 'India'],
                     ['en-NZ', 'New Zealand'],
                     ['en-ZA', 'South Africa'],
                     ['en-GB', 'United Kingdom'],
                     ['en-US', 'United States']],
 ['Español',         ['es-AR', 'Argentina'],
                     ['es-BO', 'Bolivia'],
                     ['es-CL', 'Chile'],
                     ['es-CO', 'Colombia'],
                     ['es-CR', 'Costa Rica'],
                     ['es-EC', 'Ecuador'],
                     ['es-SV', 'El Salvador'],
                     ['es-ES', 'España'],
                     ['es-US', 'Estados Unidos'],
                     ['es-GT', 'Guatemala'],
                     ['es-HN', 'Honduras'],
                     ['es-MX', 'México'],
                     ['es-NI', 'Nicaragua'],
                     ['es-PA', 'Panamá'],
                     ['es-PY', 'Paraguay'],
                     ['es-PE', 'Perú'],
                     ['es-PR', 'Puerto Rico'],
                     ['es-DO', 'República Dominicana'],
                     ['es-UY', 'Uruguay'],
                     ['es-VE', 'Venezuela']],
 ['Euskara',         ['eu-ES']],
 ['Français',        ['fr-FR']],
 ['Galego',          ['gl-ES']],
 ['Hrvatski',        ['hr_HR']],
 ['IsiZulu',         ['zu-ZA']],
 ['Íslenska',        ['is-IS']],
 ['Italiano',        ['it-IT', 'Italia'],
                     ['it-CH', 'Svizzera']],
 ['Magyar',          ['hu-HU']],
 ['Nederlands',      ['nl-NL']],
 ['Norsk bokmål',    ['nb-NO']],
 ['Polski',          ['pl-PL']],
 ['Português',       ['pt-BR', 'Brasil'],
                     ['pt-PT', 'Portugal']],
 ['Română',          ['ro-RO']],
 ['Slovenčina',      ['sk-SK']],
 ['Suomi',           ['fi-FI']],
 ['Svenska',         ['sv-SE']],
 ['Türkçe',          ['tr-TR']],
 ['български',       ['bg-BG']],
 ['Pусский',         ['ru-RU']],
 ['Српски',          ['sr-RS']],
 ['한국어',            ['ko-KR']],
 ['中文',             ['cmn-Hans-CN', '普通话 (中国大陆)'],
                     ['cmn-Hans-HK', '普通话 (香港)'],
                     ['cmn-Hant-TW', '中文 (台灣)'],
                     ['yue-Hant-HK', '粵語 (香港)']],
 ['日本語',           ['ja-JP']],
 ['Lingua latīna',   ['la']]];

var punc = [",", "?", "!", ":", ".", ";"]

var stopwords = ["ourselves", "hers", "between", "yourself", "but", "again", "there", "about", "once", "during", "out", "very", "having", "with", "they", "own", "an", "be", "some", "for", "do", "its", "yours", "such", "into", "of", "most", "itself", "other", "off", "is", "s", "am", "or", "who", "as", "from", "him", "each", "the", "themselves", "until", "below", "are", "we", "these", "your", "his", "through", "don", "nor", "me", "were", "her", "more", "himself", "this", "down", "should", "our", "their", "while", "above", "both", "up", "to", "ours", "had", "she", "all", "no", "when", "at", "any", "before", "them", "same", "and", "been", "have", "in", "will", "on", "does", "yourselves", "then", "that", "because", "what", "over", "why", "so", "can", "did", "not", "now", "under", "he", "you", "herself", "has", "just", "where", "too", "only", "myself", "which", "those", "i", "after", "few", "whom", "t", "being", "if", "theirs", "my", "against", "a", "by", "doing", "it", "how", "further", "was", "here", "than"];

function findGenre(x) {
  if (x.includes("alternative rock")) {return "alternativerock"}
  else if (x.includes("ambient")) {return "ambient"}
  else if (x.includes("classical")) {return "classical"}
  else if (x.includes("country")) {return "country"}
  else if (x.includes("dance") || x.includes("edm")) {return "danceedm"}
  else if (x.includes("dancehall")) {return "dancehall"}
  else if (x.includes("deep house")) {return "deephouse"}
  else if (x.includes("disco")) {return "disco"}
  else if (x.includes("drum") || x.includes("bass")) {return "drumbass"}
  else if (x.includes("dubstep")) {return "dubstep"}
  else if (x.includes("electronic")) {return "electronic"}
  else if (x.includes("folk") || x.includes("singer-songwriter")) {return "folksingersongwriter"}
  else if (x.includes("hip-hop") || x.includes("hip hop") || x.includes("rap")) {return "hiphoprap"}
  else if (x.includes("house")) {return "house"}
  else if (x.includes("indie")) {return "indie"}
  else if (x.includes("jazz") || x.includes("blues")) {return "jazzblues"}
  else if (x.includes("latin")) {return "latin"}
  else if (x.includes("metal")) {return "metal"}
  else if (x.includes("piano")) {return "piano"}
  else if (x.includes("pop")) {return "pop"}
  else if (x.includes("r&b") || x.includes("soul")) {return "rbsoul"}
  else if (x.includes("reggae")) {return "reggae"}
  else if (x.includes("reggaeton")) {return "reggaeton"}
  else if (x.includes("rock")) {return "rock"}
  else if (x.includes("soundtrack")) {return "soundtrack"}
  else if (x.includes("techno")) {return "techno"}
  else if (x.includes("trance")) {return "trance"}
  else if (x.includes("trap")) {return "trap"}
  else if (x.includes("trip-hop") || x.includes("trip hop") || x.includes("triphop")) {return "triphop"}
  else if (x.includes("world")) {return "world"}
  else {return ""};
}

var add_list = false;
var error = false;
var photowords = ["photograph", "photographs", "photo", "image", "picture"];
var z = false;
var keepOrReplace = false;
var timer = null;
var timeCheck = false;
var listening = false;
var recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.lang = "en-US"; 
  recognition.maxAlternatives = 1;

SC.initialize({
  client_id: '95f22ed54a5c297b1c41f72d713623ef'
});

for (var i = 0; i < langs.length; i++) { 
  select_language.options[i] = new Option(langs[i][0], i);
}

$.ajaxSetup({
  async: false
});

select_language.selectedIndex = 6;
updateCountry();
select_dialect.selectedIndex = 6;

function updateCountry() {
  for (var i = select_dialect.options.length - 1; i >= 0; i--) {
    select_dialect.remove(i);
  }
  var list = langs[select_language.selectedIndex];
  for (var i = 1; i < list.length; i++) {
    select_dialect.options.add(new Option(list[i][1], list[i][0]));
  }
  select_dialect.style.visibility = list[1].length == 1 ? 'hidden' : 'visible';
}

async function specificLocation(place) {
  await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ place + "&appid=58b6f7c78582bffab3936dac99c31b25&units=metric")
  .then(await function(response){
    return response.json();
  })
  .then(await function(weather){
    if (weather.cod === '404') {
      var o = "I cannot find the weather for" + place;
    } else {
      var o = `The weather condition in ${weather.name} is mostly full of ${weather.weather[0].description} at a temperature of ${weather.main.temp} degrees Celcius`;
    }
    document.getElementById("omni").innerHTML = o;
    document.getElementById("omni").style.display = "initial";
    utterance = new SpeechSynthesisUtterance(o);
    if (voiceSelect.value) {
      utterance.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == voiceSelect.value; })[0];
    }
    utterance.volume = document.getElementById("volume").value;
    utterance.rate = document.getElementById("rate").value;
    utterance.pitch = document.getElementById("pitch").value;
    document.getElementById("alert").innerHTML = "Speaking...";
    speechSynthesis.speak(utterance);
    utterance.onend = function() {
      document.getElementById("alert").innerHTML = "";
    }
  });
}

var successCallback = function(data) {
  fetch("https://api.openweathermap.org/data/2.5/weather?lat="+ data.coords.latitude + "&lon=" + data.coords.longitude + "&appid=58b6f7c78582bffab3936dac99c31b25&units=metric")
  .then(function(response){
    return response.json();
  })
  .then(function(weather){
    if (weather.cod === '404') {
      x = "I cannot find the weather for your location";
    } else {
      x = `The weather condition in ${weather.name} is mostly full of ${weather.weather[0].description} at a temperature of ${weather.main.temp} degrees Celcius`;
    }
  });
}

function JavaScriptFetch(result) {
  var script = document.createElement('script');
  script.src = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + result;
  script.id = "script";
  document.querySelector('head').appendChild(script);
}

function jsonFlickrFeed(data) {
  var img = document.createElement('img');
  img.src = data.items[Math.floor(Math.random()*(21))].media.m;
  img.style.display = "block";
  img.width = "300";
  document.getElementById("omni").appendChild(img)
}

var failureCallback = function() {
  x = 'Location permission denied :(';
};

var currentLocation = function() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(successCallback, failureCallback);
  }
  else{
    x = "Geolocation not available";
  }
};

currentLocation();

( function( window ) {

'use strict';

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

if ( typeof define === 'function' && define.amd ) {
  define( classie );
} else {
  window.classie = classie;
}

})( window );

var ModalEffects = (function() {

	function init() {

		var overlay = document.querySelector( '.md-overlay' );

		[].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

			var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
				close = modal.querySelector( '.md-close' );

			function removeModal( hasPerspective ) {
				classie.remove( modal, 'md-show' );

				if( hasPerspective ) {
					classie.remove( document.documentElement, 'md-perspective' );
				}
			}

			function removeModalHandler() {
				removeModal( classie.has( el, 'md-setperspective' ) ); 
			}

			el.addEventListener( 'click', function( ev ) {
				classie.add( modal, 'md-show' );
				overlay.removeEventListener( 'click', removeModalHandler );
				overlay.addEventListener( 'click', removeModalHandler );

				if( classie.has( el, 'md-setperspective' ) ) {
					setTimeout( function() {
						classie.add( document.documentElement, 'md-perspective' );
					}, 25 );
				}
			});

			close.addEventListener( 'click', function( ev ) {
				ev.stopPropagation();
				removeModalHandler();
			});

		} );

	}

	init();

})();

recognition.onspeechend = function() {
  recognition.stop();
};

recognition.onend = function() {
  if (error) {
    error = false;
    return;
  }
  document.getElementById("alert").innerHTML = "Thinking...";
  listening = false;
  document.getElementById("voice").src = "microphone.svg";
  if (document.getElementById("final").innerHTML === "") {
    try {
      throwawayNode = user.removeChild(final);
      throwawayNode = user.removeChild(interim);
    } catch(error) {}
    think(document.getElementById("user").innerHTML);
  } else {
  think(document.getElementById("final").innerHTML);
  }
};

recognition.onerror = function(event) {
  error = true;
  if (event.error == 'audio-capture') {
    document.getElementById("alert").innerHTML = "No Microphone Detected!";
  }
  if (event.error == 'not-allowed') {
    document.getElementById("alert").innerHTML = "Access was Denied!";
  }
  if (event.error == 'network') {
    document.getElementById("alert").innerHTML = "Network communication failed.";
  }
};

recognition.onresult = function(event) {
  if (listening) {
    try {
      document.getElementById("interim").innerHTML = '';
    } catch(error) {
      g = document.createElement('span')
      document.getElementById("user").appendChild(g);
      g.setAttribute("id", "interim");
      document.getElementById("interim").innerHTML = '';
    } try {
      g = document.createElement('span')
      document.getElementById("user").appendChild(g);
      g.setAttribute("id", "final");
      document.getElementById("final").innerHTML = '';
    } catch(error) {}
  }
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      document.getElementById("final").innerHTML += event.results[i][0].transcript;
    } else {
      document.getElementById("interim").innerHTML += event.results[i][0].transcript;
    }
  }
  document.getElementById("user").style.display = "initial";
};

function checkbox() {
  if (document.getElementById("checkbox").checked == true){
    var checkbox = true;
    recognition.lang = select_dialect.value;
    recognition.start()
  } else {
    var checkbox = false;
  }
}

function voice() {
  if (!listening) {
    recognition.lang = select_dialect.value;
    recognition.start();
    listening = true;
    chime = new Audio('chime.mp3');
    chime.volume= 0.25;
    chime.play();
    document.getElementById("voice").src = "loader.svg";
    document.getElementById("alert").innerHTML = "Listening...";
    document.getElementById("user").innerHTML = "";
    document.getElementById("omni").style.display = "none";
  } else {
    recognition.stop();
  }
  window.speechSynthesis.cancel();
  var elem = document.getElementById("script");
  try {
    elem.parentNode.removeChild(elem);
  } catch(error) {};
}

function keyboard() {
  document.getElementById("user").style.display = "initial";
  document.getElementById("user").focus();
  try {
    text = document.getElementById("final").innerHTML;
  } catch(error) {}
  while (document.getElementById("user").firstChild) {
    document.getElementById("user").removeChild(document.getElementById("user").firstChild);
  } try {
    document.getElementById("user").innerHTML += text;
  } catch(error) {}
}

document.getElementById("user").addEventListener('keypress', (e) => {
  if (e.which === 13) {
    window.speechSynthesis.cancel();
    e.preventDefault();
    try {
      throwawayNode = user.removeChild(final);
      throwawayNode = user.removeChild(interim);
    } catch(error) {}
    var myString = $("#user").html();
    var element = $(myString);//convert string to JQuery element
    element.find("span").each(function(index) {
        var text = $(this).text();//get span content
        $(this).replaceWith(text);//replace all span with just content
    });
    var newString = element.html();//get back new string
    document.getElementById("omni").innerHTML = "";
    think(document.getElementById("user").innerHTML);
  }
});

async function think(result) {
  originalResult = result.split(" ");
  result = result.replace(/[.,!?;:]/g, '');
  reply="";
  document.getElementById("soundcloud").src = "";
  result = result.split(" ");
  
  for (i = 0; i < result.length; i++) {
    result[i] = result[i].toLowerCase();
  }

  if (timeCheck) {
    result.unshift("timer");
    timeCheck = false;
  }

  if (keepOrReplace) {
    if (result.includes("replace") || result.includes("yeah") || result.includes("yes")) {
      clearTimeout(timer);
      timer = null;
      reply = "Removing timer.."
      keepOrReplace = false;
    } else if (result.includes("no") || result.includes("keep")){
      reply = "OK."
      keepOrReplace = false;
    }
  }
  if (result.includes("play")){
    genre = null;
    genre = findGenre(result);
    query = result.filter(item => !stopwords.includes(item))
    query = query.filter(item => !["play"].includes(item))
    query = query.filter(item => !["soundcloud"].includes(item))
    query = query.join("%20");
    if (result.includes("soundcloud")) {
      SC.get('/tracks', {genres: genre, q: query
      }).then(function(tracks) {
        g = tracks[1].attachments_uri;
        g = g.slice(0, -12);
        g = g.split("/").pop();
        document.getElementById("soundcloud").src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + g;
        document.getElementById("soundcloud").style.height = "initial";
        document.getElementById("soundcloud").style.display = "initial";
        document.getElementById("soundcloud").style.width = "100%";
        document.getElementsByClassName('playButton')[0].click();
      });
      if (!genre) {genre = "music"};
      reply="Playing " + genre + " from SoundCloud...";
    } else {
      async function fetchAsync () {
      let response = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + query + "&key=AIzaSyA-CBJD5DVdbTlYhP-vigkAlqi8qjA9SR8");
      let data = await response.json();
      return data;
      }

      fetchAsync().then(function(data){return data.items[0]})
      .then(
        function(data) {
          document.getElementById("soundcloud").src = "https://www.youtube.com/embed/" + data.id.videoId;
          document.getElementById("soundcloud").style.height = "44vh";
          document.getElementById("soundcloud").style.width = "78.32vh"
          document.getElementById("soundcloud").style.display = "initial";
          document.getElementById("alert").innerHTML = "";
          document.getElementById("omni").style.display = "none";
          return;
        }
      )
    }
  }  
  else if (result.includes("photo") || result.includes("image") || result.includes("picture") || result.includes("photograph") || result.includes("photographs")) {
    if (result.includes("of")) {
      result = result.splice(result.indexOf("of") + 1, result.length)
    }
    result = result.filter(item => !stopwords.includes(item))
    result = result.filter(item => !photowords.includes(item))
    result = result.join("+");
    JavaScriptFetch(result);
    reply = "Image of " + result.replace("+", " ") + ":";
  }
  else if (result.includes("how") && result.includes("are") && result.includes("you")) {
      reply = "I feel good!";
  } else if (result.includes("your") && result.includes("name")) {
    reply = "My name is John."
  } else if (result.includes("who") && result.includes("are") && result.includes("you")) {
    reply = "I'm John, your virtual Butler."
  }

  else if (result[0] == ("hello") || result[0] == ("hey") || result[0] == ("hi") ) {
    reply = "Hello!";

  } else if (result.includes("time")) {
    const time = new Date(Date.now());
    reply = `The time is ${time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`

  } else if (result.includes("date") || result.includes("day")) {
    const time = new Date(Date.now())
    reply = `Today is ${time.toLocaleDateString()}`;  

  } else if (result.includes("weather") || result.includes("temperature") || result.includes("raining") || result.includes("snowing")) {
    if (result.includes("in")) {
      specificLocation(result.slice(result.indexOf("in") + 1, result.length).join("+"))
      return
    } else if (result.includes("of")) {
      specificLocation(result.slice(result.indexOf("of") + 1, result.length).join("+"));
      return
    } else{
      reply = x;
    }

  } else if (result.includes("timer")) {
    if (timer != null) {
      keepOrReplace = true;
      reply = "A timer is already running. Do you want to replace it?"
    } else {
      negative = false;
      amount = 0;
      hours = "";
      minutes = "";
      seconds = "";
      counter = 0;
      for (i = 0; i < result.length; i++) {
        if (result[i] == "one") {
          result[i] = "1";
        }
      }

      for (i = 0; i < result.length; i++) {
        if (!isNaN(result[i])) {
          if (result[i+1] == "hours" || result[i+1] == "hour") {
            counter += 1;
            amount += result[i]*3600000
            if (result[i] <= 1) {
              hours = result[i] + " hour ";
            } else if (result[i] > 1) {
              hours = result[i] + " hours ";
            } else {
              negative = true;
              hours = 0;
            }
          } else if (result[i+1] == "minutes" || result[i+1] == "minute") {
            counter += 1;
            amount += result[i]*60000
            if (result[i] <= 1) {
              minutes = result[i] + " minute ";
            } else if (result[i] > 1) {
              minutes = result[i] + " minutes ";
            } else {
              negative = true;
              minutes = 0;
            }
          } else if (result[i+1] == "seconds" || result[i+1] == "second") {
            counter += 1;
            amount += result[i]*1000;
            if (result[i] <= 1) {
              seconds = result[i] + " second";
            } else if (result[i] > 1) {
              seconds = result[i] + " seconds";
            } else {
              negative = true;
              seconds = 0;
            }
          }
        }
      }

      if (counter == 0) {
        reply = "For how long?"
        timeCheck = true;
      } else if (!negative) {
        timer = setTimeout(function() {document.getElementById("banner").style.display = "initial";document.getElementById("notification").innerHTML = "BEEP! Your timer is done.";new Audio('ringtone.mp3').play();timer=null;setTimeout(function () {document.getElementById('banner').style.display='none'}, 5000)}, amount);
        reply = "OK, your timer is set for " + hours + minutes + seconds;
      } else if (negative) {
        reply = "I can't count negative numbers"
      } else {
        reply = "For how long?"
      }
    }

  } else if (result === "") {
    return;
    document.getElementById("user").style.display = "none";
    document.getElementById("alert").innerHTML = "";

  } else {
    result = result.filter(item => !stopwords.includes(item))
    ogResult = originalResult.filter(item => !stopwords.includes(item)).join(" ")
    for (i = 0; i < result.length; i++) {
      if (result[i].includes("+")) {
        result[i] = result[i].replace('+', '%2B')
      }
    }
    console.log(result)
    result = result.join("+")
    $.ajax({
      url: "https://cors-anywhere.herokuapp.com/" + "https://api.duckduckgo.com/?format=json&q=" + result,
      dataType: "json",
      success: function(data) {
        if (data.Type == "A") {
          reply = data.Abstract;
        } else if (data.Type == "C") {
          reply = data.Heading + ":"
          ul = document.createElement("ul");
          add_list = true;
          for (i = 0; i < 12; i++) {
            var li = document.createElement('li');
            li.innerHTML=data.RelatedTopics[i].Text.substring(0,data.RelatedTopics[i].Text.indexOf('-'));
            ul.appendChild(li);
          }
        } else if (data.Type == "D") {
          reply = "Try to be more specific. Did you mean:"
          ul = document.createElement("ul");
          add_list = true;
          for (i = 0; i < data.RelatedTopics.length; i++) {
            var li = document.createElement('li');
            if (data.RelatedTopics[i].Text == null) {
              li.innerHTML=data.RelatedTopics[i].Topics[0].Result.substring(0,data.RelatedTopics[i].Topics[0].Result.indexOf('</a>'));
            } else {
              li.innerHTML=data.RelatedTopics[i].Result.substring(0,data.RelatedTopics[i].Result.indexOf('</a>'));
            }
            ul.appendChild(li);
          }
        } else if (data.Type == "E") {
          reply = data.Answer;
          if (typeof data.Answer == "object") {
            console.log("here")
            if (data.AnswerType = "calc") {
              console.log(ogResult);
              reply = eval(ogResult);
              console.log(ogResult);
              console.log(reply);
            } else {
              reply = "I'm sorry, I couldn't understand that."
            }
          } else if (reply == null) {
            reply = "I'm sorry, I couldn't understand that."
          }
        } else if (data.Type == "N") {
          
        } else {
          reply = "I'm sorry, I couldn't understand that."
        }
      },
      error: function(xhr, status, error) {
        reply = "I'm sorry, I couldn't understand that."
      }
    });
    }
  document.getElementById("omni").innerHTML = reply;
  if (add_list) { 
    document.getElementById("omni").appendChild(ul);
    $("#omni").find("a").each(function(){
    var linkText = $(this).text();
    $(this).before(linkText);
    $(this).remove();
    });
    add_list = false;
  }
  document.getElementById("omni").style.display = "initial";
  utterance = new SpeechSynthesisUtterance(reply);
  if (voiceSelect.value) {
    utterance.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == voiceSelect.value; })[0];
  }

  utterance.volume = document.getElementById("volume").value;
  utterance.rate = document.getElementById("rate").value;
  utterance.pitch = document.getElementById("pitch").value;

  language = utterance.voice.lang.slice(0, 2);
  if (language == "de") {
    console.log("german")
  } else if (language == "zh"){
    console.log("chinese")
  } else if (language == "es"){
    console.log("spanish")
  } else if (language == "fr"){
    console.log("german")
  } else if (language == "hi"){
    console.log("hindi")
  } else if (language == "id"){
    console.log("indonesia")
  } else if (language == "it"){
    console.log("italian")
  } else if (language == "ja"){
    console.log("japanese")
  } else if (language == "ko"){
    console.log("korean")
  } else if (language == "nl"){
    console.log("dutch")
  } else if (language == "pl"){
    console.log("polish")
  } else if (language == "pt"){
    console.log("portuguese")
  } else if (language == "ru"){
    console.log("russian")
  }
  document.getElementById("alert").innerHTML = "Speaking...";
  speechSynthesis.speak(utterance);
  utterance.onend = function() {
    document.getElementById("alert").innerHTML = "";
  }
}

function loadVoices() {
	var voices = speechSynthesis.getVoices();
	voices.forEach(function(voice, i) {
		var option = document.createElement('option');
		option.value = voice.name;
		option.innerHTML = voice.name;
		voiceSelect.appendChild(option);
	});
}

loadVoices();

window.speechSynthesis.onvoiceschanged = function(e) {
  loadVoices();
};