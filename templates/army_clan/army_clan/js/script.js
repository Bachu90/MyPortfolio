// JavaScript Document

$(document).ready(function(){
	
	/* MENU */
		
		/* MAIN */
		
		$("#menu_main").hover(function(){
			$("#menu_main div").css("background-color","#f5fcd0");
			$("#menu_main a").css("color","#f5fcd0");
		},
		function(){
			$("#menu_main div").css("background-color","#778691");
			$("#menu_main a").css("color","#778691");
		});
		
		/* ABOUT */
		
		$("#menu_about").hover(function(){
			$("#menu_about div").css("background-color","#f5fcd0");
			$("#menu_about a").css("color","#f5fcd0");
		},
		function(){
			$("#menu_about div").css("background-color","#778691");
			$("#menu_about a").css("color","#778691");
		});
		
		/* SOLDIERS */
		
		$("#menu_soldiers").hover(function(){
			$("#menu_soldiers div").css("background-color","#f5fcd0");
			$("#menu_soldiers a").css("color","#f5fcd0");
		},
		function(){
			$("#menu_soldiers div").css("background-color","#778691");
			$("#menu_soldiers a").css("color","#778691");
		});
		
		/* CONTACT */
		
		$("#menu_contact").hover(function(){
			$("#menu_contact div").css("background-color","#f5fcd0");
			$("#menu_contact a").css("color","#f5fcd0");
		},
		function(){
			$("#menu_contact div").css("background-color","#778691");
			$("#menu_contact a").css("color","#778691");
		});
		
	/*SCORES BOX*/
		
	$("#box_scores").hover(function(){
		$("#box_scores img").attr("src","img/scores_box_on.png");
	},
	function(){
			$("#box_scores img").attr("src","img/scores_box_off.png");
	});
	
	/* EVENTS BOX */
	
	$("#box_events").hover(function(){
		$("#box_events img").attr("src","img/events_box_on.png");
	},
	function(){
		$("#box_events img").attr("src","img/events_box_off.png");
	});
	
	/* MOVIES BOX */
	
	$("#box_movies").hover(function(){
		$("#box_movies img").attr("src","img/movies_box_on.png");
	},
	function(){
		$("#box_movies img").attr("src","img/movies_box_off.png");
	});
});	