import React from 'react';
import { Cpu } from 'lucide-react';
import Badge from './Badge';
import ItemText from './ItemText';

export default function MechanicsGrid({ mechanics = [], showCpuIcon = false }) {
  if (!mechanics || mechanics.length === 0) return null;

  return (
    <div className="mechanics-grid">
      {mechanics.map((mech, idx) => (
        <div key={idx} className="mechanic-card">
          <div className="mechanic-card-header">
            <span className="mechanic-title">
              {showCpuIcon && (
                <Cpu
                  size={13}
                  style={{ marginRight: '6px', verticalAlign: 'middle' }}
                />
              )}
              {mech.title}
            </span>
            <Badge>{mech.badge}</Badge>
          </div>
          <div className="mechanic-row">
            <span className="meta-label">HOW IT WORKS:</span>{' '}
            <ItemText>{mech.howItWorks}</ItemText>
          </div>
          <div className="mechanic-row">
            <span className="meta-label">ACTION / SETTING:</span>{' '}
            <ItemText>{mech.howToUse}</ItemText>
          </div>
        </div>
      ))}
    </div>
  );
}
