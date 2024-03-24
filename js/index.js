document.addEventListener('DOMContentLoaded', () => {
  const videoModal = document.getElementById('videoModal');

  videoModal.addEventListener('shown.bs.modal', function (event) {
    const video = videoModal.querySelector('video');
    if (video) {
      video.play();
    }
  });

  videoModal.addEventListener('hidden.bs.modal', function (event) {
    const video = videoModal.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  });
});



document.addEventListener("DOMContentLoaded", function() {
  var videoElement = document.getElementById('videoFondo');
  var playPromise = videoElement.play();

  if (playPromise !== undefined) {
    playPromise.then(_ => {
      // La reproducción automática comenzó exitosamente.
    }).catch(error => {
      console.error("Error al intentar reproducir el video: ", error);
    });
  }
});
