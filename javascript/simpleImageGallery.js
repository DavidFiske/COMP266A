/* This script and many more are available free online at
 * The JavaScript Source!! http://www.javascriptsource.com
 * Created by: Jay M. Rumsey, OD | http://www.nova.edu/~rumsey
 *
 * Obtained on September 04, 2016
 * Modified on September 05, 2016 by David Fiske (Unit 4)
 * Modified on September 21, 2016 by David Fiske (Unit 6)
 * changed imgArray to make it compatable with lightbox (Unit 6)
 * changed slideshow to make it compatable with imgArray (Unit 6)
 ****************************************************************/

var num = 0;

var imgArray = [
    ['<a class="fancybox" href="images/zsol2006.gif"><img class ="gallery_img" src="images/zsol2006_thumb.gif" id="gallery_img" name="gallery_img" alt="Zeekor Solutions in 2006"></a>', '<a href="http://www.zeekor.com">Zeekor Solutions</a>'],
    ['<a class="fancybox" href="images/comingsoon.gif"><img class ="gallery_img" src="images/comingsoon.gif" id="gallery_img" name="gallery_img" alt="Coming Soon"></a>', 'Coming Soon 1'],
    ['<a class="fancybox" href="images/comingsoon.gif"><img class ="gallery_img" src="images/comingsoon.gif" id="gallery_img" name="gallery_img" alt="Coming Soon"></a>', 'Coming Soon 2']
];

function slideshow(slide_num) {
    'use strict';
	document.getElementById('gallery_lightboxMod').innerHTML = imgArray[slide_num][0];
    document.getElementsByTagName("LI")[6].innerHTML = imgArray[slide_num][1];
}

function slideshowUp() {
    'use strict';
    num = num + 1;
    num = num % imgArray.length;
    slideshow(num);
}

function slideshowBack() {
    'use strict';
    num = num - 1;
    if (num < 0) {
        num = imgArray.length - 1;
    }
    num = num % imgArray.length;
    slideshow(num);
}
