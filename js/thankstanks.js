$(document).ready( function(){

	$('.header').html( '<a href="/"><img src="images/thankstanks-title.png" /></a>' );

	showSwf();

	$('#promo-nav-prev').click(function(e){
		e.preventDefault();
		promoIndex--;
		if (promoIndex<=-1) promoIndex=3;

		scrollPromo();
	});
	$('#promo-nav-next').click(function(e){
		e.preventDefault();
		promoIndex++;
		if (promoIndex>=4) promoIndex=0;

		scrollPromo();
	});

} );

var promoIndex = 0;
function scrollPromo(){
	$('#promo-holder').animate( {'left': -promoIndex*600+'px'}, 'fast' );
}

function showSwf() {
	$("#tanks-game").html('');
	$("#tanks-game").flash({
		src: 'thanks-tanks.swf',
		width: 600,
		height: 350 },
		{ version: 10 }
	);

}
