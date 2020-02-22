$(document).ready(function(){
		
/* PORTFOLIO AND TEMPLATES */
	
	function bulletOn(section,number){
		var bulletId = "#" + section + "-bullet-" + number;
		$(bulletId).attr("class", "icon-circle");
	};
	function bulletOff(section,number){
		var bulletId = "#" + section + "-bullet-" + number;
		$(bulletId).attr("class", "icon-circle-empty");
	};
	
	function buttons(section, nrActive){
		var selector = {
			left : "#" + section + "_button_left",
			right : "#" + section + "_button_right"
		};
		if(nrActive == 1){
			$(selector.left).css("visibility", "hidden");
			$(selector.right).css("visibility", "visible");
		}/*else if(pActive == 2){
			$("#portfolio_button_left").css("visibility", "visible");
			$("#portfolio_button_right").css("visibility", "visible");
		}*/else if(nrActive == 2){
			$(selector.left).css("visibility", "visible");
			$(selector.right).css("visibility", "hidden");
		};
	};
	
	function goForward(section, nrActive){
		var active = nrActive;
		$("#" + section + "_" + active).css("display", "none");
		active++;
		bulletOn(section,active);
		$("#" + section + "_" + active).css("display", "block");
		$("#" + section + "_gallery").animate({opacity: "1"}, 500);
		buttons(section, active);
		
		if(section == "portfolio"){
			pActive = active;
		}else if(section == "templates"){
			tActive = active;
		};
	};
	
	function goBack(section, nrActive){
		var active = nrActive;
		$("#" + section + "_" + active).css("display", "none");
		active--;
		bulletOn(section,active);
		$("#" + section + "_" + active).css("display", "block");
		$("#" + section + "_gallery").animate({opacity: "1"}, 500);
		buttons(section, active);
		
		if(section == "portfolio"){
			pActive = active;
		}else if(section == "templates"){
			tActive = active;
		};
	};
	
	//portfolio
	
	var pActive = 1;
	
	bulletOn("portfolio",pActive);
	buttons("portfolio", pActive);
	
	$("#portfolio_button_right").click(function(){
		if(pActive < 2){
			bulletOff("portfolio",pActive);
			$("#portfolio_gallery").animate({opacity: "0"}, 500);
			
			function pForward(){ goForward("portfolio", pActive)};
			setTimeout(pForward, 500);
		};
	});
	
	$("#portfolio_button_left").click(function(){
		if(pActive > 1){
			bulletOff("portfolio",pActive);
			$("#portfolio_gallery").animate({opacity: "0"},500);
			
			function pBack(){ goBack("portfolio", pActive)};
			setTimeout(pBack, 500);
		};
	});
	
	
	
	//templates
	
	var tActive = 1;
	
	bulletOn("templates",tActive);
	buttons("templates", tActive);
	
	$("#templates_button_right").click(function(){
		if(tActive < 2){
			bulletOff("templates",tActive);
			$("#templates_gallery").animate({opacity: "0"}, 500);
			function tForward(){ goForward("templates", tActive)};
			setTimeout(tForward, 500);
		};
	});
	
	$("#templates_button_left").click(function(){
		if(tActive > 1){
			bulletOff("templates",tActive);
			$("#templates_gallery").animate({opacity: "0"}, 500);
			function tBack(){ goBack("templates", tActive)};
			setTimeout(tBack, 500);
		};
	});
	
	var myBirthday = getDate(today);

});


/* SCROLL ANIMATION */

// Animacja górnego menu oraz animacje po przewinięciu 

var lastId,
    topMenu = $("#ul_navigation"),
    topMenuHeight = topMenu.outerHeight()+15,
    // Wszystkie elementy listy
    menuItems = topMenu.find("a"),
    // Kotwice do pozycji menu
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Animacje po kliknięciu w pozycję menu
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 1000);
  e.preventDefault();
});

// Po przewinięciu
$(window).scroll(function(){
   // Pobierz pozycje kontenera 
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Pobierz identyfikator aktualnej pozycji przewinięcia
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Pobierz identyfikator aktualnego elementu
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Ustaw lub usun "active" - odpowiada za podświetlenie pozycji w menu
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});