window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

    var carousels = bulmaCarousel.attach('.carousel', options);

    for(var i = 0; i < carousels.length; i++) {
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }


    bulmaSlider.attach();

})

let currentTask = null;

function changeTask(taskName, videoSrc) {
  const videoPlayer = document.getElementById('task-video-player');
  
  if (videoPlayer) {
    videoPlayer.src = videoSrc;
    
    document.querySelectorAll('.task-selector .button').forEach(button => {
      button.classList.remove('is-active');
    });
    
    const clickedButton = document.querySelector(`.task-selector .button[onclick*="${taskName}"]`);
    if (clickedButton) {
      clickedButton.classList.add('is-active');
    }
  }
}

function changeCrowdVideo(crowdName, videoSrc) {
  const videoPlayer = document.getElementById('crowd-video-player');

  if (videoPlayer) {
    videoPlayer.src = videoSrc;
    
    document.querySelectorAll('.crowd-selector .button').forEach(button => {
      button.classList.remove('is-active');
    });
    
    const clickedButton = document.querySelector(`.crowd-selector .button[onclick*="${crowdName}"]`);
    if (clickedButton) {
      clickedButton.classList.add('is-active');
    }
  }

}


document.addEventListener('DOMContentLoaded', (event) => {
  changeTask('hi-chew', 'static/videos/expert-hi-chew-web.mp4');
  changeCrowdVideo('Example #1', 'static/videos/crowd-1-web.mp4');
});
