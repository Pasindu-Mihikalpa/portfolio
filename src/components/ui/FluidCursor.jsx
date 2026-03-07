import { useEffect, useRef } from 'react';

function FluidCursor() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const particlesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    // Disable on mobile devices
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Smoke Particle class
    class SmokeParticle {
      constructor(x, y) {
        this.x = x + (Math.random() - 0.5) * 15;
        this.y = y + (Math.random() - 0.5) * 15;
        
        // Velocity with slight upward drift (smoke rises)
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5 - 0.3; // upward bias
        
        // Size
        this.size = Math.random() * 3 + 1;
        this.maxSize = this.size + Math.random() * 2;
        
        // Opacity and life
        this.alpha = Math.random() * 0.4 + 0.3;
        this.life = 1;
        this.decay = Math.random() * 0.005 + 0.003;
        
        // Color variation (cyan/blue/purple)
        const hue = 180 + Math.random() * 60; // 180-240 (cyan to blue to purple)
        this.color = `hsla(${hue}, 70%, 60%, ${this.alpha})`;
        
        // Turbulence
        this.turbulence = Math.random() * 0.5;
      }

      update() {
        // Add turbulence for organic smoke movement
        this.vx += (Math.random() - 0.5) * this.turbulence;
        this.vy += (Math.random() - 0.5) * this.turbulence;
        
        // Apply velocity
        this.x += this.vx;
        this.y += this.vy;
        
        // Friction
        this.vx *= 0.98;
        this.vy *= 0.98;
        
        // Grow slightly as particle ages (smoke expands)
        if (this.size < this.maxSize) {
          this.size += 0.02;
        }
        
        // Fade out
        this.life -= this.decay;
        this.alpha = this.life * 0.5;
      }

      draw(ctx) {
        if (this.life <= 0 || this.alpha <= 0) return;
        
        ctx.save();
        ctx.globalAlpha = this.alpha;
        
        // Soft glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        
        // Draw particle with radial gradient for soft edges
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(34, 211, 238, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Mouse move handler - spawn many small particles
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      // Create cluster of particles for dense smoke trail
      for (let i = 0; i < 8; i++) {
        particlesRef.current.push(
          new SmokeParticle(e.clientX, e.clientY)
        );
      }
      
      // Limit particle count for performance
      if (particlesRef.current.length > 300) {
        particlesRef.current = particlesRef.current.slice(-300);
      }
    };

    // Animation loop
    const animate = () => {
      // Always use full clear to prevent brightness changes
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(p => p.life > 0);
      
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 10,
        mixBlendMode: 'screen',
        backgroundColor: 'transparent',
      }}
    />
  );
}

export default FluidCursor;
