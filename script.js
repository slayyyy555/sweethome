document.getElementById("window1").addEventListener("click", () => {
    window.location.href = "index.html";
  });

  document.getElementById("window2").addEventListener("click", () => {
    window.location.href = "index4.html";
  });

  document.getElementById("window3").addEventListener("click", () => {
    window.location.href = "index3.html";
  });

  document.getElementById("window4").addEventListener("click", () => {
    window.location.href = "index2.html";
  });

  function animateCounter(id, start, end, duration) {
    const element = document.getElementById(id);
    const range = end - start;
    const startTime = performance.now();
  
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * range + start);
      element.textContent = value.toLocaleString() + '+';
  
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
  
    requestAnimationFrame(update);
  }
  
  // Пример: от 0 до 10 700 за 1.5 секунды
  animateCounter('counter', 0, 10700, 3500);

  function animateCounter2(id, start, end, duration) {
    const element = document.getElementById(id);
    const range = end - start;
    const startTime = performance.now();
  
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * range + start);
      element.textContent = value.toLocaleString() + '+';
  
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
  
    requestAnimationFrame(update);
  }
  
  // Пример: от 0 до 10 700 за 1.5 секунды
  animateCounter2('counter2', 0, 6080, 4500);

  function animateCounter3(id, start, end, duration) {
    const element = document.getElementById(id);
    const range = end - start;
    const startTime = performance.now();
  
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * range + start);
      element.textContent = value.toLocaleString() + '+';
  
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
  
    requestAnimationFrame(update);
  }
  
  // Пример: от 0 до 10 700 за 1.5 секунды
  animateCounter3('counter3', 0, 5090, 4500);

  function animateCounter4(id, start, end, duration) {
    const element = document.getElementById(id);
    const range = end - start;
    const startTime = performance.now();
  
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * range + start);
      element.textContent = value.toLocaleString() + '+';
  
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
  
    requestAnimationFrame(update);
  }
  
  // Пример: от 0 до 10 700 за 1.5 секунды
  animateCounter4('counter4', 0, 1000, 4500);
