// Dialog.jsx
import React from 'react';

export function Dialog({ webformatURL, setdialog }) {
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const contentStyle = {
    background: 'white',
    borderRadius: '8px',
    padding: '18px',
    maxWidth: '500px',
    width: '98%',
    position: 'relative',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
  };

  return (
    <div style={overlayStyle}>
      <div style={contentStyle}>
        <img src={webformatURL} alt="" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
        <button style={closeButtonStyle} onClick={() => setdialog(false)}>
          &times;
        </button>
      </div>
    </div>
  );
}
