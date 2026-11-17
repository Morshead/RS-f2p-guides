import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function SectionHeader({
  title,
  subtitle,
  icon: Icon,
  actions,
  filters,
  activeFilter,
  onFilterChange,
  checkAllLabel,
  onCheckAll
}) {
  return (
    <div className="glass-panel section-header">
      <div className="section-header-top">
        <div className="section-header-title-wrap">
          {Icon && (
            <div className="section-header-icon">
              <Icon size={16} />
            </div>
          )}
          <div>
            <h1 className="section-title">{title}</h1>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        </div>
        {(actions || checkAllLabel) && (
          <div className="section-actions">
            {actions}
            {checkAllLabel && onCheckAll && (
              <button
                type="button"
                className="check-all-link"
                onClick={onCheckAll}
              >
                <span>{checkAllLabel}</span>
                <span className="check-all-circle">
                  <ArrowUpRight size={11} />
                </span>
              </button>
            )}
          </div>
        )}
      </div>

      {filters && filters.length > 0 && (
        <div className="pill-tabs">
          {filters.map((filter) => {
            const value = typeof filter === 'string' ? filter : filter.value;
            const label = typeof filter === 'string' ? filter : filter.label;
            const count = typeof filter === 'object' ? filter.count : undefined;
            const isActive = activeFilter === value;

            return (
              <button
                key={value}
                type="button"
                className={`pill-tab ${isActive ? 'active' : ''}`}
                onClick={() => onFilterChange(value)}
              >
                <span>{label}</span>
                {count !== undefined && <span className="pill-tab-count">{count}</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
