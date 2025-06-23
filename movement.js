AFRAME.registerComponent("movement", {

  init: function () {
    window.addEventListener("keydown", (e) => {
      researcher_rotation = this.el.getAttribute('rotation');
      if (e.key === "ArrowRight") {
        this.el.setAttribute("rotation", {
          y: 90,
        });
      }
      if (e.key === "ArrowLeft") {
        this.el.setAttribute("rotation", {
          y: 270,
        });
      }
      if (e.key === "ArrowUp") {
        this.el.setAttribute("rotation", {
          y: 180,
        });
      }
      if (e.key === "ArrowDown") {
        this.el.setAttribute("rotation", {
          y: 0,
        });
      }
    });
  },

  tick: function () {
    camera = document.getElementById('look');
    camera_position = camera.getAttribute('position');

    this.el.setAttribute("position", {
      x: camera_position.x - 0,
      y: camera_position.y - 9,
      z: camera_position.z - 9,
    });
  },

});