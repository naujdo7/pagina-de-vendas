function countdownTimer() {
 const endTime = new Date();
 endTime.setHours(endTime.getHours() + 6); // 6 horas a partir do carregamento da página
 function updateTimer() {
   const now = new Date();
   const distance = endTime - now;
   if (distance <= 0) {
     document.getElementById("timer").innerHTML = "Oferta expirada!";
     return;
   }
   const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
   const minutes = Math.floor((distance / (1000 * 60)) % 60);
   const seconds = Math.floor((distance / 1000) % 60);
   document.getElementById("timer").innerHTML =
     `${hours}h ${minutes}m ${seconds}s`;
 }
 updateTimer();
 setInterval(updateTimer, 1000);
}
countdownTimer();