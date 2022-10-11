import "../scss/main.scss";
import anime from "animejs";
import { indexButton } from "./tag-variables";

indexButton.focus();

anime({
  targets: "#math-quiz path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1200,
  delay: function (el, i) {
    return i === 0 ? i * 0 : i * 500;
  },
  direction: "alternate",
  loop: false,
});
