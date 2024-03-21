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
