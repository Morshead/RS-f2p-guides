import React from 'react';

export default function GlassCard({
  children,
  title,
  subtitle,
  icon: Icon,
  badge,
  headerRight,
  onClick,
  interactive = false,
  className = '',
  padding = 'normal'
}) {
  const padClass =
    padding === 'compact'
      ? 'glass-card-compact'
      : padding === 'spacious'
      ? 'glass-card-spacious'
      : 'glass-card-normal';

  const hasHeader = title || subtitle || Icon || badge || headerRight;

  return (
    <div
      className={`glass-panel glass-card ${padClass} ${interactive ? 'interactive' : ''} ${className}`.trim()}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick(e);
              }
            }
          : undefined
      }
    >
      {hasHeader && (
        <div className="card-header">
          <div className="card-header-main">
            <div className="card-title">
              {Icon && <Icon size={15} className="card-title-icon" />}
              <span>{title}</span>
            </div>
            {subtitle && <div className="card-subtitle">{subtitle}</div>}
          </div>
          {(badge || headerRight) && (
            <div className="card-header-right">
              {badge}
              {headerRight}
            </div>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
