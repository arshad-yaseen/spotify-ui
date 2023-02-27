module.exports = {
  init: (SoundIcon, Sound25Icon, Sound75Icon, MuteIcon) => {
    const audioElement = document.getElementById("player_audio");
    const player_sound_icon = document.getElementById("player_sound_icon");

    const seekBar = document.getElementById("seek_bar");
    const seekBackground = document.getElementById("seek_background");

    function updateSeekBarOnClickBase(e) {
      let currentPoint = e.offsetX;
      let progressBarWidth = this.clientWidth;
      let currentRange =
        (currentPoint / progressBarWidth) * audioElement.duration;
        console.log(currentRange);
      audioElement.currentTime = currentRange;
    }

    let isMuted = false;

    player_sound_icon.addEventListener("click", toggleVolume);

    function toggleVolume() {
      if (isMuted) {
        // If the audio is currently muted, set the volume to 1 (full volume)
        audioElement.volume = 1;
        player_sound_icon.src = SoundIcon.src;
        soundBar.style.width = "100%";
        isMuted = false;
      } else {
        // If the audio is not muted, set the volume to 0 (mute)
        audioElement.volume = 0;
        player_sound_icon.src = MuteIcon.src;
        soundBar.style.width = "0%";
        isMuted = true;
      }
    }

    seekBackground.addEventListener("click", updateSeekBarOnClickBase);

    function updateVolume(e) {
      let currentPoint = e.offsetX;
      let progressBarWidth = this.clientWidth;
      let seekPercentage = (currentPoint / progressBarWidth) * 100;
      let currentVolume = seekPercentage / 100;
      soundBar.style.width = `${seekPercentage}%`;
      audioElement.volume = currentVolume;
      if (seekPercentage <= 75 && seekPercentage > 25) {
        player_sound_icon.src = Sound75Icon.src;
      } else if (seekPercentage <= 25 && seekPercentage > 0) {
        player_sound_icon.src = Sound25Icon.src;
      } else if (seekPercentage <= 0) {
        player_sound_icon.src = MuteIcon.src;
      } else {
        player_sound_icon.src = SoundIcon.src;
      }
    }

    const soundBar = document.getElementById("sound_bar");
    const soundBarBackground = document.getElementById("sound_background");

    soundBarBackground.addEventListener("click", updateVolume);

    audioElement.addEventListener("timeupdate", updateSeekBar);

    function updateSeekBar() {
      const audioDuration = audioElement.duration;
      const currentTime = audioElement.currentTime;
      const percentage = currentTime / audioDuration;
      seekBar.style.width = `${percentage * 100}% `;
    }

    const currentTime = document.getElementById("current-time");
    const duration = document.getElementById("duration");


    audioElement.addEventListener("timeupdate", updateTimeDisplay);

    function updateTimeDisplay() {
      // Calculate the minutes and seconds of the current time
      const currentMinutes = Math.floor(audioElement.currentTime / 60);
      const currentSeconds = Math.floor(audioElement.currentTime % 60);

      // Add leading zeros to the minutes and seconds if necessary
      const formattedCurrentMinutes = currentMinutes
        .toString()
        .padStart(1, "0");
      const formattedCurrentSeconds = currentSeconds
        .toString()
        .padStart(2, "0");

      // Set the current time display to the formatted time
      currentTime.textContent = `${formattedCurrentMinutes}:${formattedCurrentSeconds}`;

      // Calculate the minutes and seconds of the total duration
      const durationMinutes = Math.floor(audioElement.duration / 60);
      const durationSeconds = Math.floor(audioElement.duration % 60);

      // Add leading zeros to the minutes and seconds if necessary
      const formattedDurationMinutes = durationMinutes
        .toString()
        .padStart(1, "0");
      const formattedDurationSeconds = durationSeconds
        .toString()
        .padStart(2, "0");

        console.log(typeof formattedDurationMinutes,typeof formattedCurrentSeconds);

        if(formattedDurationMinutes != "NaN" && formattedCurrentSeconds != "NaN"){
 // Set the duration display to the formatted time
 duration.textContent = `${formattedDurationMinutes}:${formattedDurationSeconds}`;
        }

     
    }
  },
};
