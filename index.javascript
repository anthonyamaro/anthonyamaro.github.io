<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Space Welcome</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      height: 100vh;
      overflow: hidden;
      background: black;
      font-family: "Comic Sans MS", cursive, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    /* Star background */
    .stars {
      position: absolute;
      width: 100%;
      height: 100%;
      background: transparent;
      overflow: hidden;
      z-index: 0;
    }

    .star {
      position: absolute;
      width: 2px;
      height: 2px;
      background: white;
      border-radius: 50%;
      opacity: 0.8;
      animation: twinkle 2s infinite alternate;
    }

    @keyframes twinkle {
      from { opacity: 0.2; }
      to { opacity: 1; }
    }

    h1 {
      z-index: 1;
      font-size: 4rem;
      text-align: center;
    }
  </style>
</head>
<body>

  <div class="stars" id="stars"></div>
  <h1>Welcome</h1>

  <script>
    const starContainer = document.getElementById("stars");

    function createStars(count) {
      for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = (Math.random() * 2 + 1) + "s";

        starContainer.appendChild(star);
      }
    }

    createStars(150);
  </script>

</body>
</html>
