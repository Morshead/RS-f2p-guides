import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function CollapsibleSection({
  title,
  defaultOpen = false,
  badge,
  children
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  useEffect(() => {
    setIsOpen(defaultOpen);
  }, [defaultOpen]);

  return (
    <div className="collapsible-block">
      <button
        type="button"
        className="collapsible-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span className="collapsible-trigger-left">
          {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          <span>{title}</span>
        </span>
        {badge && <span className="collapsible-badge">{badge}</span>}
      </button>

      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
}
