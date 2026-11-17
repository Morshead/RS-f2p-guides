import React from 'react';

export default function Badge({
  children,
  variant = 'blue',
  mono = false,
  className = ''
}) {
  return (
    <span className={`badge badge-${variant} ${mono ? 'mono' : ''} ${className}`.trim()}>
      {children}
    </span>
  );
}
