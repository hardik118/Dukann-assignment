// SkeletonLoader.js
import React from 'react';

const shimmerKeyframes = `
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

const SkeletonLoader = () => {
  const loaderStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '16px',
    position: 'relative',
    overflow: 'hidden'
  };

  const shimmerStyle = {
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite',
    borderRadius: '4px'
  };

  const headerStyle = {
    ...shimmerStyle,
    width: '100%',
    height: '20px'
  };

  const contentStyle = {
    ...shimmerStyle,
    width: '100%',
    height: '100px'
  };

  // Append the keyframes to the document head
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = shimmerKeyframes;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div style={loaderStyle}>
      <div style={headerStyle}></div>
      <div style={contentStyle}></div>
    </div>
  );
};

export default SkeletonLoader;
