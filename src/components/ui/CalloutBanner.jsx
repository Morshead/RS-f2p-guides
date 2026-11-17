import React from 'react';

export default function CalloutBanner({ label, children, variant = 'blue' }) {
  return (
    <div className={`callout-banner callout-${variant}`}>
      {label && <strong className="callout-label">{label}: </strong>}
      <span>{children}</span>
    </div>
  );
}
