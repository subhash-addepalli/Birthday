// function sendMessage(){
//   const msg = encodeURIComponent(document.getElementById("userInput").value || "");
//   const phone = ["+91","9948","761","423"].join("");
//   const link = `https://wa.me/${phone}?text=${msg}`;

//   alert(
//     "Don't panic! WhatsApp will open in 10 seconds It is based on your Network.\n" +
//     "Then tap the send icon."
//   );

//   setTimeout(() => (window.location.href = link), 10000);
// }

function sendMessage() {
  const msg = encodeURIComponent(document.getElementById("userInput").value || "");
  const phone = ["+91", "9948", "761", "423"].join("");
  const link = `https://wa.me/${phone}?text=${msg}`;

  alert(
    "Don't panic! WhatsApp Web will open in 10 seconds.\n" +
    "Then tap the send icon."
  );

  setTimeout(() => {
    window.open(link, '_blank'); // Opens WhatsApp in a new tab
  }, 10000);
}
