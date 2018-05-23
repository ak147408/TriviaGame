//click events start and done
var panel = $("#play-area");


$(document).on("click", "#start", function(event){
  game.start();
});

$(document).on("click", "#done", function(event){
  game.done();
});
//figure out how make one question work and the rest is simple copy and paste
var questions = [{
	question: "Who is the Cavs all time leading scorer?",
	choices: ["LeBron James", "Kyrie Irving", "Kevin Love", "Delonte West"],
	correctAnswer: "LeBron James"

}, {	

	question: "Which Cavalier made 'The Shot' in game 7 of the 2016 NBA Finals?",
	choices: ["LeBron James", "Kyrie Irving", "Kevin Love", "Mo Williams"],
	correctAnswer: "Kyrie Irving"

}, {

	question: "What player on the Golden State Warriors did LeBron James have his infamous block in game 7 of the 2016 NBA Finals",
	choices: ["Steph Curry", "Andre Iguodala", "Draymond Green", "Klay Thompson"],
	correctAnswer: "Andre Iguodala"

}, {

	question: "What year was LeBron James drafted by the Cavs?",
	choices: ["2004", "2006", "2002", "2003"],
	correctAnswer: "2003"

}, {

	question: "Which player NEVER played for the cavs?",
	choices: ["Shaq", "Dwayne Wade", "Larry Hughes", "Kevin Durant"],
	correctAnswer: "Kevin Durant"

}, {

	question: "Who was the first cavalier to have their jersey number retired?",
	choices: ["Zydrunas Ilgauskas", "Nate Thurmond", "Bingo Smith", "Austin Carr"],
	correctAnswer: "Nate Thurmond"

}
];
//counter starts at 60, start variables at 0
var game = {
	correct: 0,
	incorrect: 0,
	counter: 60,

  countdown: function() {
  	game.counter--;
  	$("#counter-number").html(game.counter);

  	if (game.counter === 0) {
  		alert("TIME'S UP");
  		game.done();

  	}
  },

  start: function() {
  	timer = setInterval(game.countdown, 1000);
  	$('#subcontainer').prepend('<h2>Time Remaining: <span id="counter-number">60</span> Seconds</h2>');
  	$("#start").remove();

  	for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].choices.length; j++){
        panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].choices[j] + '">' + questions[i].choices[j]);
        }
  		}
  		panel.append("<button id='done'>DONE</button>");
      
  	},

  	done: function() {
//figure out how to log right or wrong once and then copy and paste for rest of questions. 
  		$.each($("input[name='question-0']:checked"), function() {
  			if ($(this).val() == questions[0].correctAnswer) {
  				console.log(this);
  				  game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-1']:checked"), function() {
  			if ($(this).val() == questions[1].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-2']:checked"), function() {
  			if ($(this).val() == questions[2].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-3']:checked"), function() {
  			if ($(this).val() == questions[3].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-4']:checked"), function() {
  			if ($(this).val() == questions[4].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

          });
          
          $.each($("input[name='question-5']:checked"), function() {
            if ($(this).val() == questions[5].correctAnswer) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }

        });

  		this.results();
  	},


  	  results:function() {
  	  	clearInterval(timer);
//results section
  	  	$("#subcontainer h2").remove();
  	   panel.html("<h1>You're Done!</h1>");
  	   panel.append("<h2>Correct: " + this.correct + "</h2>");
  	   panel.append("<h2>Incorrect: " + this.incorrect + "</h2>");
  	   panel.append("<h2>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h2>");
  	  
  	  }

  };