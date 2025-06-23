AFRAME.registerComponent('game-play', {

  init: function () {
    turtlesRemaining = 5
    this.el.addEventListener('collide', function (e) {
      e.detail.target.el.remove();
      turtlesRemaining -= 1;
      turtlesRemainingText = document.getElementById('turtlesRemainingText');
      console.log(turtlesRemainingText);
      turtlesRemainingText.setAttribute('text', { value: String(turtlesRemaining) });
      if (turtlesRemaining == 0) {
        gameOverText = document.getElementById('gameOverText');
        gameOverText.setAttribute('text', { value: 'You WON!' });

      }
    });
  },

});