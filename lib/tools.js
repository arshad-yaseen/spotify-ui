module.exports = {
  playPauseAction: (e, PlayIcon, PauseIcon) => {

    let player_audio = document.getElementById('player_audio');
    

    let player_section_playicon = document.getElementById(
      "player_section_playicon"
    );

    console.log(e.target.src,process.env.NEXT_PUBLIC_BASE_URL);

    if (
      e.target.src.replace(process.env.NEXT_PUBLIC_BASE_URL, "") ===
      PlayIcon.src
    ) {
      player_audio.play()
      player_section_playicon.src = PauseIcon.src;
      let play_buttons = document.querySelectorAll(".play_button");

      play_buttons.forEach((play_button) => {
        play_button.src = PlayIcon.src;
        play_button.parentElement.classList.replace("opacity-100", "opacity-0");
        play_button.parentElement.classList.replace(
          "translate-y-[0px]",
          "translate-y-[10px]"
        );
      });
      e.target.src = PauseIcon.src;
      e.target.parentElement.classList.replace("opacity-0", "opacity-100");
      e.target.parentElement.classList.replace(
        "translate-y-[10px]",
        "translate-y-[0px]"
      );
    } else {
      player_audio.pause()
      player_section_playicon.src = PlayIcon.src;
      e.target.src = PlayIcon.src;
      e.target.parentElement.classList.replace("opacity-100", "opacity-0");
      e.target.parentElement.classList.replace(
        "translate-y-[0px]",
        "translate-y-[10px]"
      );
    }
  },
};
