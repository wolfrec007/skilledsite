import { useEffect, useState } from 'react';

export function ShootingStars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStar = () => {
      const newStar = {
        id: Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 1,
      };
      setStars((prev) => [...prev, newStar]);
      setTimeout(
        () => setStars((prev) => prev.filter((s) => s.id !== newStar.id)),
        (newStar.duration + newStar.delay) * 1000
      );
    };

    const interval = setInterval(createStar, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            top: '0',
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </>
  );
}
