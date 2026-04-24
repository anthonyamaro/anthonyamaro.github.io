<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Space Welcome</title>
  <style>
    body {
      margin: 0;
      overflow: hidden;
      background: black;
      font-family: Arial, sans-serif;
      color: white;
    }

    canvas {
      position: absolute;
      top: 0;
      left: 0;
    }

    h1 {
      position: absolute;
      width: 100%;
      text-align: center;
      top: 50%;
      transform: translateY(-50%);
      font-size: 3rem;
      letter-spacing: 3px;
    }
  </style>
</head>
<body>
  <canvas id="space"></canvas>
  <h1 id="welcome"></h1>

  <script>
    // Canvas setup
    const canvas = document.getElementById("space");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * canvas.width
      });
    }

    function drawStars() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "white";

      for (let i = 0; i < stars.length; i++) {
        let star = stars[i];

        star.z -= 2;

        if (star.z <= 0) {
          star.z = canvas.width;
        }

        let k = 128.0 / star.z;
        let px = star.x * k + canvas.width / 2;
        let py = star.y * k + canvas.height / 2;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          let size = (1 - star.z / canvas.width) * 3;
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function animate() {
      drawStars();
      requestAnimationFrame(animate);
    }

    animate();

    // Typing effect for "Welcome"
    const text = "Welcome";
    let i = 0;

    function typeEffect() {
      if (i < text.length) {
        document.getElementById("welcome").textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 150);
      }
    }

    typeEffect();

    // Resize handling
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  </script>
</body>
</html>
