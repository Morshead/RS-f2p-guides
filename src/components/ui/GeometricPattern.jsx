import React, { useId } from 'react';

/**
 * Low-opacity geometric blueprint SVG overlays (`stroke-width` 0.25–0.5)
 * supporting 10x10 grid ('grid'), concentric crosshairs ('circles'),
 * isometric triangles ('triangles'), and composite hero schematics ('hero').
 */
export function GeometricSvg({ variant = 'grid', className = '' }) {
  const uid = useId().replace(/:/g, '');
  const gridId = `bp-grid-${uid}`;
  const isoId = `bp-iso-${uid}`;

  if (variant === 'hero') {
    return (
      <svg
        className={`geo-svg ${className}`.trim()}
        viewBox="0 0 400 220"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern id={gridId} width="10" height="10" patternUnits="userSpaceOnUse">
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="#111827"
              strokeWidth="0.25"
            />
          </pattern>
        </defs>
        <rect width="400" height="220" fill={`url(#${gridId})`} />

        {/* Concentric radar circles & crosshairs */}
        <g stroke="#111827" fill="none">
          <circle cx="150" cy="110" r="24" strokeWidth="0.35" />
          <circle cx="150" cy="110" r="48" strokeWidth="0.35" />
          <circle cx="150" cy="110" r="72" strokeWidth="0.3" strokeDasharray="3 3" />
          <circle cx="150" cy="110" r="96" strokeWidth="0.4" />
          <line x1="20" y1="110" x2="280" y2="110" strokeWidth="0.3" />
          <line x1="150" y1="10" x2="150" y2="210" strokeWidth="0.3" />
          <line x1="80" y1="40" x2="220" y2="180" strokeWidth="0.25" />
          <line x1="220" y1="40" x2="80" y2="180" strokeWidth="0.25" />
        </g>

        {/* Isometric wireframe prism & calibration marks */}
        <g stroke="#111827" fill="none">
          <polygon points="300,34 366,72 366,148 300,186 234,148 234,72" strokeWidth="0.45" />
          <polygon points="300,56 348,84 348,136 300,164 252,136 252,84" strokeWidth="0.3" />
          <line x1="300" y1="34" x2="300" y2="186" strokeWidth="0.3" />
          <line x1="234" y1="72" x2="366" y2="148" strokeWidth="0.3" />
          <line x1="366" y1="72" x2="234" y2="148" strokeWidth="0.3" />
          <rect x="16" y="16" width="12" height="12" strokeWidth="0.4" />
          <rect x="372" y="192" width="12" height="12" strokeWidth="0.4" />
        </g>
      </svg>
    );
  }

  if (variant === 'circles') {
    return (
      <svg
        className={`geo-svg ${className}`.trim()}
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g stroke="#111827" fill="none">
          <circle cx="100" cy="100" r="20" strokeWidth="0.35" />
          <circle cx="100" cy="100" r="42" strokeWidth="0.35" />
          <circle cx="100" cy="100" r="64" strokeWidth="0.3" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="86" strokeWidth="0.45" />
          <line x1="0" y1="100" x2="200" y2="100" strokeWidth="0.35" />
          <line x1="100" y1="0" x2="100" y2="200" strokeWidth="0.35" />
          <line x1="28" y1="28" x2="172" y2="172" strokeWidth="0.25" />
          <line x1="172" y1="28" x2="28" y2="172" strokeWidth="0.25" />
          <rect x="12" y="12" width="176" height="176" strokeWidth="0.25" />
        </g>
      </svg>
    );
  }

  if (variant === 'triangles') {
    return (
      <svg
        className={`geo-svg ${className}`.trim()}
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern id={isoId} width="40" height="34.64" patternUnits="userSpaceOnUse">
            <path
              d="M 0 34.64 L 20 0 L 40 34.64 Z M 20 0 L 40 0 M 0 0 L 20 34.64"
              fill="none"
              stroke="#111827"
              strokeWidth="0.3"
            />
          </pattern>
        </defs>
        <rect width="200" height="200" fill={`url(#${isoId})`} />
        <g stroke="#111827" fill="none">
          <polygon points="100,18 176,154 24,154" strokeWidth="0.45" />
          <polygon points="100,182 176,46 24,46" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="4" strokeWidth="0.4" />
        </g>
      </svg>
    );
  }

  // Default: 'grid' (10px repeating grid + axis crosslines)
  return (
    <svg
      className={`geo-svg ${className}`.trim()}
      viewBox="0 0 200 200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern id={gridId} width="10" height="10" patternUnits="userSpaceOnUse">
          <path
            d="M 10 0 L 0 0 0 10"
            fill="none"
            stroke="#111827"
            strokeWidth="0.3"
          />
        </pattern>
      </defs>
      <rect width="200" height="200" fill={`url(#${gridId})`} />
      <g stroke="#111827" fill="none">
        <line x1="0" y1="100" x2="200" y2="100" strokeWidth="0.4" />
        <line x1="100" y1="0" x2="100" y2="200" strokeWidth="0.4" />
        <line x1="0" y1="0" x2="200" y2="200" strokeWidth="0.25" />
        <rect x="30" y="30" width="140" height="140" strokeWidth="0.35" />
      </g>
    </svg>
  );
}

/**
 * Abstract Geometric Container used inside Category Grid cards and Skill Cards.
 * Renders #FAFAFA fill, 1px #E5E7EB border, low-opacity SVG blueprint pattern,
 * and a centered Lucide icon that transitions from #E5E7EB to #111827 on parent hover.
 */
export function AbstractGeometricBox({
  icon: Icon,
  variant = 'grid',
  aspectSquare = true,
  tag,
  code,
  iconSize = 36
}) {
  return (
    <div className={`geo-box ${aspectSquare ? 'geo-box-square' : 'geo-box-compact'}`}>
      <GeometricSvg variant={variant} />
      {tag && <span className="geo-corner-tag geo-corner-tl">{tag}</span>}
      {code && <span className="geo-corner-tag geo-corner-br">{code}</span>}
      {Icon && <Icon size={iconSize} strokeWidth={1.5} className="geo-box-icon" />}
    </div>
  );
}
