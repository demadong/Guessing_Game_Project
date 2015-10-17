var num = 0, counter = 0, inNum = 0;
var inNums = [];
var generateNumber = function() {
	num = Math.floor((Math.random()*100) + 1);
};

var initialize = function() {
	generateNumber();
	counter = 5;
	inNums = [];
	$("#counter").text(counter);
	$(".list-group-item").addClass("hidden");
};

var submitAction = function() {
	inNum = +$("input").val();
	if (inNum == num) {
		$("#win").removeClass("hidden");
		$(".game").addClass("hidden");
		$("#win").on("click", "a", function() {
			$("#win").addClass("hidden");
			$(".game").removeClass("hidden");
			initialize();
		});
	};
	if (Number.isInteger(inNum) == false) {
		alert("You must input an integer between 1 - 100.");
	} else if (inNums.indexOf(inNum) != -1) {
		alert("You've already tried this!");
	} else if (inNum > 0 && inNum < 101) {
		inNums.push(inNum);
		counter--;
		$("#counter").text(counter);
		$("input").val("");
		for (var i = 0; i < (6-counter); i++) {
			$("#"+(i)).text(inNums[i-1]);
			if (num > inNums[i]) {
				$(".downOrUp"+(i+1)).text("up")
			} else {
				$(".downOrUp"+(i+1)).text("down")
			};
			if (Math.abs(inNums[i] - num) < Math.abs(inNums[i-1] - num)) {
				$(".hotOrCold"+(i+1)).text("hotter");
			} else {
				$(".hotOrCold"+(i+1)).text("colder");
			}
			$("#"+(i)).closest("li").removeClass("hidden");
		}
	} else {
		alert("You can only input numbers between 1 and 100! Try again.");
		$("input").val("");
	};
	if (counter < 1 && inNum != num) {
		$("#lose").removeClass("hidden");
		$(".game").addClass("hidden");
		$("#lose").on("click", "a", function() {
			$("#lose").addClass("hidden");
			$(".game").removeClass("hidden");
			initialize();
		});
	};
};

$(document).ready(function() {
	initialize();
	$('#reset-game').on('click', function() {
		initialize();
	});

	$("#hint").on("click", function() {
		alert("The number is " + num);
	});

	$("#submit-button").on("click", submitAction);
	$("input").keydown(function(e) {
		if (e.keyCode == 13) {
			submitAction();
		};
	});

	$("#progressLink").on("click", function(event) {
		event.preventDefault();
		$(this).closest("div").find("#progress").slideToggle();
	})
});
