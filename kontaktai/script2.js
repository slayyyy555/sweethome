document.getElementById("window1").addEventListener("click", () => {  
  window.location.href = "../index.html";
});

document.getElementById("window2").addEventListener("click", () => { 
  window.location.href = "../apie_mus/index4.html";
});

document.getElementById("window3").addEventListener("click", () => { 
  window.location.href = "../gyvunai/index3.html";
});

document.getElementById("window4").addEventListener("click", () => { 
  window.location.href = "index2.html";
});

document.getElementById("sendButton").addEventListener("click", function(event) {
  event.preventDefault(); // предотвращаем отправку формы

  alert("Ačiū!");
});