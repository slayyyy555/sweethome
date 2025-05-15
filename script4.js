document.getElementById("window1").addEventListener("click", () => {  
  window.location.href = "../index.html";
});

document.getElementById("window2").addEventListener("click", () => { 
  window.location.href = "index4.html";
});

document.getElementById("window3").addEventListener("click", () => { 
  window.location.href = "../gyvunai/index3.html";
});

document.getElementById("window4").addEventListener("click", () => { 
  window.location.href = "../kontaktai/index2.html";
});

  const headers = document.querySelectorAll('.header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const arrow = header.querySelector('.rodykle');
      header.classList.toggle('active');
      content.classList.toggle('open');
    });
  });