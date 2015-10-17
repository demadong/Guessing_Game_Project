var num = 0, counter = 0, inNum = 0;
var inNums = [];
var generateNumber = function() {
	num = Math.floor((Math.random()*100) + 1);
};

var initialize = function() {
	generateNumber();
	counter = 5;
	$("#counter").text(counter);
}

$(document).ready(function() {
	initialize();
	$('#reset-game').on('click', function() {
		initialize();
	});

	$("#submit-button").on("click", function() {
		inNum = +$("input").val();
		if (inNum == num) {
			$("#win").removeClass("hidden");
			$(".game").addClass("hidden");
			$("#win").on("click", "a", function() {
				$("#win").addClass("hidden");
				$(".game").removeClass("hidden");
			});
		};
		if (inNum > 0 && inNum < 101) {
			inNums.push(inNum);
			counter--;
			$("#counter").text(counter);
			$("input").val("");
		} else {
			alert("You can only input numbers between 1 and 100! Try again.");
		};
		if (counter < 1) {
			$("#lose").removeClass("hidden");
			$(".game").addClass("hidden");
			$("#lose").on("click", "a", function() {
				$("#lose").addClass("hidden");
				$(".game").removeClass("hidden");
			});
		}
	});

	$("#progressLink").on("click", function(event) {
		event.preventDefault();
		$(this).closest("div").find("#progress").slideToggle();
	})
});
