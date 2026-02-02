import { useEffect, useRef } from 'react';

// Particle logic outside component to avoid recreation and lint errors
class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.z = Math.random() * 2 + 0.5; // Depth/Speed factor
    this.len = Math.random() * 50 + 10;
    this.opacity = Math.random() * 0.5 + 0.1;
  }

  update() {
    this.x -= this.z * 5; // Move left
    
    if (this.x < -this.len) {
      this.x = this.canvas.width + this.len;
      this.y = Math.random() * this.canvas.height;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    // Create a gradient for the trail
    const gradient = ctx.createLinearGradient(this.x, this.y, this.x + this.len, this.y);
    gradient.addColorStop(0, `rgba(209, 242, 56, 0)`); // Fade tail
    gradient.addColorStop(1, `rgba(209, 242, 56, ${this.opacity})`); // Neon head

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2 * this.z;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.len, this.y);
    ctx.stroke();
  }
}

const SpeedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particleCount = 100;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas));
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.2)'; // Trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
};

export default SpeedBackground;
