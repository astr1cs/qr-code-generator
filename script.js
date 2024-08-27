function generate() {
  const img = document.getElementById("imgID");
  const imgCode = document.getElementById("qr-code");
  const inputValue = document.getElementById("inputField").value;
  const api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

  imgCode.src = api + inputValue;
}
