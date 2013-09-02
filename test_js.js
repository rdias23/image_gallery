/* use $ls -lT | awk '{print "\""$10"\""","}' to list all files in directory */
/* use Name Change http://namechanger.en.softonic.com/mac to change file names in directory with ease */


var collages = [
		{file: "co_0001.jpg", title: "Untitled", author: "Brad Hamers"},
		{file: "co_0012.jpg", title: "Untitled", author: "Brad Hamers"},
		{file: "co_0023.jpg", title: "Untitled", author: "Brad Hamers"},
		{file: "co_0034.jpg", title: "Untitled", author: "Brad Hamers"},
		{file: "co_0045.jpg", title: "Untitled", author: "Brad Hamers"},
                {file: "co_0056.jpg", title: "Untitled", author: "Brad Hamers"},
                {file: "co_0067.jpg", title: "Untitled", author: "Brad Hamers"},
                {file: "co_0078.jpg", title: "Untitled", author: "Brad Hamers"},
		{file: "co_0089.jpg", title: "Untitled", author: "Brad Hamers"},
                {file: "co_009away_with_us(smaller).jpg", title: "Away With Us", author: "Brad Hamers"},
                {file: "co_010brad_hamers_-_post_no_dreams_possible_cover_-_slightly_diff.jpg", title: "Post No Dreams (alternate) album cover", author: "Brad Hamers"},
                {file: "co_011brad_hamers_-_violent_fellatio_(2).jpg", title: "Violent Fallatio", author: "Brad Hamers"},
		{file: "co_012brad_hamers-all_the_water_at_the_dam-big200.jpg", title: "All the Water at the Dam", author: "Brad Hamers"},
                {file: "co_013brad_hamers-big200-2.jpg", title: "Untitled", author: "Brad Hamers"},
                {file: "co_014brad_hamers-last_place_i_exploded-big200.jpg", title: "The Last Place I Exploded", author: "Brad Hamers"},
                {file: "co_015brad_hamers-test_bomb-big200.jpg", title: "Test Bomb", author: "Brad Hamers"},
		{file: "co_016brad_hamers-until_it_looks_down-big200.jpg", title: "Until It Looks Down", author: "Brad Hamers"},
                {file: "co_017brad_hamers-answers_answers-big200.jpg", title: "Answers Answers", author:  "Brad Hamers"},
                {file: "co_018brad_hamers-big200-1.jpg", title: "Untitled", author:  "Brad Hamers"},
                {file: "co_019brad_hamers-big200-3.jpg", title: "Untitled", author:  "Brad Hamers"},
		{file: "co_020brad_xhamers-dirty_white_flag-big200.jpg", title: "Dirty White Flag", author:  "Brad Hamers"},
                {file: "co_021brad1.jpg", title: "Untitled", author:  "Brad Hamers"},
                {file: "co_022brad2.jpg", title: "Untitled", author:  "Brad Hamers"},
                {file: "co_023brand_name_banana.jpg", title: "Brand Name Banana", author:  "Brad Hamers"},
		{file: "co_024broke_past_not_working.jpg", title: "Broke Past Not Working", author:  "Brad Hamers"},
                {file: "co_025brought-up.jpg", title: "Brought Up", author: "Brad Hamers"},
                {file: "co_026buffalo_gun.jpg", title: "Buffalo Gun", author:  "Brad Hamers"},
                {file: "co_027Cooler_than_cucumbers_cover.jpg", title: "Cooler than Cucumbers cover", author: ""},
                {file: "co_028countryside.jpg", title: "Countryside", author:  "Brad Hamers"},
                {file: "co_029cripplespeak_-_high_quality.jpg", title: "Cripplespeak", author:  "Brad Hamers"},
                {file: "co_030dear_mornings.jpg", title: "Dear Mornings", author: "Brad Hamers"},
                {file: "co_031DOS_-_OFFICIAL_POSTER_2.jpg", title: "Dos - official cover", author: ""},
                {file: "co_032dumbed_down_pupil.jpg", title: "Dumbed Down Pupil", author: "Brad Hamers"},
                {file: "co_033exit_wound.jpg", title: "Exit Wound", author: "Brad Hamers"},
                {file: "co_034eye_like_dirty_water_rapids.JPG", title: "Eye Like Dirty Water Rapids", author: "Brad Hamers"},
                {file: "co_035feral_art_1.jpg", title: "Feral Art", author: "Brad Hamers"},
                {file: "co_036free_range_milk.jpg", title: "Free Range Milk", author: "Brad Hamers"},
                {file: "co_037from_throat_or_mouth.jpg", title: "From Throat or Mouth", author: "Brad Hamers"},
                {file: "co_038ful_color_reception.jpg", title: "Color Reception", author: "Brad Hamers"},
                {file: "co_039getting_over.jpg", title: "Getting Over", author: "Brad Hamers"},
                {file: "co_040god_is_dead_-_high_quality.jpg", title: "God is Dead", author: "Brad Hamers"},
                {file: "co_041gun_show_(semi-automatic_swamp).jpg", title: "Gun Show (semi-automatic swamp)", author: "Brad Hamers"},
                {file: "co_042gunasaur.jpg", title: "Gunasaur", author: "Brad Hamers"},
                {file: "co_043if_the_day_propelled_she_was_his_gunpowder_(drew_n_martha.jpg", title: "If The Day Propelled She Was His Gunpowder", author: "Big Pauper and Martha McIntyre"},    
                {file: "co_044impermanence.jpg", title: "Impermanence", author: "Brad Hamers"},
/*              {file: "co_045jennifergriffo-big200-1.jpg", title: "Untitled", author: "Jennifer Griffo"},*/
/*              {file: "co_046jennifergriffo-big200-2.jpg", title: "Untitled", author: "Jennifer Griffo"},*/
/*              {file: "co_047jennifergriffo-lizardBig200.jpg", title: "Untitled", author: "Jennifer Griffo"},*/
		{file: "co_048look_up.jpg", title: "Look Up", author: "Brad Hamers"},
		{file: "co_049mind_your_head.jpg", title: "Mind Your Head", author: "Brad Hamers"},
		{file: "co_050no_one_dies_in_real_life_(1_half).jpg", title: "No One Dies In Real Life (1 half)" , author: "Brad Hamers"},
                {file: "co_051no_one_dies_in_real_life_(detail_2).jpg", title: "No One Dies In Real Life (detail 2)", author: "Brad Hamers"},
		{file: "co_052no_one_dies_in_real_life_(photo_of).JPG", title: "No One Dies In Real Life (photo of)", author: "Brad Hamers"},
                {file: "co_053no_sky_to_duck_under.jpg", title: "No Sky to Duck Under", author: "Brad Hamers"},
		{file: "co_054oil_slick_heart_skidding_over_the_inside_lane.jpg", title: "Oil Slick Heart Skidding over the Inside Lane", author: "Brad Hamers"},
                {file: "co_055overgive.jpg", title: "Overgive", author: "Jessica Griffo"},
/*              {file: "co_056paroxysm.jpg", title: "Paroxysm", author: "Brad Hamers"}, */
		{file: "co_057people_don't_sing_because_they're_happy_-_high_quality.jpg", title: "People Don't Sing Because They're Happy", author: "Brad Hamers"},
		{file: "co_058pianos_and_moving_straps_copy.jpg", title: "Pianos and Moving Straps", author: "Brad Hamers"},
		{file: "co_059safety_in_numbers.jpg", title: "Safety in Numbers", author: "Brad Hamers"},
		{file: "co_060self_cleaning_oven.jpg", title: "Self Cleaning Oven", author: "Brad Hamers"},
		{file: "co_061sexual_nature-for_jenniffirtree-bottom(most).jpg", title: "Sexual Nature", author: "Brad Hamers"},
		{file: "co_062she_open_widest_at_the_windows.jpg", title: "She Open Widest at the Windows", author: "Brad Hamers"},
		{file: "co_063shell_in_my_egg_my_in_my_wonderment_(photo_of).JPG", title: "Shell in my Egg in my Wonderment", author: "Brad Hamers"},
		{file: "co_064sinking_from_the_top.jpg", title: "Sinking from the Top", author: "Brad Hamers"},
		{file: "co_065sky_diving.jpg", title: "Sky Diving", author: "Brad Hamers"},
		{file: "co_066so_long_(smaller).jpg", title: "So Long", author: "Brad Hamers"},
		{file: "co_067swan_song.jpg", title: "Swan Song", author: "Brad Hamers"},
		{file: "co_068terra_nulius(smaller).jpg", title: "Terra Nulius", author: "Brad Hamers"},
		{file: "co_069two_ton_slut_art_collabo.jpg", title:  "Two Ton Slut - collaboration", author: ""},
		{file: "co_070u_were_murdered_as_a_kid_(promo).jpg", title: "You Were Murdered as a Kid", author: "Brad Hamers"},
		{file: "co_071unchecked_luggage.jpg", title: "Unchecked Luggage", author: "Brad Hamers"},
		{file: "co_072violent_fellatio.jpg", title: "Violent Fellatio", author: "Brad Hamers"},
		{file: "co_073we_only_are_what_we_are_doing.jpg", title: "We Only Are What We Are Doing", author: "Brad Hamers"},
		{file: "co_074werebeingfolowed.jpg", title: "We're Being Followed", author: "Jessica Griffo"},
		{file: "co_075why_try.jpg", title: "Why Try", author: "Brad Hamers"},
		{file: "co_076wild_west.jpg", title: "Wild West", author: "Brad Hamers"},
		{file: "co_077without_hitting_the_black_hole.jpg", title: "Without Hitting the Black Hole", author: "Brad Hamers"},
		{file: "co_078yes-sir-ri's.jpg", title: "Yes-Sir-Ri", author: "Brad Hamers"},
		{file: "co_079you'll_shoot_yer_eye_out_(the_camera_told_me_there'd_be_days_like_this)_-_high_quality.jpg", title: "You'll Shoot Yer Eye Out (the camera told me there'd be days like this)", author: "Brad Hamers"},
		{file: "co_080newpolice-art.jpg", title: "The New Police", author: "Brad Hamers"}
]

var p_and_p = [
		{file: "pp_000.jpg", title: "Untitled", author: "Jennifer Griffo"},
		{file: "pp_001.jpg", title: "Untitled", author: "Jennifer Griffo"},
		{file: "pp_002.jpg", title: "Untitled", author: "Jennifer Griffo"},
		{file: "pp_003.jpg", title: "Untitled", author: "Jennifer Griffo"},
		{file: "pp_004.jpg", title: "Untitled", author: "Jennifer Griffo"},
		{file: "pp_005.jpg", title: "Untitled", author: "Jennifer Griffo"},
		{file: "pp_006.jpg", title: "Untitled", author: "Jennifer Griffo"},
		{file: "pp_007black_dress.jpg", title: "Black Dress", author: "Jennifer Griffo"},
		{file: "pp_008elephantitus.jpg", title: "Elaphantitus", author: "Jennifer Griffo"},
		{file: "pp_009emily_-_beards.jpg", title: "Beards", author: "Emily Bates"},
		{file: "pp_010emily_-_deadwood.jpg", title: "Deadwood", author: "Emily Bates"},
		{file: "pp_011emily_-_howdy_sailor.jpg", title: "Howdy Sailor", author: "Emily Bates"},
		{file: "pp_012emily_-_may_i_take__your_coat.jpg", title: "May I Take Your Coat", author: "Emily Bates"},
		{file: "pp_013emily_-_pop_goes_the_weasel.jpg", title: "Pop Goes the Weasel", author: "Emily Bates"},
		{file: "pp_014emily_-_put_a_bird_on_it.jpg", title: "Put a Bird On It", author: "Emily Bates"},
		{file: "pp_015emily_-_reinaissance.jpg", title: "Renaissance", author: "Emily Bates"},
		{file: "pp_016emily_-_seesaw_sisters.jpg", title: "See Saw Sisters", author: "Emily Bates"},
		{file: "pp_017emily_-_transients.jpg", title: "Transients", author: "Emily Bates"},
		{file: "pp_018Emily1.jpg", title: "Untitled", author: "Emily Bates"},
		{file: "pp_019Emily2.jpg", title: "Untitled", author: "Emily Bates"},
		{file: "pp_020Emily3.jpg", title: "Untitled", author: "Emily Bates"},
		{file: "pp_021emily4.jpg", title: "Untitled", author: "Emily Bates"},
		{file: "pp_022emily5.jpg", title: "Untitled", author: "Emily Bates"},
		{file: "pp_023emily6.jpg", title: "Untitled", author: "Emily Bates"},
		{file: "pp_024emily7.jpg", title: "Untitled", author: "Emily Bates"},
		{file: "pp_025emily8.jpg", title: "Untitled", author: "Emily Bates"},
		{file: "pp_026emily9.jpg", title: "Untitled", author: "Emily Bates"},
		{file: "pp_027emily10.jpg", title: "Untitled", author: "Emily Bates"},
		{file: "pp_028faucet.jpg", title: "Faucet", author: "Jennifer Griffo"},
		{file: "pp_029flourescence.jpg", title: "Flourescence", author: "Jennifer Griffo"},
		{file: "pp_030ghost_dancer.jpg", title: "Ghost Dancer", author: "Jennifer Griffo"},
		{file: "pp_031greendress.jpg", title: "Green Dress", author: "Jennifer Griffo"},
		{file: "pp_032haute_creature.jpg", title: "Haute Creature", author: "Jennifer Griffo"},
		{file: "pp_033if_i_had_a_dollar....jpg", title: "If I Had a Dollar", author: "Jennifer Griffo"},
		{file: "pp_034Image3.jpg", title: "Untitled", author: "Jennifer Griffo"},
		{file: "pp_035jelly.jpg", title: "Jelly", author: "Jennifer Griffo"},
		{file: "pp_036jennifer_-_reagan.jpg", title: "Reagan", author: "Jennifer Griffo"},
		{file: "pp_037jennifer_griffo_-_breathe.jpg", title: "Breathe", author: "Jennifer Griffo"},
		{file: "pp_038jennifer_griffo_-_cliff_notes_(oil).JPG", title: "Cliff Notes (oil)", author: "Jennifer Griffo"},
		{file: "pp_039jennifer_griffo_-_fertile_crescent.jpg", title: "Fertile Crescent", author: "Jennifer Griffo"},
		{file: "pp_040jennifer_griffo_-_food_colored_milk.jpg", title: "Food Colored Milk", author: "Jennifer Griffo"},
		{file: "pp_041jennifer_griffo_-_growth_spurt.jpg", title: "Growth Spurt", author: "Jennifer Griffo"},
		{file: "pp_042jennifer_griffo_-_gun_frost.jpg", title: "Gun Frost", author: "Jennifer Griffo"},
		{file: "pp_043jennifer_griffo_-_gutted.jpg", title: "Gutted", author: "Jennifer Griffo"},
		{file: "pp_044jennifer_griffo_-_i_can_cry_if_i_want_to.jpg", title: "I Can Cry If I Want To", author: "Jennifer Griffo"},
		{file: "pp_045jennifer_griffo_-_one_night_stands.JPG", title: "One Night Stands", author: "Jennifer Griffo"},
		{file: "pp_046jennifer_griffo_-_permanent_numbness_(oil).JPG", title: "Permanent Numbness", author: "Jennifer Griffo"},
		{file: "pp_047jennifer_griffo_-_pussy_willow.jpg", title: "Pussy Willow", author: "Jennifer Griffo"},
		{file: "pp_048jennifer_griffo_-_silicone.jpg", title: "Silicone", author: "Jennifer Griffo"},
		{file: "pp_049jennifer_griffo_-_spork_in_the_road.jpg", title: "Spork In The Road", author: "Jennifer Griffo"},
		{file: "pp_050jennifer_griffo_-_stay_born.jpg", title: "Stay Born", author: "Jennifer Griffo"},
		{file: "pp_051jennifer_griffo_-_think_straight.jpg", title: "Think Straight", author: "Jennifer Griffo"},
		{file: "pp_052jennifer_griffo_-_three_layers_of_raincoat.jpg", title: "Three Layers of Raincoat", author: "Jennifer Griffo"},
		{file: "pp_053jennifer_griffo_-_under_the_watch..2nd_guessing_my_hand.jpg", title: "2nd Guessing My Hand", author: "Jennifer Griffo"},
		{file: "pp_054jennifer_griffo_-_we_come_in_piece.jpg", title: "We Come In Piece", author: "Jennifer Griffo"},
		{file: "pp_055jennifer_griffo_-_where_the_thousandth_X_on_a_map_actually_starts_kissing.JPG", title: "Where The Thousandth X On A Map Actually Starts Kissing", author: "Jennifer Griffo"},
		{file: "pp_056jennifergriffo_-_kaufmanBig200.jpg", title: "Kaufman", author: "Jennifer Griffo"},
		{file: "pp_057jennifergriffo-big200-1.jpg", title: "Untitled", author: "Jennifer Griffo"},
		{file: "pp_058jennifergriffo-big200-2.jpg", title: "Untitled", author: "Jennifer Griffo"},
		{file: "pp_059jennifergriffo-lizardBig200.jpg", title: "Lizard", author: "Jennifer Griffo"},
		{file: "pp_060modish_fig.jpg", title: "Modish Fig", author: "Jennifer Griffo"},
		{file: "pp_061moon_number_28.jpg", title: "Moon Number 28", author: "Jennifer Griffo"},
		{file: "pp_062moth.jpg", title: "Moth", author: "Jennifer Griffo"},
		{file: "pp_063new_song_image.jpg", title: "New Song", author: "Jennifer Griffo"},
/*		{file: "pp_064newpolice-art.jpg",  title: "The New Police", author: "Jennifer Griffo"}, */
		{file: "pp_065pinkdress.jpg", title: "Pink Dress", author: "Jennifer Griffo"},
		{file: "pp_066pornucopia.jpg", title: "Pornucopia", author: "Jennifer Griffo"},
		{file: "pp_067raw_materials.jpg", title: "Raw Materials", author: "Jennifer Griffo"},
		{file: "pp_068sense_of_touch.jpg", title: "Sense of Touch", author: "Jennifer Griffo"},
		{file: "pp_069stuck.jpg", title: "Stuck", author: "Jennifer Griffo"},
		{file: "pp_070twisted.jpg", title: "Twisted", author: "Jennifer Griffo"},
		{file: "pp_071whoworries.jpg", title: "Who Worries", author: "Jennifer Griffo"}
]

var misc = [
		{file: "misc_000(official)Frietboerism2_cover_art.jpg", title: "Frietboerism 2 (cover art)", author: ""},
		{file: "misc_001BIG-PAUPER.gif", title: "Big Pauper", author: "Big Pauper"},
		{file: "misc_002Cover_Front_small.jpg", title: "Frietboerism 5 (cover art)", author: ""},
		{file: "misc_003Dust_On_Snow_-_you_were_murdered_as_a_kid_-COVER_(OFFICIAL).jpg", title: "Dust On Snow - You Were Murdered As A Kid (official cover)", author: "Brad Hamers"},
		{file: "misc_004Goodfoot.jpg", title: "Goodfoot Art Show (poster)", author: ""},
		{file: "misc_005Love_Letters_Haberman_Garber-555x353.jpg", title: "Love Letters", author: ""},
		{file: "misc_006No_Chance_To_Shine_Cover.jpg", title: "No Chance To Shine (cover art)", author: "Big Pauper"},
		{file: "misc_007The_Goodfoot.jpg", title: "Goodfoot Art Show (poster)", author: ""},
		{file: "misc_008big_pauper_videoinst1.jpg", title: "Video Instrument", author: "Big Pauper"},
		{file: "misc_009big_pauper_videoinst2.jpg", title: "Video Instrument", author: "Big Pauper"},
		{file: "misc_010big_pauper_videoinst3.jpg", title: "Video Instrument", author: "Big Pauper"},
		{file: "misc_011big_pauper_videoinst4.jpg", title: "Video Instument", author: "Big Pauper"},
		{file: "misc_012bigpauper.jpg", title: "Video Instrument", author: "Big Pauper"},
		{file: "misc_013cops-final-final_market-large.jpg", title: "Cops Eat Flowers (cover)", author: "Big Pauper"},
/*		{file: "misc_014cover.jpg", title: "No Chance To Shine (Cover)", author: "Big Pauper"}, */
		{file: "misc_015flashem.jpg", title: "Flash 'Em", author: ""},
		{file: "misc_016iam-poster.jpg", title: "Goodfoot Art Show (poster)", author: ""},
		{file: "misc_017london_show_flier.jpg", title: "London Show Flier", author: "Brad Hamers"},
		{file: "misc_018no_milk_no_sleep.jpg", title: "No Milk No Sleep", author: "Ray Murray"},
		{file: "misc_019poboy-88-strong-use.jpg", title: "Po/' Boy Art Show (poster)", author: ""},
		{file: "misc_020post__no_dreams_-_tv_watching_tv_-_with_text1.jpg", title: "Post No Dreams (promo)", author: "Brad Hamers"},
		{file: "misc_021post_no_dreams_-_official_1st_poster.jpg", title: "Post No Dreams (official first poster)", author: "Brad Hamers"},
		{file: "misc_022post_no_dreams_-_slaves_poster_-_withtext.jpg", title: "Post No Dreams (slaves poster)", author: "Brad Hamers"},
		{file: "misc_023post_no_dreams.jpg", title: "Post No Dreams (cover art)", author: "Brad Hamers"},
		{file: "misc_024pz_vfanishing_twin_small.jpg", title: "Vanishing Twin", author: "Big Pauper"},
		{file: "misc_025scorpio-poster.jpg", title: "Po/' Boy Art Show (poster)", author: ""},
		{file: "misc_026single_art.jpg", title: "single art", author: "Brad Hamers"},
		{file: "misc_027surreality_art_show_opening.jpg", title: "Surreality Art Show (poster)", author: ""},
		{file: "misc_028Connect_The_Machine_To_Th_Map.jpg", title: "Connect the Machine To The Map (French Compilation) (Cover)", author: ""}
]

var houses = [
		{file: "ho_000arryn.jpeg", title: "House Arryn", author: "Tom Bombadil" },
		{file: "ho_001baratheon.jpeg", title: "House Baratheon", author: "Tom Bombadil" },
		{file: "ho_002blackfyre.jpeg", title: "House Blackfyre" , author: "Tom Bombadil" },
		{file: "ho_003greyjoy.jpeg", title: "House Greyjoy" , author: "Tom Bombadil" },
		{file: "ho_004lannister.jpeg" , title: "House Lannister", author: "Tom Bombadil" },
		{file: "ho_005martell.jpeg", title: "House Martell", author: "Tom Bombadil" },
		{file: "ho_006nights_watch.jpg", title: "House Night's Watch", author: "Tom Bombadil" },
		{file: "ho_007stark.jpeg", title: "House Stark", author: "Tom Bombadil" },
                {file: "ho_008targaryen.jpeg", title: "House Targaryen", author: "Tom Bombadil" },
                {file: "ho_009tully.jpg", title: "House Tully", author: "Tom Bombadil" },
                {file: "ho_010tyrell.jpeg", title: "House Tyrell", author: "Tom Bombadil" }  
]

function add_houses_art_links(array) {
                for(var i=0; i<array.length; i++) {

                        var link=document.createElement("a");
                        link.setAttribute('class', "fancybox-house");
                        link.setAttribute('href', "images/houses/" + array[i].file);
			link.setAttribute('title', array[i].title + ", " + "by " + array[i].author);
                        var img=document.createElement("img");
/*                      img.setAttribute('src', "images/houses/" + array[i].file); */
                        img.setAttribute('src', "blank.gif");
                        img.setAttribute('data-original', "images/houses/" + array[i].file);
                        img.setAttribute('class', "lazy");
                        img.setAttribute('alt', array[i].title);
                        img.setAttribute('height', "160px");

                        img.setAttribute('width', "200px");
                        link.appendChild(img);

                        document.getElementById("child").appendChild(link);
                }
}

function add_misc_art_links(array) {
		for(var i=0; i<array.length; i++) {

			var link=document.createElement("a");
			link.setAttribute('class', "fancybox-misc");
			link.setAttribute('href', "images/misc/" + array[i].file);
			link.setAttribute('title', array[i].title + ", " + "by " + array[i].author);
			var img=document.createElement("img");
/*			img.setAttribute('src', "images/misc/" + array[i].file); */
			img.setAttribute('src', "blank.gif");
			img.setAttribute('data-original', "images/misc/" + array[i].file);
			img.setAttribute('class', "lazy");
			img.setAttribute('alt', array[i].title);
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
                        link.setAttribute('href', "images/collage/" + array[i].file);
			link.setAttribute('title', array[i].title + ", " + "by " + array[i].author);
                        var img=document.createElement("img");
/*                      img.setAttribute('src', "images/collage/" + array[i].file); */
                        img.setAttribute('src', "blank.gif");
			img.setAttribute('data-original', "images/collage/" + array[i].file);
			img.setAttribute('class', "lazy");
			img.setAttribute('alt', array[i].title);
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
                        link.setAttribute('href', "images/paint_and_pencil/" + array[i].file);
			link.setAttribute('title', array[i].title + ", " + "by " + array[i].author);
                        var img=document.createElement("img");
/*                      img.setAttribute('src', "images/paint_and_pencil/" + array[i].file); */
                        img.setAttribute('src', "blank.gif");
                        img.setAttribute('data-original', "images/paint_and_pencil/" + array[i].file); 
                        img.setAttribute('class', "lazy");
			img.setAttribute('alt', array[i].title);
                        img.setAttribute('height', "160px");
                        
			img.setAttribute('width', "200px");
			link.appendChild(img);

                        document.getElementById("child").appendChild(link);
                }
}


add_p_and_p_art_links(p_and_p);
add_collages_art_links(collages);

add_misc_art_links(misc);
// add_houses_art_links(houses);

$('#child').shuffle(); 

$( "#collage" ).click(function() {
	$('.fancybox-p_and_p').fadeOut("slow");
	$('.fancybox-p_and_p').attr("rel","gallery-off");
	$('.fancybox-misc').fadeOut("slow");
	$('.fancybox-misc').attr("rel","gallery-off");
	$('.fancybox-collage').fadeIn("slow");
	$('.fancybox-collage').attr("rel","gallery");
	var y = $(window).scrollTop(); 
	$("html, body").animate({ scrollTop: y + 1 }, 600);
	$("img.lazy").lazyload({
                effect : "fadeIn"
                });
});

$( "#paint" ).click(function() {
        $('.fancybox-collage').fadeOut("slow");
	$('.fancybox-collage').attr("rel","gallery-off");
	$('.fancybox-misc').fadeOut("slow");
	$('.fancybox-misc').attr("rel","gallery-off");
	$('.fancybox-p_and_p').fadeIn("slow");
	$('.fancybox-p_and_p').attr("rel","gallery");
        var y = $(window).scrollTop();
        $("html, body").animate({ scrollTop: y + 1 }, 600);
	$("img.lazy").lazyload({
                effect : "fadeIn"
                });
});

$( "#misc" ).click(function() {
        $('.fancybox-p_and_p').fadeOut("slow");
	$('.fancybox-p_and_p').attr("rel","gallery-off");
	$('.fancybox-collage').fadeOut("slow");
	$('.fancybox-collage').attr("rel","gallery-off");
	$('.fancybox-misc').fadeIn("slow");
	$('.fancybox-misc').attr("rel","gallery");
        var y = $(window).scrollTop();
        $("html, body").animate({ scrollTop: y + 1 }, 600);
	$("img.lazy").lazyload({
                effect : "fadeIn"
                });
});

$( "#all" ).click(function() {
        $('.fancybox-p_and_p').fadeIn("slow");
	$('.fancybox-p_and_p').attr("rel","gallery");
        $('.fancybox-collage').fadeIn("slow");
	$('.fancybox-collage').attr("rel","gallery");
        $('.fancybox-misc').fadeIn("slow");
	$('.fancybox-misc').attr("rel","gallery");
        var y = $(window).scrollTop();
        $("html, body").animate({ scrollTop: y + 1 }, 600);
	$("img.lazy").lazyload({
                effect : "fadeIn"
                });
});

$( "#shuffle" ).click(function() {
	$('#child').shuffle();
	$("img.lazy").lazyload({
                effect : "fadeIn"
                });
});

