

$(document).ready(function(){



	$('body').vegas({
    slides: [
        { src: "files/img/1_1.png" },
        { src: "files/img/1_2.png" },
        { src: "files/img/1_3.png" },
        { src: "files/img/1_4.png" }
    ],
    overlay: 'files/overlay/06.png',
    transition: 'slideLeft',
    timer: false,
    delay: 7000,
	});


	callbackwidth();

	new WOW().init();


	$(window).on('resize',callbackwidth);


	$(function() {
	    $('.nav a').on('click', function(){ 
	        if($('.navbar-toggle').css('display') !='none'){
	            $(".navbar-toggle").trigger( "click" );
	        }
	    });
	});
    
	$('a[href*=#top]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: (target.offset().top-40)
	            }, 1000);
	            return false;
	        }
	    }
	});
	$('a[href*=#about]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: (target.offset().top-40)
	            }, 1000);
	            return false;
	        }
	    }
	});
	$('a[href*=#activities]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: (target.offset().top-40)
	            }, 1000);
	            return false;
	        }
	    }
	});
	$('a[href*=#team]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: (target.offset().top-40)
	            }, 1000);
	            return false;
	        }
	    }
	});
	$('a[href*=#member]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: (target.offset().top-40)
	            }, 1000);
	            return false;
	        }
	    }
	});
	$('a[href*=#food]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: (target.offset().top-40)
	            }, 1000);
	            return false;
	        }
	    }
	});
	$('a[href*=#contact]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: (target.offset().top-40)
	            }, 1000);
	            return false;
	        }
	    }
	});

	function callbackwidth() {

		// nav stuff

		if ($(window).width() > 1000){
	        fadenumber = 800;
	    }
	    else if ($(window).width() > 800){
	       fadenumber = 400;
	    }
	    else {
	        fadenumber = 220;
	    }

	    // font stuff


	}

	changeOpacityRate();

	$(document).on('scroll', changeOpacityRate);


	function changeOpacityRate() {

		var logo_hide = 1-($(document).scrollTop() /(0.5*fadenumber));

	    $('.navbar').css('opacity', ($(document).scrollTop() / fadenumber));
	    $('.logo')  .css('opacity', (logo_hide));

	    if (logo_hide < 0) {
	    	$('.logo').hide();
	    };
	    if (logo_hide > 0) {
	    	$('.logo').show();
	    };



	};

// TOP LAYER


	$('#social').on('mouseenter', function(){
		$('.act_options')
		.css('opacity','1')
		.html(
			'<button class="act" id="babes">Jue Babes</button>' + 
			'<button class="act" id="parties">Parties</button>');

		$('#babes').on('click', function(){
			$('.act_des')
			.html(
				'<p style="text-align: left"> On Thursdays, from 7pm-9pm SLASA meets at Carlos ' +
				'and Pepe’s to unwind and have a good time! Come and meet ' +
				'other people from Spain and Latin America as well as other ' + 
				'nationalities… <br><br><strong>Everyone is invited!</strong> It’s also a good chance ' + 
				'to practice your Spanish while making new friends.</p>');

		});
		$('#parties').on('click', function(){
			$('.act_des')
			.html(
				'<p style="text-align: left"> SLASA throws at least one party every semester! ' +
				'In the past we have thrown parties in prestigious night clubs ' +
				'such as La Mouche or top floor lofts. Like ' + 
				'us on <a href="https://www.facebook.com/SLASA.Mcgill?fref=ts&ref=br_tf">Facebook</a> to get the latest updates!</p>');

		});
		

	});

	$('#academic').on('mouseenter', function(){
		$('.act_options')
		.css('opacity','1')
		.html(
			'<button class="act" id="networking">Networking Cocktail</button>');
		$('#networking').on('click', function(){
			$('.act_des')
			.html(
				'<p style="text-align: left"> For three consecutive years we have partnered with the ' +
				'Latin American Chamber of Commerce of Quebec. ' +
				'This event is a great opportunity to network with business people and ' + 
				'perhaps find your next internship! SLASA is always a welcomed ' +
				'guest at CCLAQ’s events so don’t miss out to get involved! ' +
				'Our speakers and guests come from Bombardier, KPMG LLP, ' +
				'Scotiabank, BMO, and many more.</p>');

		});

	});

	$('#summit').on('mouseenter', function(){
		$('.act_options')
		.css('opacity','1')
		.html(
			'<button class="act" id="slasummit">SLASummit</button>');
		$('#slasummit').on('click', function(){
			$('.act_des')
			.html(
				'<p style="text-align: left"> Our biggest and most important event. SLASummit is a 4 day conference ' +
				'and case competition aimed to foster sustainable development ' +
				'in Latin American Communities. With participants from across Montreal, ' + 
				'Canada and the US, last year we crowdfunded $5,000 and obtained 100,000 mile ' +
				'sponsorship to fly the three students of the winning team to Ecuador to ' +
				'implement the project. <br><br>Learn more at <a href="www.slasummit.com">www.slasummit.com</a>, ' +
				'like us on <a href="https://www.facebook.com/SLASA.Mcgill?fref=ts&ref=br_tf">facebook</a> and stay tuned for when registration opens!</p>');

		});
	});

	$('#dev').on('mouseenter', function(){
		$('.act_options')
		.css('opacity','1')
		.html(
			'<button class="act" id="oaxaca">Oaxaca Biciclub</button>');
		$('#oaxaca').on('click', function(){
			$('.act_des')
			.html(
				'<p style="text-align: left"> Kids in the rural and indigenous community of ' +
				'Santo Tomás de Ocotepec in the Mexican state of Oaxaca ' +
				'often have to travel about two hours by foot to reach their school. <br><br> ' + 
				'With the money that has been raised by SLASA over the course ' +
				'of two years, we  donated 15 bicycles, tools to fix them in case ' +
				'they break and started a bike club in a local high school so the ' +
				'children can get to school faster and thus improve their access ' +
				'to education. This student-lead project was started by our very own ' +
				'VP Fundraising, Jean-Yves Taranger, who saw the project through start to finish.</p>');
		});
	});

	$('.activities').on('mouseleave', function() {
		$('.act_des').html('<p style="text-align: center">Hover on the buttons to learn more!</p>');
		$('.act_options').css('opacity','0');
	});


	$('.img')
	.on('mouseover', function() {
		$(this).children('.img_des')
			.css({'transform':'translateY(-170px)','opacity':'0.9'})
	})
  	.on('mouseleave', function() {
    	$(this).children('.img_des')
    		.css({'transform':'translateY(0px)','opacity':'1'});
  	})




})
