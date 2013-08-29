/* use $ls -lT | awk '{print "\""$10"\""";"}' to list all files in directory */



var collages = [
		"co_0001.jpg",
		"co_0012.jpg",
		"co_0023.jpg",
		"co_0034.jpg",
		"co_0045.jpg",
		"co_0056.jpg",
		"co_0067.jpg",
		"co_0078.jpg",
		"co_0089.jpg",
		"co_009away_with_us(smaller).jpg",
		"co_010brad_hamers_-_post_no_dreams_possible_cover_-_slightly_diff.jpg",
		"co_011brad_hamers_-_violent_fellatio_(2).jpg",
		"co_012brad_hamers-all_the_water_at_the_dam-big200.jpg",
		"co_013brad_hamers-big200-2.jpg",
		"co_014brad_hamers-last_place_i_exploded-big200.jpg",
		"co_015brad_hamers-test_bomb-big200.jpg",
		"co_016brad_hamers-until_it_looks_down-big200.jpg",
		"co_017brad_hamers-answers_answers-big200.jpg",
		"co_018brad_hamers-big200-1.jpg",
		"co_019brad_hamers-big200-3.jpg",
		"co_020brad_xhamers-dirty_white_flag-big200.jpg",
		"co_021brad1.jpg",
		"co_022brad2.jpg",
		"co_023brand_name_banana.jpg",
		"co_024broke_past_not_working.jpg",
		"co_025brought-up.jpg",
		"co_026buffalo_gun.jpg",
		"co_027Cooler_than_cucumbers_cover.jpg",
		"co_028countryside.jpg",
		"co_029cripplespeak_-_high_quality.jpg",
		"co_030dear_mornings.jpg",
		"co_031DOS_-_OFFICIAL_POSTER_2.jpg",
		"co_032dumbed_down_pupil.jpg",
		"co_033exit_wound.jpg",
		"co_034eye_like_dirty_water_rapids.JPG",
		"co_035feral_art_1.jpg",
		"co_036free_range_milk.jpg",
		"co_037from_throat_or_mouth.jpg",
		"co_038ful_color_reception.jpg",
		"co_039getting_over.jpg",
		"co_040god_is_dead_-_high_quality.jpg",
		"co_041gun_show_(semi-automatic_swamp).jpg",
		"co_042gunasaur.jpg",
		"co_043if_the_day_propelled_she_was_his_gunpowder_(drew_n_martha.jpg",
		"co_044impermanence.jpg",
		"co_045jennifergriffo-big200-1.jpg",
		"co_046jennifergriffo-big200-2.jpg",
		"co_047jennifergriffo-lizardBig200.jpg",
		"co_048look_up.jpg",
		"co_049mind_your_head.jpg",
		"co_050no_one_dies_in_real_life_(1_half).jpg",
		"co_051no_one_dies_in_real_life_(detail_2).jpg",
		"co_052no_one_dies_in_real_life_(photo_of).JPG",
		"co_053no_sky_to_duck_under.jpg",
		"co_054oil_slick_heart_skidding_over_the_inside_lane.jpg",
		"co_055overgive..jpg",
		"co_056paroxysm.jpg",
		"co_057people_don't_sing_because_they're_happy_-_high_quality.jpg",
		"co_058pianos_and_moving_straps_copy.jpg",
		"co_059safety_in_numbers.jpg",
		"co_060self_cleaning_oven.jpg",
		"co_061sexual_nature-for_jenniffirtree-bottom(most).jpg",
		"co_062she_open_widest_at_the_windows.jpg",
		"co_063shell_in_my_egg_my_in_my_wonderment_(photo_of).JPG",
		"co_064sinking_from_the_top.jpg",
		"co_065sky_diving.jpg",
		"co_066so_long_(smaller).jpg",
		"co_067swan_song.jpg",
		"co_068terra_nulius(smaller).jpg",
		"co_069two_ton_slut_art_collabo.jpg",
		"co_070u_were_murdered_as_a_kid_(promo).jpg",
		"co_071unchecked_luggage.jpg",
		"co_072violent_fellatio.jpg",
		"co_073we_only_are_what_we_are_doing.jpg",
		"co_074werebeingfolowed.jpg",
		"co_075why_try.jpg",
		"co_076wild_west.jpg",
		"co_077without_hitting_the_black_hole.jpg",
		"co_078yes-sir-ri's.jpg",
		"co_079you'll_shoot_yer_eye_out_(the_camera_told_me_there'd_be_days_like_this)_-_high_quality.jpg"
]

var p_and_p = [
		"pp_000.jpg",
		"pp_001.jpg",
		"pp_002.jpg",
		"pp_003.jpg",
		"pp_004.jpg",
		"pp_005.jpg",
		"pp_006.jpg",
		"pp_007black_dress.jpg",
		"pp_008elephantitus.jpg",
		"pp_009emily_-_beards.jpg",
		"pp_010emily_-_deadwood.jpg",
		"pp_011emily_-_howdy_sailor.jpg",
		"pp_012emily_-_may_i_take__your_coat.jpg",
		"pp_013emily_-_pop_goes_the_weasel.jpg",
		"pp_014emily_-_put_a_bird_on_it.jpg",
		"pp_015emily_-_reinaissance.jpg",
		"pp_016emily_-_seesaw_sisters.jpg",
		"pp_017emily_-_transients.jpg",
		"pp_018Emily1.jpg",
		"pp_019Emily2.jpg",
		"pp_020Emily3.jpg",
		"pp_021emily4.jpg",
		"pp_022emily5.jpg",
		"pp_023emily6.jpg",
		"pp_024emily7.jpg",
		"pp_025emily8.jpg",
		"pp_026emily9.jpg",
		"pp_027emily10.jpg",
		"pp_028faucet.jpg",
		"pp_029flourescence.jpg",
		"pp_030ghost_dancer.jpg",
		"pp_031greendress.jpg",
		"pp_032haute_creature.jpg",
		"pp_033if_i_had_a_dollar....jpg",
		"pp_034Image3.jpg",
		"pp_035jelly.jpg",
		"pp_036jennifer_-_reagan.jpg",
		"pp_037jennifer_griffo_-_breathe.jpg",
		"pp_038jennifer_griffo_-_cliff_notes_(oil).JPG",
		"pp_039jennifer_griffo_-_fertile_crescent.jpg",
		"pp_040jennifer_griffo_-_food_colored_milk.jpg",
		"pp_041jennifer_griffo_-_growth_spurt.jpg",
		"pp_042jennifer_griffo_-_gun_frost.jpg",
		"pp_043jennifer_griffo_-_gutted.jpg",
		"pp_044jennifer_griffo_-_i_can_cry_if_i_want_to.jpg",
		"pp_045jennifer_griffo_-_one_night_stands.JPG",
		"pp_046jennifer_griffo_-_permanent_numbness_(oil).JPG",
		"pp_047jennifer_griffo_-_pussy_willow.jpg",
		"pp_048jennifer_griffo_-_silicone.jpg",
		"pp_049jennifer_griffo_-_spork_in_the_road.jpg",
		"pp_050jennifer_griffo_-_stay_born.jpg",
		"pp_051jennifer_griffo_-_think_straight.jpg",
		"pp_052jennifer_griffo_-_three_layers_of_raincoat.jpg",
		"pp_053jennifer_griffo_-_under_the_watch..2nd_guessing_my_hand.jpg",
		"pp_054jennifer_griffo_-_we_come_in_piece.jpg",
		"pp_055jennifer_griffo_-_where_the_thousandth_X_on_a_map_actually_starts_kissing.JPG",
		"pp_056jennifergriffo_-_kaufmanBig200.jpg",
		"pp_057jennifergriffo-big200-1.jpg",
		"pp_058jennifergriffo-big200-2.jpg",
		"pp_059jennifergriffo-lizardBig200.jpg",
		"pp_060modish_fig.jpg",
		"pp_061moon_number_28.jpg",
		"pp_062moth.jpg",
		"pp_063new_song_image.jpg",
		"pp_064newpolice-art.jpg",
		"pp_065pinkdress.jpg",
		"pp_066pornucopia.jpg",
		"pp_067raw_materials.jpg",
		"pp_068sense_of_touch.jpg",
		"pp_069stuck.jpg",
		"pp_070twisted.jpg",
		"pp_071whoworries.jpg"
]

var misc = [
		"misc_000(official)Frietboerism2_cover_art.jpg",
		"misc_001BIG-PAUPER.gif",
		"misc_002Cover_Front_small.jpg",
		"misc_003Dust_On_Snow_-_you_were_murdered_as_a_kid_-COVER_(OFFICIAL).jpg",
		"misc_004Goodfoot.jpg",
		"misc_005Love_Letters_Haberman_Garber-555x353.jpg",
		"misc_006No_Chance_To_Shine_Cover.jpg",
		"misc_007The_Goodfoot.jpg",
		"misc_008big_pauper_videoinst1.jpg",
		"misc_009big_pauper_videoinst2.jpg",
		"misc_010big_pauper_videoinst3.jpg",
		"misc_011big_pauper_videoinst4.jpg",
		"misc_012bigpauper.jpg",
		"misc_013cops-final-final_market-large.jpg",
		"misc_014cover.jpg",
		"misc_015flashem.jpg",
		"misc_016iam-poster.jpg",
		"misc_017london_show_flier.jpg",
		"misc_018no_milk_no_sleep.jpg",
		"misc_019poboy-88-strong-use.jpg",
		"misc_020post__no_dreams_-_tv_watching_tv_-_with_text1.jpg",
		"misc_021post_no_dreams_-_official_1st_poster.jpg",
		"misc_022post_no_dreams_-_slaves_poster_-_withtext.jpg",
		"misc_023post_no_dreams.jpg",
		"misc_024pz_vfanishing_twin_small.jpg",
		"misc_025scorpio-poster.jpg",
		"misc_026single_art.jpg",
		"misc_027surreality_art_show_opening.jpg"	
]

function add_misc_art_links(array) {
		for(var i=0; i<array.length; i++) {

			var link=document.createElement("a");
			link.setAttribute('class', "fancybox-misc");
			link.setAttribute('href', "images/misc/" + array[i]);
			var img=document.createElement("img");
/*			img.setAttribute('src', "images/misc/" + array[i]); */
			img.setAttribute('src', "blank.gif");
			img.setAttribute('data-original', "images/misc/" + array[i]);
			img.setAttribute('class', "lazy");
			img.setAttribute('alt', array[i]);
			img.setAttribute('height', "160px");

			img.setAttribute('width', "200px");
			link.appendChild(img); 

			document.getElementById("child").appendChild(link); 
		}
}

function add_collages_art_links(array) {
                for(var i=0; i<array.length; i++) {

                        var link=document.createElement("a");
                        link.setAttribute('class', "fancybox-collage");
                        link.setAttribute('href', "images/collage/" + array[i]);
                        var img=document.createElement("img");
/*                      img.setAttribute('src', "images/collage/" + array[i]); */
                        img.setAttribute('src', "blank.gif");
			img.setAttribute('data-original', "images/collage/" + array[i]);
			img.setAttribute('class', "lazy");
			img.setAttribute('alt', array[i]);
                        img.setAttribute('height', "160px");

			img.setAttribute('width', "200px");
                        link.appendChild(img); 
                
                        document.getElementById("child").appendChild(link);
                }
}

function add_p_and_p_art_links(array) {
                for(var i=0; i<array.length; i++) {

                        var link=document.createElement("a");
                        link.setAttribute('class', "fancybox-p_and_p");
                        link.setAttribute('href', "images/paint_and_pencil/" + array[i]);
                        var img=document.createElement("img");
/*                      img.setAttribute('src', "images/paint_and_pencil/" + array[i]); */
                        img.setAttribute('src', "blank.gif");
                        img.setAttribute('data-original', "images/paint_and_pencil/" + array[i]); 
                        img.setAttribute('class', "lazy");
			img.setAttribute('alt', array[i]);
                        img.setAttribute('height', "160px");
                        
			img.setAttribute('width', "200px");
			link.appendChild(img);

                        document.getElementById("child").appendChild(link);
                }
}


add_p_and_p_art_links(p_and_p);
add_collages_art_links(collages);

add_misc_art_links(misc);
$('#child').shuffle(); 

$( "#collage" ).click(function() {
	$('.fancybox-p_and_p').fadeOut("slow");
	$('.fancybox-misc').fadeOut("slow");
	$('.fancybox-collage').fadeIn("slow");
	var y = $(window).scrollTop(); 
	$("html, body").animate({ scrollTop: y + 1 }, 600);
});

$( "#paint" ).click(function() {
        $('.fancybox-collage').fadeOut("slow");
	$('.fancybox-misc').fadeOut("slow");
	$('.fancybox-p_and_p').fadeIn("slow")
        var y = $(window).scrollTop();
        $("html, body").animate({ scrollTop: y + 1 }, 600);
});

$( "#misc" ).click(function() {
        $('.fancybox-p_and_p').fadeOut("slow");
	$('.fancybox-collage').fadeOut("slow");
	$('.fancybox-misc').fadeIn("slow");
        var y = $(window).scrollTop();
        $("html, body").animate({ scrollTop: y + 1 }, 600);
});

$( "#all" ).click(function() {
        $('.fancybox-p_and_p').fadeIn("slow");
        $('fancybox-collage').fadeIn("slow");
        $('fancybox-misc').fadeIn("slow");
        var y = $(window).scrollTop();
        $("html, body").animate({ scrollTop: y + 1 }, 600);
});

$( "#shuffle" ).click(function() {
	$('#child').shuffle();
});

