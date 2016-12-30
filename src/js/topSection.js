$(document).ready(function($) {
	$('.topSection').visibility({
		onBottomPassed: function(bottomPassed){
			$('.overlay').visibility({
				type   : 'fixed',
		    offset : 15 // give some space from top of screen
		})},
		onTopPassedReverse: function(bottomPassed){
			$('.overlay').visibility({
				type   : false,
		    offset : 0 // give some space from top of screen
		})}
	})
});