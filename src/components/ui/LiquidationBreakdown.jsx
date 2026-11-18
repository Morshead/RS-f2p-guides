import React from 'react';
import { computeLiquidationBreakdown } from '../../utils/liquidationGp';

export default function LiquidationBreakdown({
  gpPerHour,
  gpTrend,
  whereToSell,
  title,
  description,
  skillId,
  isPvm = false,
  unit = 'GP/hr'
}) {
  const breakdown = computeLiquidationBreakdown({
    gpPerHour,
    gpTrend,
    whereToSell,
    title,
    description,
    skillId,
    isPvm,
    unit
  });

  const cells = [
    { key: 'general', label: 'GENERAL STORE (30%)', data: breakdown.generalStore },
    { key: 'dedicated', label: 'DEDICATED STORE', data: breakdown.dedicatedStore },
    { key: 'lowAlch', label: 'LOW ALCH (21 MAG • 40%)', data: breakdown.lowAlch },
    { key: 'highAlch', label: 'HIGH ALCH (55 MAG • 60%)', data: breakdown.highAlch }
  ];

  return (
    <div className="liquidation-panel">
      <div className="liquidation-header">
        <span className="meta-label">GP / HOUR BY LIQUIDATION CHANNEL</span>
        <span className="liquidation-legend">
          RS3 F2P Rates • General Stores Buy +1/+2/+3 at 30% • Dedicated Shops Accept Stocked Base (+0) Only
        </span>
      </div>
      <div className="liquidation-grid">
        {cells.map((cell) => (
          <div key={cell.key} className={`liquidation-cell tone-${cell.data.tone}`}>
            <div className="liquidation-cell-label">{cell.label}</div>
            <div className="liquidation-cell-value">{cell.data.value}</div>
            <div className="liquidation-cell-note">{cell.data.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
