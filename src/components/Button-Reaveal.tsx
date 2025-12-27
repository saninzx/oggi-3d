import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface ScrollRevealButtonProps {
  text?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
}

export function ScrollRevealButton({
  text = 'Get Started',
  to,
  onClick,
  className = '',
}: ScrollRevealButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      // Show button when user is near the bottom (e.g., 80% scrolled)
      const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;
      setIsVisible(scrollPercentage > .95);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buttonClasses = `
    fixed bottom-8 left-1/2 -translate-x-1/2 z-50
    px-8 py-2 
    bg-white text-black
    font-medium text-lg
    rounded-full
    hover:bg-gray-200
    transition-all duration-500 ease-out
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}
    ${className}
  `;

  const buttonStyle = {
    boxShadow: '0 10px 40px rgba(255, 255, 255, 0.2)',
  };

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={buttonClasses}
        style={buttonStyle}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      style={buttonStyle}
    >
      {text}
    </button>
  );
}