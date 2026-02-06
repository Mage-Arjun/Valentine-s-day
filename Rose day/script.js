const start = new Date("2026-02-07"); // Rose Day
    const today = new Date();

    const diff = Math.floor((today - start)/(1000*60*60*24)) + 1;
    const pageDay = Number(document.body.dataset.day);

    if(diff < pageDay){
      document.body.innerHTML = "<h2 style='text-align:center;margin-top:40vh;'>Come back on Rose Day 🌹</h2>";
    }