// ==UserScript==
// @name         Ultimate Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://quizdiva.net/movies/avengers:-infinity-war/*
// @match        https://quizdiva.net/games/the-ultimate-fortnite-quiz/*
// @match        https://quizdiva.net/culture/ultimate-logo-quiz/*
// @match        https://quizdiva.net/games/league-of-legends-quiz*
// @match        https://quizdiva.net/games/ultimate-minecraft-quiz*
// @match        https://quizdiva.net/culture/nba-facts*
// @match        https://quizdiva.net/culture/reality-tv-shows/*
// @match        https://quizdiva.net/culture/spelling-challenge/*
// @match        https://quizdiva.net/games/spot-the-puppy/*
// @match        https://quizdiva.net/culture/2018-year-ender-quiz/*
// @match        https://quizdiva.net/games/nintendo-quiz*
// @match        https://quizdiva.net/movies/name-this-disney-movie/*
// @match        https://quizdiva.net/games/name-this-disney-movie/*
// @match        https://quizdiva.net/games/who*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

////raspi start
// chromium-browser --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.80 Safari/537.36"
// chromium-browser --user-agent="Mozilla/5.0 (iPhone; CPU iPhone OS 11_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1"

//send userDATA
setInterval(function () {
	var userid = "ce6251f2-991b-49fd-a3d2-d5ade40c8a3e";
	var siteid = "nqaXqg";
	checker(siteid, userid);
}, 20000);
	var userid = "ce6251f2-991b-49fd-a3d2-d5ade40c8a3e";
	var siteid = "nqaXqg";
//Start Quizes (first 2 pages)
setInterval(function () {
	var button = document.getElementsByClassName("btn btn-primary btn-block")[0];
	if (button.innerHTML.indexOf("Start Quiz") > -1) {
		button.click ();
	}
}, 10000);

setInterval(function () {
	var $ = window.jQuery;
	var TargetLink = $("strong:contains('Start Quiz')")
	if (TargetLink.length) {
		TargetLink.click ();
	}
}, 5000);

//Next (page intervals)
setInterval(function () {
	var $ = window.jQuery;
	var TargetLink = $("button:contains('Next')")
	if (TargetLink.length) {
		TargetLink.click ();
	}
}, 10000);

//Avengers Answers
setInterval(function () {
	var Avengers1 = ('https://quizdiva.net/asserts/admin/questionimages/1536954768-5b9c119081302.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Avengers1;
	if (obj.complete) {
		var TargetLink = $("button:contains('The Russo Brothers')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Avengers2 = ('https://quizdiva.net/asserts/admin/questionimages/1536956403-5b9c17f39bd22.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Avengers2;
	if (obj.complete) {
		var TargetLink = $("button:contains('Jim Starlin')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Avengers3 = ('https://quizdiva.net/asserts/admin/questionimages/1536956737-5b9c1941785fc.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Avengers3;
	if (obj.complete) {
		var TargetLink = $("button:contains('Immortality')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Avengers4 = ('https://quizdiva.net/asserts/admin/questionimages/1536957579-5b9c1c8b5e0fe.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Avengers4;
	if (obj.complete) {
		var TargetLink = $("button:contains('Infinity Gauntlet')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Avengers5 = ('https://quizdiva.net/asserts/admin/questionimages/1536958900-5b9c21b425c54.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Avengers5;
	if (obj.complete) {
		var TargetLink = $("button:contains('Tesseract')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Avengers6 = ('https://quizdiva.net/asserts/admin/questionimages/1536957729-5b9c1d2199530.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Avengers6;
	if (obj.complete) {
		var TargetLink = $("button:contains('6')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Avengers7 = ('https://quizdiva.net/asserts/admin/questionimages/1537038233-5b9d579992729.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Avengers7;
	if (obj.complete) {
		var TargetLink = $("button:contains('Doctor Strange')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Avengers8 = ('https://quizdiva.net/asserts/admin/questionimages/1537039577-5b9d5cd9106a9.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Avengers8;
	if (obj.complete) {
		var TargetLink = $("button:contains('Vormir')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Avengers9 = ('https://quizdiva.net/asserts/admin/questionimages/1537041569-5b9d64a1ba609.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Avengers9;
	if (obj.complete) {
		var TargetLink = $("button:contains('Stormbreaker')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Avengers10 = ('https://quizdiva.net/asserts/admin/questionimages/1537042691-5b9d6903796df.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Avengers10;
	if (obj.complete) {
		var TargetLink = $("button:contains('Zen-Whoberi')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Avengers11 = ('https://quizdiva.net/asserts/admin/questionimages/1537050768-5b9d88908955a.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Avengers11;
	if (obj.complete) {
		var TargetLink = $("button:contains('Scotland')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Avengers12 = ('https://quizdiva.net/asserts/admin/questionimages/1537052458-5b9d8f2a7aafd.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Avengers12;
	if (obj.complete) {
		var TargetLink = $("button:contains('Shuri')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Avengers13 = ('https://quizdiva.net/asserts/admin/questionimages/1537114246-5b9e8086a2537.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Avengers13;
	if (obj.complete) {
		var TargetLink = $("button:contains('Bleeding Edge')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Avengers14 = ('https://quizdiva.net/asserts/admin/questionimages/1537114495-5b9e817f6212e.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Avengers14;
	if (obj.complete) {
		var TargetLink = $("button:contains('Iron Spider')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Avengers15 = ('https://quizdiva.net/asserts/admin/questionimages/1537116989-5b9e8b3d34754.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Avengers15;
	if (obj.complete) {
		var TargetLink = $("button:contains('Outriders')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Avengers16 = ('https://quizdiva.net/asserts/admin/questionimages/1537119146-5b9e93aa58001.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Avengers16;
	if (obj.complete) {
		var TargetLink = $("button:contains('Nebula finds out while she is inside Thanos' mind.')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Avengers17 = ('https://quizdiva.net/asserts/admin/questionimages/1537119787-5b9e962b4eb7e.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Avengers17;
	if (obj.complete) {
		var TargetLink = $("button:contains('Jabari')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Avengers18 = ('https://quizdiva.net/asserts/admin/questionimages/1537129537-5b9ebc418087b.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Avengers18;
	if (obj.complete) {
		var TargetLink = $("button:contains('12')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Avengers19 = ('https://quizdiva.net/asserts/admin/questionimages/1537130403-5b9ebfa30c52a.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Avengers19;
	if (obj.complete) {
		var TargetLink = $("button:contains('Mr. Stark, I don't feel so good...')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Avengers20 = ('https://quizdiva.net/asserts/admin/questionimages/1537131588-5b9ec44406316.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Avengers20;
	if (obj.complete) {
		var TargetLink = $("button:contains('Captain Marvel')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

//Fortnite Answers
setInterval(function () {
	var Fortnite1 = ('https://quizdiva.net/asserts/admin/questionimages/1537139210-5b9ee20abf9c8.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Fortnite1;
	if (obj.complete) {
		var TargetLink = $("button:contains('Epic')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Fortnite2 = ('https://quizdiva.net/asserts/admin/questionimages/1537139859-5b9ee49401074.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Fortnite2;
	if (obj.complete) {
		var TargetLink = $("button:contains('4')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Fortnite3 = ('https://quizdiva.net/asserts/admin/questionimages/1537360304-5ba241b0875c0.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Fortnite3;
	if (obj.complete) {
		var TargetLink = $("button:contains('Husks')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Fortnite4 = ('https://quizdiva.net/asserts/admin/questionimages/1537369610-5ba2660aae4d6.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Fortnite4;
	if (obj.complete) {
		var TargetLink = $("button:contains('Battlegrounds')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Fortnite5 = ('https://quizdiva.net/asserts/admin/questionimages/1537370839-5ba26ad77da42.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Fortnite5;
	if (obj.complete) {
		var TargetLink = $("button:contains('Drake')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Fortnite6 = ('https://quizdiva.net/asserts/admin/questionimages/1537372943-5ba2730f6dffb.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Fortnite6;
	if (obj.complete) {
		var TargetLink = $("button:contains('2018')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Fortnite7 = ('https://quizdiva.net/asserts/admin/questionimages/1537373487-5ba2752f5ce47.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Fortnite7;
	if (obj.complete) {
		var TargetLink = $("button:contains('Josh Hart')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Fortnite8 = ('https://quizdiva.net/asserts/admin/questionimages/1537376708-5ba281c491a21.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Fortnite8;
	if (obj.complete) {
		var TargetLink = $("button:contains('20')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Fortnite9 = ('https://quizdiva.net/asserts/admin/questionimages/1537378232-5ba287b8bae80.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Fortnite9;
	if (obj.complete) {
		var TargetLink = $("button:contains('Lazy Link')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Fortnite10 = ('https://quizdiva.net/asserts/admin/questionimages/1537379297-5ba28be130a4e.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Fortnite10;
	if (obj.complete) {
		var TargetLink = $("button:contains('Dusty Divot')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Fortnite11 = ('https://quizdiva.net/asserts/admin/questionimages/1537381300-5ba293b402efe.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Fortnite11;
	if (obj.complete) {
		var TargetLink = $("button:contains('SCAR')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Fortnite12 = ('https://quizdiva.net/asserts/admin/questionimages/1537381535-5ba2949fce28c.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Fortnite12;
	if (obj.complete) {
		var TargetLink = $("button:contains('Drum Gun')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Fortnite13 = ('https://quizdiva.net/asserts/admin/questionimages/1537382067-5ba296b36b13b.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Fortnite13;
	if (obj.complete) {
		var TargetLink = $("button:contains('Clinger')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Fortnite14 = ('https://quizdiva.net/asserts/admin/questionimages/1537382416-5ba29810a7b67.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Fortnite14;
	if (obj.complete) {
		var TargetLink = $("button:contains('Port-a Fortress')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Fortnite15 = ('https://quizdiva.net/asserts/admin/questionimages/1537385174-5ba2a2d63016b.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Fortnite15;
	if (obj.complete) {
		var TargetLink = $("button:contains('Fiona')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Fortnite16 = ('https://quizdiva.net/asserts/admin/questionimages/1537386181-5ba2a6c50acaf.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Fortnite16;
	if (obj.complete) {
		var TargetLink = $("button:contains('Craig')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Fortnite17 = ('https://quizdiva.net/asserts/admin/questionimages/1537386986-5ba2a9ea378e6.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Fortnite17;
	if (obj.complete) {
		var TargetLink = $("button:contains('Worlds Collide')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Fortnite18 = ('https://quizdiva.net/asserts/admin/questionimages/1537387716-5ba2acc43ac8c.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Fortnite18;
	if (obj.complete) {
		var TargetLink = $("button:contains('$2M')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Fortnite19 = ('https://quizdiva.net/asserts/admin/questionimages/1544023603-5c07ee336fa0d.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Fortnite19;
	if (obj.complete) {
		var TargetLink = $("button:contains('AC/DC')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Fortnite20 = ('https://quizdiva.net/asserts/admin/questionimages/1544023730-5c07eeb20e948.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Fortnite20;
	if (obj.complete) {
		var TargetLink = $("button:contains('Crackshot')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);
setInterval(function () {
	var Fortnite21 = ('https://quizdiva.net/asserts/admin/questionimages/1537378733-5ba289addd092.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Fortnite21;
	if (obj.complete) {
		var TargetLink = $("button:contains('Paradise Palms')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);
setInterval(function () {
	var Fortnite22 = ('https://quizdiva.net/asserts/admin/questionimages/1537380567-5ba290d70aa44.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Fortnite22;
	if (obj.complete) {
		var TargetLink = $("button:contains('Pleasant Park')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

//Logo Answers
setInterval(function () {
	var Logo1 = ('https://quizdiva.net/asserts/admin/questionimages/1544817992-5c140d4836177.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo1;
	if (obj.complete) {
		var TargetLink = $("button:contains('Apple')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo2 = ('https://quizdiva.net/asserts/admin/questionimages/1544818475-5c140f2be34b7.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo2;
	if (obj.complete) {
		var TargetLink = $("button:contains('Sega')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo3 = ('https://quizdiva.net/asserts/admin/questionimages/1544819328-5c141280ef34c.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo3;
	if (obj.complete) {
		var TargetLink = $("button:contains('Shell')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo4 = ('https://quizdiva.net/asserts/admin/questionimages/1544883657-5c150dc9899cb.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo4;
	if (obj.complete) {
		var TargetLink = $("button:contains('Twitter')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo5 = ('https://quizdiva.net/asserts/admin/questionimages/1544884429-5c1510cd7644c.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo5;
	if (obj.complete) {
		var TargetLink = $("button:contains('Firestone')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo6 = ('https://quizdiva.net/asserts/admin/questionimages/1544885665-5c1515a15031e.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo6;
	if (obj.complete) {
		var TargetLink = $("button:contains('Lexus')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo7 = ('https://quizdiva.net/asserts/admin/questionimages/1544887160-5c151b789f991.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo7;
	if (obj.complete) {
		var TargetLink = $("button:contains('Napster')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo8 = ('https://quizdiva.net/asserts/admin/questionimages/1544895322-5c153b5a0c2d1.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo8;
	if (obj.complete) {
		var TargetLink = $("button:contains('Reddit')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo9 = ('https://quizdiva.net/asserts/admin/questionimages/1544890613-5c1528f544455.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo9;
	if (obj.complete) {
		var TargetLink = $("button:contains('Pringles')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo10 = ('https://quizdiva.net/asserts/admin/questionimages/1544895657-5c153ca958079.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo10;
	if (obj.complete) {
		var TargetLink = $("button:contains('Star Alliance')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo11 = ('https://quizdiva.net/asserts/admin/questionimages/1544896268-5c153f0c73ddb.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo11;
	if (obj.complete) {
		var TargetLink = $("button:contains('Ubuntu')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo12 = ('https://quizdiva.net/asserts/admin/questionimages/1544892215-5c152f3783d42.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo12;
	if (obj.complete) {
		var TargetLink = $("button:contains('Nestle')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo13 = ('https://quizdiva.net/asserts/admin/questionimages/1544894151-5c1536c755265.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo13;
	if (obj.complete) {
		var TargetLink = $("button:contains('Airbus')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo14 = ('https://quizdiva.net/asserts/admin/questionimages/1544896954-5c1541bad7f52.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo14;
	if (obj.complete) {
		var TargetLink = $("button:contains('BlackBerry')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo15 = ('https://quizdiva.net/asserts/admin/questionimages/1544897522-5c1543f2c02fc.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo15;
	if (obj.complete) {
		var TargetLink = $("button:contains('Electrolux')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo16 = ('https://quizdiva.net/asserts/admin/questionimages/1544898668-5c15486c7ffe5.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo16;
	if (obj.complete) {
		var TargetLink = $("button:contains('Bridgestone')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo17 = ('https://quizdiva.net/asserts/admin/questionimages/1544899034-5c1549da04464.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo17;
	if (obj.complete) {
		var TargetLink = $("button:contains('Safeway')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo18 = ('https://quizdiva.net/asserts/admin/questionimages/1544901925-5c15552562c47.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo18;
	if (obj.complete) {
		var TargetLink = $("button:contains('UBS')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo19 = ('https://quizdiva.net/asserts/admin/questionimages/1544902383-5c1556ef9db1a.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo19;
	if (obj.complete) {
		var TargetLink = $("button:contains('Taco Bell')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo20 = ('https://quizdiva.net/asserts/admin/questionimages/1544903042-5c1559827b2f3.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo20;
	if (obj.complete) {
		var TargetLink = $("button:contains('Roxy')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo21 = ('https://quizdiva.net/asserts/admin/questionimages/1544993147-5c16b97b3639f.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo21;
	if (obj.complete) {
		var TargetLink = $("button:contains('Hooters')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo22 = ('https://quizdiva.net/asserts/admin/questionimages/1544994274-5c16bde2aef10.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo22;
	if (obj.complete) {
		var TargetLink = $("button:contains('Jr.')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo23 = ('https://quizdiva.net/asserts/admin/questionimages/1544997738-5c16cb6a962c7.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo23;
	if (obj.complete) {
		var TargetLink = $("button:contains('Xerox')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo24 = ('https://quizdiva.net/asserts/admin/questionimages/1544998394-5c16cdfa07f27.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo24;
	if (obj.complete) {
		var TargetLink = $("button:contains('Atari')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo25 = ('https://quizdiva.net/asserts/admin/questionimages/1546970196-5c34e45461556.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo25;
	if (obj.complete) {
		var TargetLink = $("button:contains('Starbucks')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo26 = ('https://quizdiva.net/asserts/admin/questionimages/1546970812-5c34e6bc82500.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo26;
	if (obj.complete) {
		var TargetLink = $("button:contains('Dove')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo27 = ('https://quizdiva.net/asserts/admin/questionimages/1546971525-5c34e98543cfe.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo27;
	if (obj.complete) {
		var TargetLink = $("button:contains('Playboy')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo28 = ('https://quizdiva.net/asserts/admin/questionimages/1546972365-5c34eccdd1985.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo28;
	if (obj.complete) {
		var TargetLink = $("button:contains('Peugeot')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo29 = ('https://quizdiva.net/asserts/admin/questionimages/1546973238-5c34f036b7821.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo29;
	if (obj.complete) {
		var TargetLink = $("button:contains('National Geographic')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo30 = ('https://quizdiva.net/asserts/admin/questionimages/1546974002-5c34f3321dba3.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo30;
	if (obj.complete) {
		var TargetLink = $("button:contains('Snapchat')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo31 = ('https://quizdiva.net/asserts/admin/questionimages/1546974951-5c34f6e7144fb.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo31;
	if (obj.complete) {
		var TargetLink = $("button:contains('Spotify')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo32 = ('https://quizdiva.net/asserts/admin/questionimages/1546975265-5c34f821c1f23.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo32;
	if (obj.complete) {
		var TargetLink = $("button:contains('Toblerone')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo33 = ('https://quizdiva.net/asserts/admin/questionimages/1546976058-5c34fb3aa717a.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo33;
	if (obj.complete) {
		var TargetLink = $("button:contains('Pepsi')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo34 = ('https://quizdiva.net/asserts/admin/questionimages/1547056107-5c3633eb853df.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo34;
	if (obj.complete) {
		var TargetLink = $("button:contains('Miami Heat')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo35 = ('https://quizdiva.net/asserts/admin/questionimages/1547059585-5c364181a87bb.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo35;
	if (obj.complete) {
		var TargetLink = $("button:contains('Ferrari')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo36 = ('https://quizdiva.net/asserts/admin/questionimages/1547060329-5c3644698b88a.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo36;
	if (obj.complete) {
		var TargetLink = $("button:contains('Bugatti)")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo37 = ('https://quizdiva.net/asserts/admin/questionimages/1547061169-5c3647b16d401.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo37;
	if (obj.complete) {
		var TargetLink = $("button:contains('Airbnb')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo38 = ('https://quizdiva.net/asserts/admin/questionimages/1547062507-5c364ceb5370a.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo38;
	if (obj.complete) {
		var TargetLink = $("button:contains('The History Channel')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo39 = ('https://quizdiva.net/asserts/admin/questionimages/1547063851-5c36522b06e01.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo39;
	if (obj.complete) {
		var TargetLink = $("button:contains('Gerber')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Logo40 = ('https://quizdiva.net/asserts/admin/questionimages/1547064467-5c365493680ba.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Logo40;
	if (obj.complete) {
		var TargetLink = $("button:contains('Unilever')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

//LoL Answers
setInterval(function () {
	var LOL1 = ('https://quizdiva.net/asserts/admin/questionimages/1547141140-5c37801412019.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL1;
	if (obj.complete) {
		var TargetLink = $("button:contains('2009')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL2 = ('https://quizdiva.net/asserts/admin/questionimages/1547145201-5c378ff16ad00.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL2;
	if (obj.complete) {
		var TargetLink = $("button:contains('Riot Games')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL3 = ('https://quizdiva.net/asserts/admin/questionimages/1547147663-5c37998fe3b91.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL3;
	if (obj.complete) {
		var TargetLink = $("button:contains('Viktor')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL4 = ('');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL4;
	if (obj.complete) {
		var TargetLink = $("button:contains('139')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL5 = ('https://quizdiva.net/asserts/admin/questionimages/1547151757-5c37a98db229d.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL5;
	if (obj.complete) {
		var TargetLink = $("button:contains('Cassiopeia')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL6 = ('https://quizdiva.net/asserts/admin/questionimages/1547153203-5c37af33e205a.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL6;
	if (obj.complete) {
		var TargetLink = $("button:contains('Teemo')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL7 = ('https://quizdiva.net/asserts/admin/questionimages/1547154305-5c37b381df15d.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL7;
	if (obj.complete) {
		var TargetLink = $("button:contains('Yasuo')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL8 = ('https://quizdiva.net/asserts/admin/questionimages/1547241879-5c3909977dc88.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL8;
	if (obj.complete) {
		var TargetLink = $("button:contains('Massive Online Battle Arena')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL9 = ('https://quizdiva.net/asserts/admin/questionimages/1547243834-5c39113af129e.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL9;
	if (obj.complete) {
		var TargetLink = $("button:contains('Inhibitor')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL10 = ('https://quizdiva.net/asserts/admin/questionimages/1547308456-5c3a0da85dd8b.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL10;
	if (obj.complete) {
		var TargetLink = $("button:contains('Ashe')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL11 = ('https://quizdiva.net/asserts/admin/questionimages/1547311192-5c3a1858efc22.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL11;
	if (obj.complete) {
		var TargetLink = $("button:contains('40')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL12 = ('https://quizdiva.net/asserts/admin/questionimages/1547320660-5c3a3d54ce7d0.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL12;
	if (obj.complete) {
		var TargetLink = $("button:contains('Runeterra')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL13 = ('https://quizdiva.net/asserts/admin/questionimages/1547322133-5c3a4315aa5a3.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL13;
	if (obj.complete) {
		var TargetLink = $("button:contains('Garen')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL14 = ('https://quizdiva.net/asserts/admin/questionimages/1547323315-5c3a47b3a0959.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL14;
	if (obj.complete) {
		var TargetLink = $("button:contains('Fox')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL15 = ('https://quizdiva.net/asserts/admin/questionimages/1547324332-5c3a4bac0d200.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL15;
	if (obj.complete) {
		var TargetLink = $("button:contains('Zyra')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL16 = ('https://quizdiva.net/asserts/admin/questionimages/1547325554-5c3a507213f5d.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL16;
	if (obj.complete) {
		var TargetLink = $("button:contains('Minions')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL17 = ('https://quizdiva.net/asserts/admin/questionimages/1547392494-5c3b55ee93e36.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL17;
	if (obj.complete) {
		var TargetLink = $("button:contains('Singed')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL18 = ('https://quizdiva.net/asserts/admin/questionimages/1547396447-5c3b656012019.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL18;
	if (obj.complete) {
		var TargetLink = $("button:contains('Thunder')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL19 = ('https://quizdiva.net/asserts/admin/questionimages/1547651168-5c3f4860aa933.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL19;
	if (obj.complete) {
		var TargetLink = $("button:contains('Annie')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL20 = ('https://quizdiva.net/asserts/admin/questionimages/1547653554-5c3f51b266f93.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL20;
	if (obj.complete) {
		var TargetLink = $("button:contains('6')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL21 = ('https://quizdiva.net/asserts/admin/questionimages/1547666520-5c3f84585def3.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL21;
	if (obj.complete) {
		var TargetLink = $("button:contains('True')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL22 = ('https://quizdiva.net/asserts/admin/questionimages/1547669850-5c3f915a879ba.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL22;
	if (obj.complete) {
		var TargetLink = $("button:contains('False')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL23 = ('https://quizdiva.net/asserts/admin/questionimages/1547911039-5c433f7f5c397.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL23;
	if (obj.complete) {
		var TargetLink = $("button:contains('Miss Fortune')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL24 = ('https://quizdiva.net/asserts/admin/questionimages/1547917879-5c435a3706348.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL24;
	if (obj.complete) {
		var TargetLink = $("button:contains('Mana Regen per 5')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL25 = ('https://quizdiva.net/asserts/admin/questionimages/1547918558-5c435cde7b7bb.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL25;
	if (obj.complete) {
		var TargetLink = $("button:contains('Beatrice')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL26 = ('https://quizdiva.net/asserts/admin/questionimages/1547919816-5c4361c8b12ff.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL26;
	if (obj.complete) {
		var TargetLink = $("button:contains('Nidalee')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL27 = ('https://quizdiva.net/asserts/admin/questionimages/1547920729-5c4365594f8cb.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL27;
	if (obj.complete) {
		var TargetLink = $("button:contains('LeBlanc')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL28 = ('https://quizdiva.net/asserts/admin/questionimages/1547922154-5c436aeabde1f.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL28;
	if (obj.complete) {
		var TargetLink = $("button:contains('Willump')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL29 = ('https://quizdiva.net/asserts/admin/questionimages/1547156058-5c37ba5a95d88.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL29;
	if (obj.complete) {
		var TargetLink = $("button:contains('150')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LOL30 = ('https://quizdiva.net/asserts/admin/questionimages/1547923347-5c436f9393e3f.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LOL30;
	if (obj.complete) {
		var TargetLink = $("button:contains('32')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

//Reality TV Answers
setInterval(function () {
	var Reality1 = ('https://quizdiva.net/asserts/admin/questionimages/1538819662-5bb8864e6fd19.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Reality1;
	if (obj.complete) {
		var TargetLink = $("button:contains('2007')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Reality2 = ('https://quizdiva.net/asserts/admin/questionimages/1538820572-5bb889dc98ea1.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Reality2;
	if (obj.complete) {
		var TargetLink = $("button:contains('9')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Reality3 = ('https://quizdiva.net/asserts/admin/questionimages/1538821768-5bb88e88cc67a.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Reality3;
	if (obj.complete) {
		var TargetLink = $("button:contains('An American Family')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Reality4 = ('https://quizdiva.net/asserts/admin/questionimages/1538822403-5bb8910363a19.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Reality4;
	if (obj.complete) {
		var TargetLink = $("button:contains('Jeff Probst')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Reality5 = ('https://quizdiva.net/asserts/admin/questionimages/1538823167-5bb893ff130c0.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Reality5;
	if (obj.complete) {
		var TargetLink = $("button:contains('Richard Hatch')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Reality6 = ('https://quizdiva.net/asserts/admin/questionimages/1538825846-5bb89e769bc36.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Reality6;
	if (obj.complete) {
		var TargetLink = $("button:contains('fired!')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Reality7 = ('https://quizdiva.net/asserts/admin/questionimages/1538826638-5bb8a18eecd0c.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Reality7;
	if (obj.complete) {
		var TargetLink = $("button:contains('Eddie McGee')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Reality8 = ('https://quizdiva.net/asserts/admin/questionimages/1538827010-5bb8a302e4ce1.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Reality8;
	if (obj.complete) {
		var TargetLink = $("button:contains('Julie Chen')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Reality9 = ('https://quizdiva.net/asserts/admin/questionimages/1538828210-5bb8a7b2abb92.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Reality9;
	if (obj.complete) {
		var TargetLink = $("button:contains('Gordon Ramsay')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Reality10 = ('https://quizdiva.net/asserts/admin/questionimages/1538828812-5bb8aa0caafd1.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Reality10;
	if (obj.complete) {
		var TargetLink = $("button:contains('Alex Michel')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Reality11 = ('https://quizdiva.net/asserts/admin/questionimages/1538832648-5bb8b908c7b6a.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Reality11;
	if (obj.complete) {
		var TargetLink = $("button:contains('Race Car Driver')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Reality12 = ('https://quizdiva.net/asserts/admin/questionimages/1538834254-5bb8bf4eb8282.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Reality12;
	if (obj.complete) {
		var TargetLink = $("button:contains('The Hills')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Reality13 = ('https://quizdiva.net/asserts/admin/questionimages/1538835289-5bb8c3592ba53.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Reality13;
	if (obj.complete) {
		var TargetLink = $("button:contains('Luann de Lesseps')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Reality14 = ('https://quizdiva.net/asserts/admin/questionimages/1538835878-5bb8c5a6ca9b6.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Reality14;
	if (obj.complete) {
		var TargetLink = $("button:contains('Camille')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Reality15 = ('https://quizdiva.net/asserts/admin/questionimages/1538836543-5bb8c83f73a1c.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Reality15;
	if (obj.complete) {
		var TargetLink = $("button:contains('NeNe Leakes')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Reality16 = ('hhttps://quizdiva.net/asserts/admin/questionimages/1538837391-5bb8cb8fa92e8.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Reality16;
	if (obj.complete) {
		var TargetLink = $("button:contains('The Simple Life')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Reality17 = ('https://quizdiva.net/asserts/admin/questionimages/1538838946-5bb8d1a210ed9.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Reality17;
	if (obj.complete) {
		var TargetLink = $("button:contains('Nigel Barker')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Reality18 = ('https://quizdiva.net/asserts/admin/questionimages/1538839586-5bb8d422bae4a.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Reality18;
	if (obj.complete) {
		var TargetLink = $("button:contains('Tim Gunn')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Reality19 = ('https://quizdiva.net/asserts/admin/questionimages/1538839943-5bb8d5870946b.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Reality19;
	if (obj.complete) {
		var TargetLink = $("button:contains('2003')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Reality20 = ('https://quizdiva.net/asserts/admin/questionimages/1538840223-5bb8d69fa1215.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Reality20;
	if (obj.complete) {
		var TargetLink = $("button:contains('11')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

//Spelling Answers
setInterval(function () {
	var Spelling1 = ('https://quizdiva.net/asserts/admin/questionimages/1544002234-5c079abaad79f.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling1;
	if (obj.complete) {
		var TargetLink = $("button:contains('business')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling2 = ('https://quizdiva.net/asserts/admin/questionimages/1544004812-5c07a4cc85e99.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling2;
	if (obj.complete) {
		var TargetLink = $("button:contains('cemetery')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling3 = ('https://quizdiva.net/asserts/admin/questionimages/1544005974-5c07a956a14bf.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling3;
	if (obj.complete) {
		var TargetLink = $("button:contains('tongue')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling4 = ('https://quizdiva.net/asserts/admin/questionimages/1544006691-5c07ac23b9ac2.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling4;
	if (obj.complete) {
		var TargetLink = $("button:contains('tattoo')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling5 = ('https://quizdiva.net/asserts/admin/questionimages/1544007484-5c07af3c80ba2.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling5;
	if (obj.complete) {
		var TargetLink = $("button:contains('believe')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling6 = ('https://quizdiva.net/asserts/admin/questionimages/1544008051-5c07b1734c942.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling6;
	if (obj.complete) {
		var TargetLink = $("button:contains('committee')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling7 = ('https://quizdiva.net/asserts/admin/questionimages/1544008629-5c07b3b523390.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling7;
	if (obj.complete) {
		var TargetLink = $("button:contains('accommodation')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling8 = ('https://quizdiva.net/asserts/admin/questionimages/1544031322-5c080c5a725fc.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling8;
	if (obj.complete) {
		var TargetLink = $("button:contains('appearance')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling9 = ('https://quizdiva.net/asserts/admin/questionimages/1544032030-5c080f1ed33ad.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling9;
	if (obj.complete) {
		var TargetLink = $("button:contains('Caribbean')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling10 = ('https://quizdiva.net/asserts/admin/questionimages/1544032780-5c08120ccb863.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling10;
	if (obj.complete) {
		var TargetLink = $("button:contains('government')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling11 = ('https://quizdiva.net/asserts/admin/questionimages/1544033929-5c0816898ad9e.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling11;
	if (obj.complete) {
		var TargetLink = $("button:contains('iressistable')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling12 = ('https://quizdiva.net/asserts/admin/questionimages/1544034917-5c081a65253f4.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling12;
	if (obj.complete) {
		var TargetLink = $("button:contains('occasion')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling13 = ('https://quizdiva.net/asserts/admin/questionimages/1544036609-5c082101ded8f.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling13;
	if (obj.complete) {
		var TargetLink = $("button:contains('pavilion')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling14 = ('https://quizdiva.net/asserts/admin/questionimages/1544040922-5c0831da2b1a2.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling14;
	if (obj.complete) {
		var TargetLink = $("button:contains('siege')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling15 = ('https://quizdiva.net/asserts/admin/questionimages/1544041203-5c0832f3a1403.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling15;
	if (obj.complete) {
		var TargetLink = $("button:contains('Spellinglipop')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling16 = ('https://quizdiva.net/asserts/admin/questionimages/1544041486-5c08340e6949a.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling16;
	if (obj.complete) {
		var TargetLink = $("button:contains('glamorous')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling17 = ('https://quizdiva.net/asserts/admin/questionimages/1544041892-5c0835a47d034.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling17;
	if (obj.complete) {
		var TargetLink = $("button:contains('immediately')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling18 = ('https://quizdiva.net/asserts/admin/questionimages/1544042238-5c0836fe86551.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling18;
	if (obj.complete) {
		var TargetLink = $("button:contains('knowledge')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling19 = ('https://quizdiva.net/asserts/admin/questionimages/1544042687-5c0838bf0eaf8.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling19;
	if (obj.complete) {
		var TargetLink = $("button:contains('fluorescent')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling20 = ('https://quizdiva.net/asserts/admin/questionimages/1544085942-5c08e1b6e8ae1.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling20;
	if (obj.complete) {
		var TargetLink = $("button:contains('broccolli')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling21 = ('https://quizdiva.net/asserts/admin/questionimages/1544086281-5c08e3094b0f8.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling21;
	if (obj.complete) {
		var TargetLink = $("button:contains('science')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling22 = ('https://quizdiva.net/asserts/admin/questionimages/1544086551-5c08e417197cf.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling22;
	if (obj.complete) {
		var TargetLink = $("button:contains('jewelry')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling23 = ('https://quizdiva.net/asserts/admin/questionimages/1544087366-5c08e746b5585.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling23;
	if (obj.complete) {
		var TargetLink = $("button:contains('scissors')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling24 = ('https://quizdiva.net/asserts/admin/questionimages/1544088129-5c08ea4164608.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling24;
	if (obj.complete) {
		var TargetLink = $("button:contains('beginning')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling25 = ('https://quizdiva.net/asserts/admin/questionimages/1545160021-5c1945552e417.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling25;
	if (obj.complete) {
		var TargetLink = $("button:contains('misspell')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling26 = ('https://quizdiva.net/asserts/admin/questionimages/1545161619-5c194b93e2ebf.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling26;
	if (obj.complete) {
		var TargetLink = $("button:contains('camouflage')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling27 = ('https://quizdiva.net/asserts/admin/questionimages/1545162434-5c194ec23cae6.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling27;
	if (obj.complete) {
		var TargetLink = $("button:contains('daiquiri')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling28 = ('https://quizdiva.net/asserts/admin/questionimages/1545162686-5c194fbe193ee.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling28;
	if (obj.complete) {
		var TargetLink = $("button:contains('oeuvres')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling29 = ('https://quizdiva.net/asserts/admin/questionimages/1545299900-5c1b67bc522bb.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling29;
	if (obj.complete) {
		var TargetLink = $("button:contains('disastrous')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling30 = ('https://quizdiva.net/asserts/admin/questionimages/1545301372-5c1b6d7c269bd.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling30;
	if (obj.complete) {
		var TargetLink = $("button:contains('receipt')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling31 = ('https://quizdiva.net/asserts/admin/questionimages/1545319626-5c1bb4ca0d532.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling31;
	if (obj.complete) {
		var TargetLink = $("button:contains('medieval')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling32 = ('https://quizdiva.net/asserts/admin/questionimages/1545321976-5c1bbdf8ebc7b.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling32;
	if (obj.complete) {
		var TargetLink = $("button:contains('pastime')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling33 = ('https://quizdiva.net/asserts/admin/questionimages/1545323317-5c1bc335d070a.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling33;
	if (obj.complete) {
		var TargetLink = $("button:contains('niece')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling34 = ('https://quizdiva.net/asserts/admin/questionimages/1545324927-5c1bc97f5081c.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling34;
	if (obj.complete) {
		var TargetLink = $("button:contains('millennium')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling35 = ('https://quizdiva.net/asserts/admin/questionimages/1545325687-5c1bcc77182fe.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling35;
	if (obj.complete) {
		var TargetLink = $("button:contains('indict')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling36 = ('https://quizdiva.net/asserts/admin/questionimages/1545327264-5c1bd2a0342fe.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling36;
	if (obj.complete) {
		var TargetLink = $("button:contains('quarantine')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling37 = ('https://quizdiva.net/asserts/admin/questionimages/1545329855-5c1bdcbf15d8b.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling37;
	if (obj.complete) {
		var TargetLink = $("button:contains('fiery')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling38 = ('https://quizdiva.net/asserts/admin/questionimages/1545331704-5c1be3f8714eb.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling38;
	if (obj.complete) {
		var TargetLink = $("button:contains('amateur')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling39 = ('https://quizdiva.net/asserts/admin/questionimages/1545333251-5c1bea0352764.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling39;
	if (obj.complete) {
		var TargetLink = $("button:contains('across')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling40 = ('https://quizdiva.net/asserts/admin/questionimages/1545336444-5c1bf67c75f6a.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling40;
	if (obj.complete) {
		var TargetLink = $("button:contains('irritable')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling41 = ('https://quizdiva.net/asserts/admin/questionimages/1544004453-5c07a36528400.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling41;
	if (obj.complete) {
		var TargetLink = $("button:contains('chauffeur')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);
setInterval(function () {
	var Spelling42 = ('https://quizdiva.net/asserts/admin/questionimages/1544035907-5c081e431f3d0.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling42;
	if (obj.complete) {
		var TargetLink = $("button:contains('pharaoh')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);
setInterval(function () {
	var Spelling43 = ('https://quizdiva.net/asserts/admin/questionimages/1544039652-5c082ce42f023.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling43;
	if (obj.complete) {
		var TargetLink = $("button:contains('religious')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);
setInterval(function () {
	var Spelling44 = ('https://quizdiva.net/asserts/admin/questionimages/1544040244-5c082f34b79a1.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling44;
	if (obj.complete) {
		var TargetLink = $("button:contains('successful')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);
setInterval(function () {
	var Spelling45 = ('https://quizdiva.net/asserts/admin/questionimages/1544085390-5c08df8ea0b9c.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling45;
	if (obj.complete) {
		var TargetLink = $("button:contains('sergeant')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);
setInterval(function () {
	var Spelling46 = ('https://quizdiva.net/asserts/admin/questionimages/1544087051-5c08e60bde5cd.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling46;
	if (obj.complete) {
		var TargetLink = $("button:contains('conscious')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Spelling47 = ('https://quizdiva.net/asserts/admin/questionimages/1545335369-5c1bf24996d27.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling47;
	if (obj.complete) {
		var TargetLink = $("button:contains('exaggerate')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);
setInterval(function () {
	var Spelling48 = ('https://quizdiva.net/asserts/admin/questionimages/1544086740-5c08e4d46d1b8.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling48;
	if (obj.complete) {
		var TargetLink = $("button:contains('mysterious')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);
setInterval(function () {
	var Spelling49 = ('https://quizdiva.net/asserts/admin/questionimages/1545337037-5c1bf8cd759df.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling49;
	if (obj.complete) {
		var TargetLink = $("button:contains('peculiar')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);
setInterval(function () {
	var Spelling50 = ('https://quizdiva.net/asserts/admin/questionimages/1544087789-5c08e8ed82313.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Spelling50;
	if (obj.complete) {
		var TargetLink = $("button:contains('miniature')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

//Disney Answers
setInterval(function () {
	var Lionking = ('https://quizdiva.net/asserts/admin/questionimages/1538669288-5bb63ae8ce4fe.jpeg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Lionking;
	if (obj.complete) {
		var TargetLink = $("button:contains('The Lion King')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var SnowWhite = ('https://quizdiva.net/asserts/admin/questionimages/1538669782-5bb63cd67ff95.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = SnowWhite;
	if (obj.complete) {
		var TargetLink = $("button:contains('Snow White and the Seven Dwarfs')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Hercules = ('https://quizdiva.net/asserts/admin/questionimages/1538670220-5bb63e8c46569.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Hercules;
	if (obj.complete) {
		var TargetLink = $("button:contains('Hercules')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Princessfrog = ('https://quizdiva.net/asserts/admin/questionimages/1538670566-5bb63fe6d6e2b.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Princessfrog;
	if (obj.complete) {
		var TargetLink = $("button:contains('The Princess and the Frog')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var TreasurePlanet = ('https://quizdiva.net/asserts/admin/questionimages/1538670918-5bb641462286a.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = TreasurePlanet;
	if (obj.complete) {
		var TargetLink = $("button:contains('Treasure Planet')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Tangled = ('https://quizdiva.net/asserts/admin/questionimages/1538749067-5bb7728bbc980.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Tangled;
	if (obj.complete) {
		var TargetLink = $("button:contains('Tangled')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Pocahontas = ('https://quizdiva.net/asserts/admin/questionimages/1538749556-5bb774749c85e.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Pocahontas;
	if (obj.complete) {
		var TargetLink = $("button:contains('Pocahontas')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Tarzan = ('https://quizdiva.net/asserts/admin/questionimages/1538749899-5bb775cb9cbcc.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Tarzan;
	if (obj.complete) {
		var TargetLink = $("button:contains('Tarzan')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Cinderella = ('https://quizdiva.net/asserts/admin/questionimages/1538750127-5bb776af8f54a.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Cinderella;
	if (obj.complete) {
		var TargetLink = $("button:contains('Cinderella')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Frozen = ('https://quizdiva.net/asserts/admin/questionimages/1538750539-5bb7784b2d247.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Frozen;
	if (obj.complete) {
		var TargetLink = $("button:contains('Frozen')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Anastasia = ('https://quizdiva.net/asserts/admin/questionimages/1538750854-5bb7798665792.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Anastasia;
	if (obj.complete) {
		var TargetLink = $("button:contains('Anastasia')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var LiloStitch = ('https://quizdiva.net/asserts/admin/questionimages/1538751083-5bb77a6b5eeee.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = LiloStitch;
	if (obj.complete) {
		var TargetLink = $("button:contains('Lilo & Stitch')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var MeettheRobinsons = ('https://quizdiva.net/asserts/admin/questionimages/1538751782-5bb77d2618c34.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = MeettheRobinsons;
	if (obj.complete) {
		var TargetLink = $("button:contains('Meet the Robinsons')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Bolt = ('https://quizdiva.net/asserts/admin/questionimages/1538752197-5bb77ec52525d.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Bolt;
	if (obj.complete) {
		var TargetLink = $("button:contains('Bolt')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var WreckItRalph = ('https://quizdiva.net/asserts/admin/questionimages/1538752634-5bb7807ac3672.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = WreckItRalph;
	if (obj.complete) {
		var TargetLink = $("button:contains('Wreck-It Ralph')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var ChickenLittle = ('https://quizdiva.net/asserts/admin/questionimages/1538753023-5bb781ff33fe4.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = ChickenLittle;
	if (obj.complete) {
		var TargetLink = $("button:contains('Chicken Little')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Aladdin = ('https://quizdiva.net/asserts/admin/questionimages/1538753599-5bb7843fa5e73.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Aladdin;
	if (obj.complete) {
		var TargetLink = $("button:contains('Aladdin')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var TheAristocats = ('https://quizdiva.net/asserts/admin/questionimages/1538753960-5bb785a8219c4.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = TheAristocats;
	if (obj.complete) {
		var TargetLink = $("button:contains('The Aristocats')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Moana = ('https://quizdiva.net/asserts/admin/questionimages/1538754414-5bb7876e4b4a5.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Moana;
	if (obj.complete) {
		var TargetLink = $("button:contains('Moana')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var FindingNemo = ('https://quizdiva.net/asserts/admin/questionimages/1538755101-5bb78a1d7b435.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = FindingNemo;
	if (obj.complete) {
		var TargetLink = $("button:contains('Finding Nemo')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Zootopia = ('https://quizdiva.net/asserts/admin/questionimages/1538755842-5bb78d0274992.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Zootopia;
	if (obj.complete) {
		var TargetLink = $("button:contains('Zootopia')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var BrotherBear = ('https://quizdiva.net/asserts/admin/questionimages/1538756054-5bb78dd6a36c3.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = BrotherBear;
	if (obj.complete) {
		var TargetLink = $("button:contains('Brother Bear')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var MonstersInc = ('https://quizdiva.net/asserts/admin/questionimages/1538756487-5bb78f8757473.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = MonstersInc;
	if (obj.complete) {
		var TargetLink = $("button:contains('Monsters, Inc.')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var TheLittleMermaid = ('https://quizdiva.net/asserts/admin/questionimages/1538756821-5bb790d55fd44.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = TheLittleMermaid;
	if (obj.complete) {
		var TargetLink = $("button:contains('The Little Mermaid')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var SleepingBeauty = ('https://quizdiva.net/asserts/admin/questionimages/1538757239-5bb79277d9b7b.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = SleepingBeauty;
	if (obj.complete) {
		var TargetLink = $("button:contains('Sleeping Beauty')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var AliceinWonderland = ('https://quizdiva.net/asserts/admin/questionimages/1538757675-5bb7942b3c849.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = AliceinWonderland;
	if (obj.complete) {
		var TargetLink = $("button:contains('Alice in Wonderland')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var PeterPan = ('https://quizdiva.net/asserts/admin/questionimages/1538757910-5bb79516a551b.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = PeterPan;
	if (obj.complete) {
		var TargetLink = $("button:contains('Peter Pan')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Pinocchio = ('https://quizdiva.net/asserts/admin/questionimages/1538758466-5bb797420d0aa.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Pinocchio;
	if (obj.complete) {
		var TargetLink = $("button:contains('Pinocchio')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var BigHero6 = ('https://quizdiva.net/asserts/admin/questionimages/1538758863-5bb798cf9db9a.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = BigHero6;
	if (obj.complete) {
		var TargetLink = $("button:contains('Big Hero 6')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Atlantis = ('https://quizdiva.net/asserts/admin/questionimages/1538759355-5bb79abbb42cf.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Atlantis;
	if (obj.complete) {
		var TargetLink = $("button:contains('Atlantis: The Lost Empire')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

//Pokemon Quiz
setInterval(function () {
	var Pikachu = ('https://quizdiva.net/asserts/admin/questionimages/1536092884-5b8eead494075.jpeg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Pikachu;
	if (obj.complete) {
		var TargetLink = $("button:contains('Pikachu')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Charmander = ('https://quizdiva.net/asserts/admin/questionimages/1536094156-5b8eefcc9e13d.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Charmander;
	if (obj.complete) {
		var TargetLink = $("button:contains('Charmander')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Metapod = ('https://quizdiva.net/asserts/admin/questionimages/1536094288-5b8ef05088c6e.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Metapod;
	if (obj.complete) {
		var TargetLink = $("button:contains('Metapod')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Poliwhirl = ('https://quizdiva.net/asserts/admin/questionimages/1536094442-5b8ef0ea49724.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Poliwhirl;
	if (obj.complete) {
		var TargetLink = $("button:contains('Poliwhirl')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Squirtle = ('https://quizdiva.net/asserts/admin/questionimages/1537978394-5babb01ab1e32.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Squirtle;
	if (obj.complete) {
		var TargetLink = $("button:contains('Squirtle')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Jigglypuff = ('https://quizdiva.net/asserts/admin/questionimages/1537978611-5babb0f31301f.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Jigglypuff;
	if (obj.complete) {
		var TargetLink = $("button:contains('Jigglypuff')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Eevee = ('https://quizdiva.net/asserts/admin/questionimages/1537978792-5babb1a81fbd1.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Eevee;
	if (obj.complete) {
		var TargetLink = $("button:contains('Eevee')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Ponyta = ('https://quizdiva.net/asserts/admin/questionimages/1537979183-5babb32f3e03c.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Ponyta;
	if (obj.complete) {
		var TargetLink = $("button:contains('Ponyta')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Haunter = ('https://quizdiva.net/asserts/admin/questionimages/1537979827-5babb5b371621.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Haunter;
	if (obj.complete) {
		var TargetLink = $("button:contains('Haunter')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Clefairy = ('https://quizdiva.net/asserts/admin/questionimages/1537979926-5babb61662045.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Clefairy;
	if (obj.complete) {
		var TargetLink = $("button:contains('Clefairy')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Caterpie = ('https://quizdiva.net/asserts/admin/questionimages/1537980171-5babb70b33ca9.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Caterpie;
	if (obj.complete) {
		var TargetLink = $("button:contains('Caterpie')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Geodude = ('https://quizdiva.net/asserts/admin/questionimages/1537980551-5babb887b2337.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Geodude;
	if (obj.complete) {
		var TargetLink = $("button:contains('Geodude')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Diglett = ('https://quizdiva.net/asserts/admin/questionimages/1537980770-5babb96286562.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Diglett;
	if (obj.complete) {
		var TargetLink = $("button:contains('Diglett')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Alakazam = ('https://quizdiva.net/asserts/admin/questionimages/1537980978-5babba325d626.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Alakazam;
	if (obj.complete) {
		var TargetLink = $("button:contains('Alakazam')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Psyduck = ('https://quizdiva.net/asserts/admin/questionimages/1537981182-5babbafe43d72.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Psyduck;
	if (obj.complete) {
		var TargetLink = $("button:contains('Psyduck')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Cubone = ('https://quizdiva.net/asserts/admin/questionimages/1537981372-5babbbbc339f4.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Cubone;
	if (obj.complete) {
		var TargetLink = $("button:contains('Cubone')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Sandshrew = ('https://quizdiva.net/asserts/admin/questionimages/1537981520-5babbc50d2871.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Sandshrew;
	if (obj.complete) {
		var TargetLink = $("button:contains('Sandshrew')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Magikarp = ('https://quizdiva.net/asserts/admin/questionimages/1537981817-5babbd797ed85.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Magikarp;
	if (obj.complete) {
		var TargetLink = $("button:contains('Magikarp')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Raichu = ('https://quizdiva.net/asserts/admin/questionimages/1537982083-5babbe83ddf4d.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Raichu;
	if (obj.complete) {
		var TargetLink = $("button:contains('Raichu')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Krabby = ('https://quizdiva.net/asserts/admin/questionimages/1537982202-5babbefa44b9b.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Krabby;
	if (obj.complete) {
		var TargetLink = $("button:contains('Krabby')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Growlithe = ('https://quizdiva.net/asserts/admin/questionimages/1537982538-5babc04adb9c2.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Growlithe;
	if (obj.complete) {
		var TargetLink = $("button:contains('Growlithe')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Primeape = ('https://quizdiva.net/asserts/admin/questionimages/1537982922-5babc1caba045.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Primeape;
	if (obj.complete) {
		var TargetLink = $("button:contains('Primeape')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Abra = ('https://quizdiva.net/asserts/admin/questionimages/1537983081-5babc269b80b5.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Abra;
	if (obj.complete) {
		var TargetLink = $("button:contains('Abra')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Raticate = ('https://quizdiva.net/asserts/admin/questionimages/1537983266-5babc322409de.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Raticate;
	if (obj.complete) {
		var TargetLink = $("button:contains('Raticate')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Pinsir = ('https://quizdiva.net/asserts/admin/questionimages/1537984001-5babc6014932b.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Pinsir;
	if (obj.complete) {
		var TargetLink = $("button:contains('Pinsir')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Indonesia = ('https://quizdiva.net/asserts/admin/questionimages/1546547028-5c2e6f5485195.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Indonesia;
	if (obj.complete) {
		var TargetLink = $("button:contains('Indonesia')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

//Minecraft Answers
setInterval(function () {
	var Minecraft18 = ('https://quizdiva.net/asserts/admin/questionimages/1544261480-5c0b8f682a8f3.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft18;
	if (obj.complete) {
		var TargetLink = $("button:contains('Mojang')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft1 = ('https://quizdiva.net/asserts/admin/questionimages/1544263962-5c0b991a33a5f.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft1;
	if (obj.complete) {
		var TargetLink = $("button:contains('Cave Game')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft2 = ('https://quizdiva.net/asserts/admin/questionimages/1544286633-5c0bf1a954458.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft2;
	if (obj.complete) {
		var TargetLink = $("button:contains('Mobile')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft3 = ('https://quizdiva.net/asserts/admin/questionimages/1544287399-5c0bf4a73ccc6.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft3;
	if (obj.complete) {
		var TargetLink = $("button:contains('Enderman')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft4 = ('https://quizdiva.net/asserts/admin/questionimages/1544287816-5c0bf64831f09.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft4;
	if (obj.complete) {
		var TargetLink = $("button:contains('Golem')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft5 = ('https://quizdiva.net/asserts/admin/questionimages/1544288150-5c0bf796be680.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft5;
	if (obj.complete) {
		var TargetLink = $("button:contains('Creeper')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft6 = ('https://quizdiva.net/asserts/admin/questionimages/1544288520-5c0bf908a7c68.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft6;
	if (obj.complete) {
		var TargetLink = $("button:contains('Skeleton')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft7 = ('https://quizdiva.net/asserts/admin/questionimages/1544290407-5c0c0067bbb9c.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft7;
	if (obj.complete) {
		var TargetLink = $("button:contains('Wood')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft8 = ('https://quizdiva.net/asserts/admin/questionimages/1544291021-5c0c02cd3bb45.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft8;
	if (obj.complete) {
		var TargetLink = $("button:contains('Pickaxe')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft9 = ('https://quizdiva.net/asserts/admin/questionimages/1544292242-5c0c0792374f0.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft9;
	if (obj.complete) {
		var TargetLink = $("button:contains('Bucket')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft10 = ('https://quizdiva.net/asserts/admin/questionimages/1544551135-5c0ffadf0289c.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft10;
	if (obj.complete) {
		var TargetLink = $("button:contains('The Nether')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft11 = ('https://quizdiva.net/asserts/admin/questionimages/1544552674-5c1000e2a812e.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft11;
	if (obj.complete) {
		var TargetLink = $("button:contains('Rotten Flesh')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft12 = ('https://quizdiva.net/asserts/admin/questionimages/1544556539-5c100ffb49f23.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft12;
	if (obj.complete) {
		var TargetLink = $("button:contains('Put two chests next to each other.')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft13 = ('https://quizdiva.net/asserts/admin/questionimages/1544627781-5c112645e430d.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft13;
	if (obj.complete) {
		var TargetLink = $("button:contains('True')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft14 = ('https://quizdiva.net/asserts/admin/questionimages/1544630384-5c1130707368f.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft14;
	if (obj.complete) {
		var TargetLink = $("button:contains('5')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft15 = ('https://quizdiva.net/asserts/admin/questionimages/1544632139-5c11374b1c877.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft15;
	if (obj.complete) {
		var TargetLink = $("button:contains('Hardcore')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft16 = ('https://quizdiva.net/asserts/admin/questionimages/1544635257-5c11437968a6c.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft16;
	if (obj.complete) {
		var TargetLink = $("button:contains('Spectator')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft17 = ('https://quizdiva.net/asserts/admin/questionimages/1544644176-5c116650299f0.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft17;
	if (obj.complete) {
		var TargetLink = $("button:contains('True')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft18 = ('https://quizdiva.net/asserts/admin/questionimages/1544725571-5c12a4436aa6b.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft18;
	if (obj.complete) {
		var TargetLink = $("button:contains('3')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft19 = ('https://quizdiva.net/asserts/admin/questionimages/1544730345-5c12b6e9a44b0.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft19;
	if (obj.complete) {
		var TargetLink = $("button:contains('False')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft20 = ('https://quizdiva.net/asserts/admin/questionimages/1544553983-5c1005ff4b4e9.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft20;
	if (obj.complete) {
		var TargetLink = $("button:contains('Bones')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft21 = ('https://quizdiva.net/asserts/admin/questionimages/1544722084-5c1296a439e21.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft21;
	if (obj.complete) {
		var TargetLink = $("button:contains('30')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft22 = ('https://quizdiva.net/asserts/admin/questionimages/1544723803-5c129d5b5dddc.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft22;
	if (obj.complete) {
		var TargetLink = $("button:contains('12')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft23 = ('https://quizdiva.net/asserts/admin/questionimages/1544729541-5c12b3c59e570.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft23;
	if (obj.complete) {
		var TargetLink = $("button:contains('7')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Minecraft24 = ('https://quizdiva.net/asserts/admin/questionimages/1544727084-5c12aa2c5047c.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Minecraft24;
	if (obj.complete) {
		var TargetLink = $("button:contains('5')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

//NBA Answers
setInterval(function () {
	var NBA1 = ('https://quizdiva.net/asserts/admin/questionimages/1547833657-5c421139e4f41.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA1;
	if (obj.complete) {
		var TargetLink = $("button:contains('National Basketball Association')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA2 = ('https://quizdiva.net/asserts/admin/questionimages/1547839767-5c4229178272c.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA2;
	if (obj.complete) {
		var TargetLink = $("button:contains('Wilt Chamberlain')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA3 = ('https://quizdiva.net/asserts/admin/questionimages/1547839957-5c4229d545c84.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA3;
	if (obj.complete) {
		var TargetLink = $("button:contains('Stephen Curry')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA4 = ('https://quizdiva.net/asserts/admin/questionimages/1547840122-5c422a7ad45d6.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA4;
	if (obj.complete) {
		var TargetLink = $("button:contains('24')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA5 = ('https://quizdiva.net/asserts/admin/questionimages/1547840284-5c422b1c9eb55.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA5;
	if (obj.complete) {
		var TargetLink = $("button:contains('Knockout')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA6 = ('https://quizdiva.net/asserts/admin/questionimages/1547841360-5c422f50dd284.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA6;
	if (obj.complete) {
		var TargetLink = $("button:contains('Vancouver')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA7 = ('https://quizdiva.net/asserts/admin/questionimages/1547841641-5c42306941dbb.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA7;
	if (obj.complete) {
		var TargetLink = $("button:contains('Michael Jordan')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA8 = ('https://quizdiva.net/asserts/admin/questionimages/1547841903-5c42316f7351e.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA8;
	if (obj.complete) {
		var TargetLink = $("button:contains('Kobe Bryant')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA9 = ('https://quizdiva.net/asserts/admin/questionimages/1547842219-5c4232abddd8c.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA9;
	if (obj.complete) {
		var TargetLink = $("button:contains('DeAndre Ayton')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA10 = ('https://quizdiva.net/asserts/admin/questionimages/1547842565-5c4234054f876.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA10;
	if (obj.complete) {
		var TargetLink = $("button:contains('Nevada')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA11 = ('https://quizdiva.net/asserts/admin/questionimages/1547842910-5c42355e13f7f.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA11;
	if (obj.complete) {
		var TargetLink = $("button:contains('Gary Payton')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA12 = ('https://quizdiva.net/asserts/admin/questionimages/1547843069-5c4235fd48b17.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA12;
	if (obj.complete) {
		var TargetLink = $("button:contains('Three-Peat')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA13 = ('https://quizdiva.net/asserts/admin/questionimages/1547843411-5c4237537e406.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA13;
	if (obj.complete) {
		var TargetLink = $("button:contains('Sixth man')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA14 = ('https://quizdiva.net/asserts/admin/questionimages/1547846644-5c4243f451a1d.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA14;
	if (obj.complete) {
		var TargetLink = $("button:contains('And-one')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA15 = ('https://quizdiva.net/asserts/admin/questionimages/1547846982-5c4245460455b.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA15;
	if (obj.complete) {
		var TargetLink = $("button:contains('between 250 and 500')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA16 = ('https://quizdiva.net/asserts/admin/questionimages/1547847554-5c42478211ece.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA16;
	if (obj.complete) {
		var TargetLink = $("button:contains('Wataru Misaka')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA17 = ('https://quizdiva.net/asserts/admin/questionimages/1547847765-5c42485594de4.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA17;
	if (obj.complete) {
		var TargetLink = $("button:contains('Dallas Mavericks')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA18 = ('https://quizdiva.net/asserts/admin/questionimages/1547847917-5c4248ed3721b.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA18;
	if (obj.complete) {
		var TargetLink = $("button:contains('Russell Westbrook and Kobe Bryant')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA19 = ('https://quizdiva.net/asserts/admin/questionimages/1547848642-5c424bc2e127b.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA19;
	if (obj.complete) {
		var TargetLink = $("button:contains('Dirk Nowitzki')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA20 = ('https://quizdiva.net/asserts/admin/questionimages/1547848869-5c424ca5aa5a1.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA20;
	if (obj.complete) {
		var TargetLink = $("button:contains('Kendrick Perkins')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);
setInterval(function () {
	var NBA21 = ('https://quizdiva.net/asserts/admin/questionimages/1547847229-5c42463db9c67.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA21;
	if (obj.complete) {
		var TargetLink = $("button:contains('Kareem Abdul Jabbar')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA22 = ('https://quizdiva.net/asserts/admin/questionimages/1547841799-5c423107bdd20.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA22;
	if (obj.complete) {
		var TargetLink = $("button:contains('Steve Kerr')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA23 = ('https://quizdiva.net/asserts/admin/questionimages/1548195137-5c4795415d33f.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA23;
	if (obj.complete) {
		var TargetLink = $("button:contains('Black Mamba')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA24 = ('https://quizdiva.net/asserts/admin/questionimages/1547745436-5c40b89ca5497.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA24;
	if (obj.complete) {
		var TargetLink = $("button:contains('C')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var NBA25 = ('https://quizdiva.net/asserts/admin/questionimages/1547745456-5c40b8b057590.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = NBA25;
	if (obj.complete) {
		var TargetLink = $("button:contains('D')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

//2018 Answers
setInterval(function () {
	var quiz20181 = ('https://quizdiva.net/asserts/admin/questionimages/1546443253-5c2cd9f5aea19.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz20181;
	if (obj.complete) {
		var TargetLink = $("button:contains('Super Blue Blood Moon')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var quiz20182 = ('https://quizdiva.net/asserts/admin/questionimages/1546448544-5c2ceea076e35.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz20182;
	if (obj.complete) {
		var TargetLink = $("button:contains('Meghan Markle')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var quiz20183 = ('https://quizdiva.net/asserts/admin/questionimages/1546449764-5c2cf36414804.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz20183;
	if (obj.complete) {
		var TargetLink = $("button:contains('Aretha Franklin')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var quiz20184 = ('https://quizdiva.net/asserts/admin/questionimages/1546452007-5c2cfc273e031.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz20184;
	if (obj.complete) {
		var TargetLink = $("button:contains('Invasion of Privacy')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var quiz20185 = ('https://quizdiva.net/asserts/admin/questionimages/1546453028-5c2d002468b58.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz20185;
	if (obj.complete) {
		var TargetLink = $("button:contains('In My Feelings')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var quiz20186 = ('https://quizdiva.net/asserts/admin/questionimages/1546454814-5c2d071e21a1e.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz20186;
	if (obj.complete) {
		var TargetLink = $("button:contains('95')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var quiz20187 = ('https://quizdiva.net/asserts/admin/questionimages/1537373487-5ba2752f5ce47.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz20187;
	if (obj.complete) {
		var TargetLink = $("button:contains('Josh Hart')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var quiz20188 = ('https://quizdiva.net/asserts/admin/questionimages/1537376708-5ba281c491a21.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz20188;
	if (obj.complete) {
		var TargetLink = $("button:contains('20')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var quiz20189 = ('https://quizdiva.net/asserts/admin/questionimages/1546455649-5c2d0a6149955.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz20189;
	if (obj.complete) {
		var TargetLink = $("button:contains('France')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var quiz201810 = ('https://quizdiva.net/asserts/admin/questionimages/1546456932-5c2d0f640949b.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz201810;
	if (obj.complete) {
		var TargetLink = $("button:contains('Baby Shark')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var quiz201811 = ('https://quizdiva.net/asserts/admin/questionimages/1546457777-5c2d12b13432e.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz201811;
	if (obj.complete) {
		var TargetLink = $("button:contains('Childish Gambino')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var quiz201812 = ('https://quizdiva.net/asserts/admin/questionimages/1546618653-5c2f871e006eb.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz201812;
	if (obj.complete) {
		var TargetLink = $("button:contains('In an airplane')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var quiz201813 = ('https://quizdiva.net/asserts/admin/questionimages/1546619798-5c2f8b96bde28.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz201813;
	if (obj.complete) {
		var TargetLink = $("button:contains('single-use')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var quiz201814 = ('https://quizdiva.net/asserts/admin/questionimages/1546622070-5c2f94764f8a0.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz201814;
	if (obj.complete) {
		var TargetLink = $("button:contains('Lewis Hamilton')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var quiz201815 = ('https://quizdiva.net/asserts/admin/questionimages/1546624659-5c2f9e93a17bb.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz201815;
	if (obj.complete) {
		var TargetLink = $("button:contains('Guillermo del Toro')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var quiz201816 = ('https://quizdiva.net/asserts/admin/questionimages/1546626462-5c2fa59e602ba.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz201816;
	if (obj.complete) {
		var TargetLink = $("button:contains('Crazy Rich Asians')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var quiz201817 = ('https://quizdiva.net/asserts/admin/questionimages/1546629397-5c2fb115cc888.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz201817;
	if (obj.complete) {
		var TargetLink = $("button:contains('Thailand')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var quiz201818 = ('https://quizdiva.net/asserts/admin/questionimages/1546785054-5c32111e1577f.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz201818;
	if (obj.complete) {
		var TargetLink = $("button:contains('Malcolm')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var quiz201819 = ('https://quizdiva.net/asserts/admin/questionimages/1546788474-5c321e7a68c9b.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz201819;
	if (obj.complete) {
		var TargetLink = $("button:contains('Cambridge Analytica')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var quiz201820 = ('https://quizdiva.net/asserts/admin/questionimages/1546789450-5c32224af1be1.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz201820;
	if (obj.complete) {
		var TargetLink = $("button:contains('Stormi')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);
setInterval(function () {
	var quiz201821 = ('https://quizdiva.net/asserts/admin/questionimages/1546791514-5c322a5a86b45.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz201821;
	if (obj.complete) {
		var TargetLink = $("button:contains('blackfishing')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);
setInterval(function () {
	var quiz201822 = ('https://quizdiva.net/asserts/admin/questionimages/1546798437-5c3245660f15a.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz201822;
	if (obj.complete) {
		var TargetLink = $("button:contains('Bird Box')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);
setInterval(function () {
	var quiz201823 = ('https://quizdiva.net/asserts/admin/questionimages/1546446995-5c2ce893a325e.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz201823;
	if (obj.complete) {
		var TargetLink = $("button:contains('Black Panther')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);
setInterval(function () {
	var quiz201824 = ('https://quizdiva.net/asserts/admin/questionimages/1546627856-5c2fab10e6e64.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = quiz201824;
	if (obj.complete) {
		var TargetLink = $("button:contains('Los Angeles Lakers')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);


//Nintendo Answers
setInterval(function () {
	var Nintendo1 = ('https://quizdiva.net/asserts/admin/questionimages/1548188512-5c477b60534c6.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo1;
	if (obj.complete) {
		var TargetLink = $("button:contains('1889')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo2 = ('https://quizdiva.net/asserts/admin/questionimages/1548188804-5c477c8425893.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo2;
	if (obj.complete) {
		var TargetLink = $("button:contains('Nintendo Power')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo3 = ('https://quizdiva.net/asserts/admin/questionimages/1548188959-5c477d1feae49.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo3;
	if (obj.complete) {
		var TargetLink = $("button:contains('3')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo4 = ('https://quizdiva.net/asserts/admin/questionimages/1548189067-5c477d8baa348.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo4;
	if (obj.complete) {
		var TargetLink = $("button:contains('Plumber')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo5 = ('https://quizdiva.net/asserts/admin/questionimages/1548189452-5c477f0cd665e.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo5;
	if (obj.complete) {
		var TargetLink = $("button:contains('Giga Bowser')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo6 = ('https://quizdiva.net/asserts/admin/questionimages/1548189836-5c47808ceb51c.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo6;
	if (obj.complete) {
		var TargetLink = $("button:contains('Wii Sports')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo7 = ('https://quizdiva.net/asserts/admin/questionimages/1548190156-5c4781ccd7dd4.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo7;
	if (obj.complete) {
		var TargetLink = $("button:contains('Nintendo 3DS')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo8 = ('https://quizdiva.net/asserts/admin/questionimages/1548190333-5c47827d74a44.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo8;
	if (obj.complete) {
		var TargetLink = $("button:contains('Playing cards')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo9 = ('https://quizdiva.net/asserts/admin/questionimages/1548190437-5c4782e593e9b.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo9;
	if (obj.complete) {
		var TargetLink = $("button:contains('Leave luck to heaven')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo10 = ('https://quizdiva.net/asserts/admin/questionimages/1548190545-5c4783513ff0e.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo10;
	if (obj.complete) {
		var TargetLink = $("button:contains('Metroid')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo11 = ('https://quizdiva.net/asserts/admin/questionimages/1548190624-5c4783a0805b9.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo11;
	if (obj.complete) {
		var TargetLink = $("button:contains('Dinosaur')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo12 = ('https://quizdiva.net/asserts/admin/questionimages/1548192094-5c47895ea5e11.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo12;
	if (obj.complete) {
		var TargetLink = $("button:contains('Nintendo Entertainment System')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo13 = ('https://quizdiva.net/asserts/admin/questionimages/1548192215-5c4789d73c274.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo13;
	if (obj.complete) {
		var TargetLink = $("button:contains('Gamecube only')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo14 = ('https://quizdiva.net/asserts/admin/questionimages/1548192357-5c478a6530fe6.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo14;
	if (obj.complete) {
		var TargetLink = $("button:contains('Kyoto, Japan')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo15 = ('https://quizdiva.net/asserts/admin/questionimages/1548192434-5c478ab20a34f.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo15;
	if (obj.complete) {
		var TargetLink = $("button:contains('Red and Blue')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo16 = ('https://quizdiva.net/asserts/admin/questionimages/1548192624-5c478b703244f.jpeg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo16;
	if (obj.complete) {
		var TargetLink = $("button:contains('Kirby')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo17 = ('https://quizdiva.net/asserts/admin/questionimages/1548192772-5c478c0425899.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo17;
	if (obj.complete) {
		var TargetLink = $("button:contains('Tanooki Mario')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo18 = ('https://quizdiva.net/asserts/admin/questionimages/1548192884-5c478c742877d.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo18;
	if (obj.complete) {
		var TargetLink = $("button:contains('Yellow')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo19 = ('https://quizdiva.net/asserts/admin/questionimages/1548193757-5c478fdd3bff9.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo19;
	if (obj.complete) {
		var TargetLink = $("button:contains('McCloud')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo20 = ('https://quizdiva.net/asserts/admin/questionimages/1548363766-5c4a27f6286b0.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo20;
	if (obj.complete) {
		var TargetLink = $("button:contains('Nintendo Switch')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo21 = ('https://quizdiva.net/asserts/admin/questionimages/1548189652-5c477fd4c8a02.jpeg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo21;
	if (obj.complete) {
		var TargetLink = $("button:contains('Janitor')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo22 = ('https://quizdiva.net/asserts/admin/questionimages/1548190797-5c47844d27fb0.png');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo22;
	if (obj.complete) {
		var TargetLink = $("button:contains('Waluigi')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo23 = ('https://quizdiva.net/asserts/admin/questionimages/1548191279-5c47862f9f9ba.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo23;
	if (obj.complete) {
		var TargetLink = $("button:contains('Wii U')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

setInterval(function () {
	var Nintendo24 = ('https://quizdiva.net/asserts/admin/questionimages/1548193174-5c478d96b41db.jpg');
	var $ = window.jQuery;
	var obj = new Image();
	obj.src = Nintendo24;
	if (obj.complete) {
		var TargetLink = $("button:contains('Super Mario Galaxy')")
		if (TargetLink.length) {
			TargetLink.click ();
		}
	}
}, 10000);

//Quiz Checker
function checker(userid, siteid) {
	var $ = window.jQuery;
	if(location.origin === 'https://quizdiva.net' && location.pathname === '/movies/name-this-disney-movie/questions'){
		var TargetLink = $("h2:contains('You Scored 100%!')")
		if (TargetLink.length) {
			window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/327650?";
		}
		window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/326261?";
	}
	if(location.origin === 'https://quizdiva.net' && location.pathname === '/games/name-this-disney-movie/questions'){
		var TargetLink = $("h2:contains('You Scored 100%!')")
		if (TargetLink.length) {
			window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/327650?";
		}
		window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/326261?";
	}
	if(location.origin === 'https://quizdiva.net' && location.pathname === '/movies/avengers:-infinity-war/questions'){
		var TargetLink = $("h2:contains('You Scored 100%!')")
		if (TargetLink.length) {
			window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/330459?";
		}
		window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/327650?";
	}
	if(location.origin === 'https://quizdiva.net' && location.pathname === '/games/the-ultimate-fortnite-quiz/questions'){
		var TargetLink = $("h2:contains('You Scored 100%!')")
		if (TargetLink.length) {
			window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/332982?";
		}
		window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/330459?";
	}
	if(location.origin === 'https://quizdiva.net' && location.pathname === '/games/nintendo-quiz/questions'){
		var TargetLink = $("h2:contains('You Scored 100%!')")
		if (TargetLink.length) {
			window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/332883?";
		}
		window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/332982?";
	}
	if(location.origin === 'https://quizdiva.net' && location.pathname === '/culture/2018-year-ender-quiz/questions'){
		var TargetLink = $("h2:contains('You Scored 100%!')")
		if (TargetLink.length) {
			window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/331293?";
		}
		window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/332883?";
	}
	if(location.origin === 'https://quizdiva.net' && location.pathname === '/culture/spelling-challenge/questions'){
		var TargetLink = $("h2:contains('You Scored 100%!')")
		if (TargetLink.length) {
			window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/326862?";
		}
		window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/331293?";
	}
	if(location.origin === 'https://quizdiva.net' && location.pathname === '/culture/reality-tv-shows/questions'){
		var TargetLink = $("h2:contains('You Scored 100%!')")
		if (TargetLink.length) {
			window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/332920?";
		}
		window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/326862?";
	}
	if(location.origin === 'https://quizdiva.net' && location.pathname === '/culture/nba-facts/questions'){
		var TargetLink = $("h2:contains('You Scored 100%!')")
		if (TargetLink.length) {
			window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/331201?";
		}
		window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/332920?";
	}
	if(location.origin === 'https://quizdiva.net' && location.pathname === '/games/ultimate-minecraft-quiz/questions'){
		var TargetLink = $("h2:contains('You Scored 100%!')")
		if (TargetLink.length) {
			window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/332919?";
		}
		window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/331201?";
	}
	if(location.origin === 'https://quizdiva.net' && location.pathname === '/games/league-of-legends-quiz/questions'){
		var TargetLink = $("h2:contains('You Scored 100%!')")
		if (TargetLink.length) {
			window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/332118?";
		}
		window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/332919?";
	}
	if(location.origin === 'https://quizdiva.net' && location.pathname === '/culture/ultimate-logo-quiz/questions'){
		var TargetLink = $("h2:contains('You Scored 100%!')")
		if (TargetLink.length) {
			window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/332118?";
		}
		window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/332118?";
	}
	if(location.origin === 'https://quizdiva.net' && location.pathname === "/games/who's-that-pokémon"){
		var TargetLink = $("h2:contains('You Scored 100%!')")
		if (TargetLink.length) {
			window.location.href = "https://google.com";
		}
		window.location.href = "https://agm.mobi/vc/" + siteid + "/users/" + userid + "/offers/332118?";
	}
}
