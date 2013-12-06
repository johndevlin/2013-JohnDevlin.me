
// Open nav on mobile

$('.open-nav').click(function() {
	
	$('nav').toggleClass('show-me');
	
});


/* Load in some random guff for the home page title */
$.fn.randomise = function() {
	
	// Home title - Hello
	var hellos = new Array("Hello", "’Bout ye", "Hey", "Holla", "Bonjour", "Ciào"),
	randomHello = hellos[Math.floor( Math.random() * hellos.length )];
	
	$('.hello').text(randomHello);
	
	// Strike through .striked
	var strikes = new Array("type nerd", "sandwich", "fan of Bill Murray", "horrible golfer", "shit pixel", "llama", "responsive web app", "great bunch of lads", "null", "hidden Konami Code"),
	randomStrikes = strikes[Math.floor( Math.random() * strikes.length )];
	
	$('.striked').text(randomStrikes);
};

// Hide, then show text between randomising 
$.fn.fadeText = function() {
	
	// Hide titles
	$(this).css('opacity', '0');
	
	setTimeout(function() {
		
		// Change text
		$(this).randomise();
			
		setTimeout(function() {
			
			// Show titles
			// NB $this isn't working for
			// this needs looked into
			$('.hello').css('opacity', '1');
			$('.home .hgroup h2').css('opacity', '1');
		}, 150);

	}, 300);
	
};

$('.randomise').click(function() {
	
	$('.hello').fadeText();
	$('.home .hgroup h2').fadeText();
	
});


/* Spin reload icon */
var angle = -180;

$('p.randomise').click(function() {
	
	$('p.randomise span').css({
		'-webkit-transform': 'rotate(' + angle + 'deg)',
		   '-moz-transform': 'rotate(' + angle + 'deg)',
			 '-o-transform': 'rotate(' + angle + 'deg)',
			'-ms-transform': 'rotate(' + angle + 'deg)'
	});
	angle+=-180;
	
});


// Add current year to .current-year
var currentYear = (new Date).getFullYear();
$('.current-year').text(currentYear)


// Debounced Resize function
$(window).on("debouncedresize", function( event ) {
	// Guff
});


// Do X ESC 
$(document).keyup(function(e) {
	
	if (e.keyCode == 27) { 
		// Guff
	}
	
});


var Konami=function(e){var t={addEvent:function(e,t,n,r){if(e.addEventListener)e.addEventListener(t,n,false);else if(e.attachEvent){e["e"+t+n]=n;e[t+n]=function(){e["e"+t+n](window.event,r)};e.attachEvent("on"+t,e[t+n])}},input:"",pattern:"38384040373937396665",load:function(e){this.addEvent(document,"keydown",function(n,r){if(r)t=r;t.input+=n?n.keyCode:event.keyCode;if(t.input.length>t.pattern.length)t.input=t.input.substr(t.input.length-t.pattern.length);if(t.input==t.pattern){t.code(e);t.input="";n.preventDefault();return false}},this);this.iphone.load(e)},code:function(e){window.location=e},iphone:{start_x:0,start_y:0,stop_x:0,stop_y:0,tap:false,capture:false,orig_keys:"",keys:["UP","UP","DOWN","DOWN","LEFT","RIGHT","LEFT","RIGHT","TAP","TAP"],code:function(e){t.code(e)},load:function(e){this.orig_keys=this.keys;t.addEvent(document,"touchmove",function(e){if(e.touches.length==1&&t.iphone.capture==true){var n=e.touches[0];t.iphone.stop_x=n.pageX;t.iphone.stop_y=n.pageY;t.iphone.tap=false;t.iphone.capture=false;t.iphone.check_direction()}});t.addEvent(document,"touchend",function(n){if(t.iphone.tap==true)t.iphone.check_direction(e)},false);t.addEvent(document,"touchstart",function(e){t.iphone.start_x=e.changedTouches[0].pageX;t.iphone.start_y=e.changedTouches[0].pageY;t.iphone.tap=true;t.iphone.capture=true})},check_direction:function(e){x_magnitude=Math.abs(this.start_x-this.stop_x);y_magnitude=Math.abs(this.start_y-this.stop_y);x=this.start_x-this.stop_x<0?"RIGHT":"LEFT";y=this.start_y-this.stop_y<0?"DOWN":"UP";result=x_magnitude>y_magnitude?x:y;result=this.tap==true?"TAP":result;if(result==this.keys[0])this.keys=this.keys.slice(1,this.keys.length);if(this.keys.length==0){this.keys=this.orig_keys;this.code(e)}}}};typeof e==="string"&&t.load(e);if(typeof e==="function"){t.code=e;t.load()}return t}


var konami = new Konami(function() { 
	
	$('html').css('background', 'url("/img/cagey.png") repeat');
	
	$('.home .hgroup h2').empty().append("I'm Nick Cage");
	
	setTimeout(function() {
		
		$('html').css('background', '#33cc77');
		
	}, 5000);
	
});
