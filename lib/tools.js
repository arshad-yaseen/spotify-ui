module.exports = {
  playPauseAction: (e, PlayIcon, PauseIcon) => {
    let player_audio = document.getElementById("player_audio");
    const isProduction = process.env.NODE_ENV !== "development";

    let player_section_playicon = document.getElementById(
      "player_section_playicon"
    );

    

    if (
      e.target.src.replace(
        isProduction
          ? process.env.NEXT_PUBLIC_BASE_PROD_URL
          : process.env.NEXT_PUBLIC_BASE_DEV_URL,
        ""
      ) === PlayIcon.src
    ) {
      player_audio.play();
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
      player_audio.pause();
      player_section_playicon.src = PlayIcon.src;
      e.target.src = PlayIcon.src;
      e.target.parentElement.classList.replace("opacity-100", "opacity-0");
      e.target.parentElement.classList.replace(
        "translate-y-[0px]",
        "translate-y-[10px]"
      );
    }
  },
  greetingMessageShow: () => {
    let greetingMessage;

    let currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      greetingMessage = "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      greetingMessage = "Good afternoon";
    } else {
      greetingMessage = "Good evening";
    }

    const greetingShowElem = document.getElementById("greeting-elem");
    greetingShowElem.textContent = greetingMessage;
  },
  getImageAverageColor: (imageSrc, setAverageColor) => {
    const img = new window.Image();
    img.crossOrigin = "Anonymous";
    img.src = imageSrc;

    img.onload = function () {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      ).data;
      let r = 0,
        g = 0,
        b = 0;

      for (let i = 0; i < imageData.length; i += 4) {
        r += imageData[i];
        g += imageData[i + 1];
        b += imageData[i + 2];
      }

      r = Math.round(r / (imageData.length / 4));
      g = Math.round(g / (imageData.length / 4));
      b = Math.round(b / (imageData.length / 4));

      // calculate the luminance of the color
      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

      // calculate the amount to adjust the color by
      const adjustment = Math.round((128 - luminance) * 0);

      // adjust each color component by the same amount
      r = Math.max(0, Math.min(255, r - adjustment));
      g = Math.max(0, Math.min(255, g - adjustment));
      b = Math.max(0, Math.min(255, b - adjustment));

      // convert the RGB color values to a RGBA value with 50% transparency
      const rgba = `rgba(${r}, ${g}, ${b}, 0.7)`;

      const hero_gradient = document.getElementById("hero_gradient");
      const classes = hero_gradient.classList;
      for (let i = 0; i < classes.length; i++) {
        if (classes[i].startsWith("bg")) {
          hero_gradient.classList.remove(classes[i]);
        }
      }
      setAverageColor(rgba);
      hero_gradient.style.backgroundColor = rgba;
    };
  },
  changeHeaderBackgroundColor: (averageColor,scrollTopValue = 30) => {
    const home_section = document.getElementById("home_section");
    if (home_section.scrollTop > scrollTopValue) {
      document.getElementById("home_header").style.backgroundColor =
        averageColor.replace(/,\s*0?\.\d+\s*\)/, ", 1)");
      document.getElementById("home_header").classList.add("brightness-[0.5]");
    }

    home_section.addEventListener("scroll", function () {
      if (home_section.scrollTop > scrollTopValue) {
        document.getElementById("home_header").style.backgroundColor =
          averageColor.replace(/,\s*0?\.\d+\s*\)/, ", 1)");
        document
          .getElementById("home_header")
          .classList.add("brightness-[0.5]");
      } else {
        document.getElementById("home_header").style.backgroundColor =
          "transparent";
        document
          .getElementById("home_header")
          .classList.remove("brightness-[0.5]");
      }
    });
  },
};
