import { lastUser } from "./game";
import { clock, stopButton, timerCount } from "./tag-variables";

export const timerFunc = () => {
  let sec = 90;
  const step = 1;
  const increment = 360 / sec;
  const half = Math.round(sec / 2);
  const barColor = "#ec366b";
  const backColor = "#feeff4";

  let i = 0;

  if (lastUser.gameMode === "time-attack") {
    const timer: NodeJS.Timer = setInterval(() => {
      sec -= step;
      i++;

      if (sec > half) {
        let nextdeg = 90 + increment * i + "deg";
        clock.style.cssText = `background-image:linear-gradient(90deg,${barColor} 50%,transparent 50%,transparent),linear-gradient(${nextdeg},${backColor} 50%,${barColor} 50%, ${barColor})`;
      } else {
        let nextdeg = -90 + increment * (i - half) + "deg";
        clock.style.cssText = `background-image:linear-gradient(${nextdeg},${backColor} 50%,transparent 50%,transparent),linear-gradient(270deg,${backColor} 50%,${barColor} 50%,${barColor}`;
      }
      if (sec == 0) {
        stopButton.click();
      }
      timerCount.textContent = String(sec);
    }, 1000);

    stopButton.addEventListener("click", () => {
      clearInterval(timer);
      timerCount.textContent = "0";
      clock.removeAttribute("style");
      window.location.href = "/end.html";
    });
  }
};
