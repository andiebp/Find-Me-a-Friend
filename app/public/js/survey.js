$(function () {
	$('#submit').on('click', function () {
		//grab answer from each question

		//Create an array of score integers from q1-q10
		var scores = [];
		for (var i = 1; i < 11; i++) {
			var qValue = $('#q' + i).val();
			scores.push(qValue);
		}

		var newUser = {
			name: $('#name').val().trim(),
			photo: $('#photo').val().trim(),
			scores: scores
		};

		//push answer into json object
		$.post('/api/friends', newUser, function (response) {
			console.log("hello.", response);
		});
	});
});
