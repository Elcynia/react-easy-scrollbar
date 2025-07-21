import { useState, useEffect, useCallback } from 'react';

interface ProgressBarProps {
  height?: number | string;
  bgColor?: string;
  duration?: number | string;
}

const DEFAULT_HEIGHT = '4';
const DEFAULT_BG_COLOR = '#000';
const DEFAULT_DURATION = '0.1';
const DEFAULT_Z_INDEX = 999;

const scrollStyle = (
  width: string | null,
  height: string | number = DEFAULT_HEIGHT,
  bgColor: string = DEFAULT_BG_COLOR,
  duration: string | number = DEFAULT_DURATION
): React.CSSProperties =>
  ({
    margin: 0,
    padding: 0,
    top: 0,
    position: 'fixed',
    zIndex: DEFAULT_Z_INDEX,
    backgroundColor: bgColor,
    height: `${height}px`,
    width: width ?? undefined,
    transitionDuration: `${duration}s`,
  } satisfies React.CSSProperties);

export default function ProgressBar({ height, bgColor, duration }: ProgressBarProps) {
  const [width, setWidth] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / scrollHeight) * 100;

    if (scrollHeight > 0) {
      setWidth(`${scrolled}%`);
    } else {
      setWidth(null);
    }
  }, []);

  useEffect(() => {
    try {
      window.addEventListener('scroll', handleScroll);
    } catch (error: unknown) {
      console.error(error);
    }

    return () => {
      try {
        window.removeEventListener('scroll', handleScroll);
      } catch (error: unknown) {
        console.error(error);
      }
    };
  }, [handleScroll]);

  return <div style={scrollStyle(width, height, bgColor, duration)} />;
}
