const countdown = document.getElementById("countdown");

function startCountdown(durationInMinutes) {

  let time = durationInMinutes * 60;

  const timer = setInterval(() => {

    const minutes = Math.floor(time / 60);

    const seconds = time % 60;

    countdown.textContent = `Promoção acaba em: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    time--;

    if (time < 0) {

      clearInterval(timer);

      countdown.textContent = "Promoção encerrada!";

    }

  }, 1000);

}

startCountdown(15); // 15 minutos de contagem regressiva
 