'use client';
import React, { useRef, useEffect, ReactNode } from 'react';

interface EmojiParticleProps {
  children: ReactNode;
}

const EmojiParticle: React.FC<EmojiParticleProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const emojis = ['/antimetal1.jpg', '/antimetal2.jpg', '/antimetalzuck.jpg'];

  const getRandomEmoji = () => {
    const randomNumber = Math.random();
    if (randomNumber < 0.6) {
      return '/antimetalzuck.jpg';
    } else if (randomNumber < 0.8) {
      return '/antimetal1.jpg';
    } else {
      return '/antimetal2.jpg';
    }
  };

  const createParticle = (event: MouseEvent) => {
    if (containerRef.current) {
      const particle = document.createElement('div');
      particle.classList.add('particle');

      // Create an img element
      const img = document.createElement('img');
      // Set the src of the img using the getRandomEmoji function
      img.src = getRandomEmoji();
      // Append the img to the particle div
      particle.appendChild(img);

      // Set initial position based on the event's clientX and clientY
      particle.style.left =
        event.clientX - containerRef.current.offsetLeft + 'px';
      particle.style.top =
        event.clientY - containerRef.current.offsetTop + 'px';

      containerRef.current.appendChild(particle);
      particlesRef.current.push(particle);

      // Remove the particle after a set time
      setTimeout(() => {
        particle.remove();
        particlesRef.current = particlesRef.current.filter(
          (p) => p !== particle
        );
      }, 3000); // Adjust time as needed for the desired effect
    }
  };

  const startCreatingParticles = (event: MouseEvent) => {
    let lastCreationTime = Date.now();
    const creationDelay = 200; // Delay in milliseconds between particle creations
    let isCreatingParticles = true;

    const createParticleWithDelay = (event: MouseEvent) => {
      const currentTime = Date.now();
      if (
        currentTime - lastCreationTime > creationDelay &&
        isCreatingParticles
      ) {
        createParticle(event);
        lastCreationTime = currentTime;
      }
    };

    // Create an initial particle without delay
    createParticle(event);

    const animateParticles = () => {
      if (isCreatingParticles) {
        createParticleWithDelay(event);
        requestAnimationFrame(animateParticles);
      }
    };
    requestAnimationFrame(animateParticles);

    const stopCreatingParticles = () => {
      isCreatingParticles = false;
      document.removeEventListener('mousemove', createParticleWithDelay);
    };

    document.addEventListener('mousemove', createParticleWithDelay);
    document.addEventListener('mouseup', stopCreatingParticles);
    document.addEventListener('mouseleave', stopCreatingParticles);
  };

  useEffect(() => {
    const container = containerRef.current;
    container?.addEventListener('mousedown', startCreatingParticles);

    return () => {
      container?.removeEventListener('mousedown', startCreatingParticles);
    };
  }, []);

  return (
    <div ref={containerRef} className="emoji-particle">
      {children}
    </div>
  );
};

export default EmojiParticle;
