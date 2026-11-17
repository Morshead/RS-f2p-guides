import React, { useId } from 'react';
import { Compass, MapPin } from 'lucide-react';

function TerrainOverlay({ terrain = 'city' }) {
  if (terrain === 'river') {
    return (
      <g stroke="#111827" fill="none" opacity="0.24">
        {/* Riverbanks & bridge crossing */}
        <path d="M 210 0 C 190 55, 255 110, 225 185" strokeWidth="0.5" />
        <path d="M 248 0 C 228 55, 293 110, 263 185" strokeWidth="0.5" />
        <path d="M 229 0 C 209 55, 274 110, 244 185" strokeWidth="0.25" strokeDasharray="4 3" />
        <rect x="200" y="76" width="76" height="14" strokeWidth="0.4" />
        <circle cx="305" cy="126" r="24" strokeWidth="0.3" strokeDasharray="2 2" />
      </g>
    );
  }

  if (terrain === 'coast') {
    return (
      <g stroke="#111827" fill="none" opacity="0.24">
        {/* Shoreline, docks & sea contour */}
        <path d="M 0 132 Q 120 112 240 136 T 480 120" strokeWidth="0.5" />
        <path d="M 0 152 Q 130 135 260 155 T 480 142" strokeWidth="0.3" strokeDasharray="5 3" />
        <rect x="275" y="102" width="60" height="36" strokeWidth="0.4" />
        <line x1="285" y1="102" x2="285" y2="138" strokeWidth="0.25" />
        <line x1="325" y1="102" x2="325" y2="138" strokeWidth="0.25" />
      </g>
    );
  }

  if (terrain === 'dungeon') {
    return (
      <g stroke="#111827" fill="none" opacity="0.24">
        {/* Subterranean corridors & chambers */}
        <rect x="34" y="96" width="74" height="62" strokeWidth="0.45" />
        <rect x="142" y="34" width="90" height="68" strokeWidth="0.45" />
        <rect x="262" y="88" width="98" height="72" strokeWidth="0.45" />
        <rect x="386" y="30" width="72" height="58" strokeWidth="0.45" />
        <path d="M 108 118 L 142 74 M 232 76 L 262 118 M 360 112 L 386 68" strokeWidth="0.35" />
      </g>
    );
  }

  if (terrain === 'wilderness') {
    return (
      <g stroke="#111827" fill="none" opacity="0.24">
        {/* Wilderness ditch wall + sector hazard lines */}
        <line x1="0" y1="108" x2="480" y2="108" strokeWidth="0.5" strokeDasharray="6 2" />
        <line x1="0" y1="114" x2="480" y2="114" strokeWidth="0.3" />
        <polygon points="305,94 345,126 305,158 265,126" strokeWidth="0.4" />
        <circle cx="420" cy="58" r="22" strokeWidth="0.35" />
        <circle cx="420" cy="58" r="34" strokeWidth="0.25" strokeDasharray="2 3" />
      </g>
    );
  }

  if (terrain === 'citadel') {
    return (
      <g stroke="#111827" fill="none" opacity="0.24">
        {/* Tower / citadel concentric rings */}
        <circle cx="305" cy="108" r="30" strokeWidth="0.4" />
        <circle cx="305" cy="108" r="56" strokeWidth="0.35" />
        <circle cx="305" cy="108" r="80" strokeWidth="0.25" strokeDasharray="3 3" />
        <polygon points="305,58 348,133 262,133" strokeWidth="0.35" />
      </g>
    );
  }

  // Default: 'city' walls, blocks & market plaza
  return (
    <g stroke="#111827" fill="none" opacity="0.24">
      <rect x="28" y="98" width="76" height="60" strokeWidth="0.4" />
      <rect x="138" y="34" width="84" height="58" strokeWidth="0.4" />
      <rect x="256" y="90" width="96" height="64" strokeWidth="0.4" />
      <rect x="380" y="28" width="76" height="58" strokeWidth="0.4" />
      <line x1="120" y1="18" x2="120" y2="170" strokeWidth="0.25" />
      <line x1="242" y1="18" x2="242" y2="170" strokeWidth="0.25" />
      <line x1="366" y1="18" x2="366" y2="170" strokeWidth="0.25" />
    </g>
  );
}

export default function BlueprintMap({ locationName, mapData }) {
  const uid = useId().replace(/:/g, '');
  const gridId = `map-grid-${uid}`;

  const data = mapData || {
    terrain: 'city',
    lodestone: 'Nearest F2P Lodestone',
    bank: 'Local Bank / Deposit Box',
    target: locationName || 'Primary Training Spot',
    sellSpot: 'Specialty Shop / High Alch',
    routeNote: 'Follow plotted blueprint waypoints [L] -> [B] -> [*] -> [$].'
  };

  return (
    <div className="blueprint-map-card">
      <div className="blueprint-map-header">
        <div className="blueprint-map-title-group">
          <MapPin size={12} />
          <span>MAP // SECTOR SCHEMATIC</span>
        </div>
        <span className="blueprint-map-loc">{locationName}</span>
        <div className="blueprint-map-compass">
          <Compass size={12} />
          <span>N ▲</span>
        </div>
      </div>

      <div className="blueprint-map-svg-wrap">
        <svg
          className="blueprint-map-svg"
          viewBox="0 0 480 185"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={`Blueprint location schematic for ${locationName}`}
        >
          <defs>
            <pattern id={gridId} width="12" height="12" patternUnits="userSpaceOnUse">
              <path
                d="M 12 0 L 0 0 0 12"
                fill="none"
                stroke="#111827"
                strokeWidth="0.25"
                opacity="0.16"
              />
            </pattern>
          </defs>

          <rect width="480" height="185" fill={`url(#${gridId})`} />
          <TerrainOverlay terrain={data.terrain} />

          {/* Dashed travel route connecting [L] -> [B] -> [*] -> [$] */}
          <polyline
            points="64,132 178,64 305,126 416,58"
            fill="none"
            stroke="#111827"
            strokeWidth="0.9"
            strokeDasharray="4 3"
          />

          {/* Waypoint [L]: Lodestone */}
          <g transform="translate(64, 132)">
            <circle r="13" fill="#FFFFFF" stroke="#111827" strokeWidth="1" />
            <text
              y="3.5"
              textAnchor="middle"
              fill="#111827"
              fontSize="9"
              fontWeight="700"
            >
              L
            </text>
            <text
              y="26"
              textAnchor="middle"
              fill="#6B7280"
              fontSize="7.5"
              fontWeight="700"
            >
              LODESTONE
            </text>
          </g>

          {/* Waypoint [B]: Bank */}
          <g transform="translate(178, 64)">
            <circle r="13" fill="#FFFFFF" stroke="#111827" strokeWidth="1" />
            <text
              y="3.5"
              textAnchor="middle"
              fill="#111827"
              fontSize="9"
              fontWeight="700"
            >
              B
            </text>
            <text
              y="-19"
              textAnchor="middle"
              fill="#6B7280"
              fontSize="7.5"
              fontWeight="700"
            >
              BANK / CHEST
            </text>
          </g>

          {/* Waypoint [*]: Active Training Target */}
          <g transform="translate(305, 126)">
            <circle r="18" fill="none" stroke="#111827" strokeWidth="0.4" strokeDasharray="2 2" />
            <circle r="14" fill="#111827" stroke="#111827" strokeWidth="1" />
            <text
              y="3.5"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="10"
              fontWeight="700"
            >
              ★
            </text>
            <text
              y="28"
              textAnchor="middle"
              fill="#111827"
              fontSize="7.5"
              fontWeight="700"
            >
              TRAINING SPOT
            </text>
          </g>

          {/* Waypoint [$]: Shop / Altar / Anvil */}
          <g transform="translate(416, 58)">
            <circle r="13" fill="#FFFFFF" stroke="#111827" strokeWidth="1" />
            <text
              y="3.5"
              textAnchor="middle"
              fill="#111827"
              fontSize="9"
              fontWeight="700"
            >
              $
            </text>
            <text
              y="-19"
              textAnchor="middle"
              fill="#6B7280"
              fontSize="7.5"
              fontWeight="700"
            >
              SELL / PROCESS
            </text>
          </g>
        </svg>
      </div>

      <div className="blueprint-map-legend">
        <div className="map-waypoint-item">
          <span className="map-pin-badge">L</span>
          <div>
            <div className="meta-label">LODESTONE / ENTRY</div>
            <div className="map-waypoint-val">{data.lodestone}</div>
          </div>
        </div>
        <div className="map-waypoint-item">
          <span className="map-pin-badge">B</span>
          <div>
            <div className="meta-label">BANK / DEPOSIT</div>
            <div className="map-waypoint-val">{data.bank}</div>
          </div>
        </div>
        <div className="map-waypoint-item">
          <span className="map-pin-badge map-pin-active">★</span>
          <div>
            <div className="meta-label">TARGET LOCATION</div>
            <div className="map-waypoint-val">{data.target}</div>
          </div>
        </div>
        <div className="map-waypoint-item">
          <span className="map-pin-badge">$</span>
          <div>
            <div className="meta-label">PROCESS / SELL SHOP</div>
            <div className="map-waypoint-val">{data.sellSpot}</div>
          </div>
        </div>
      </div>

      {data.routeNote && (
        <div className="blueprint-map-route">
          <span className="meta-label">ROUTE NOTE:</span> {data.routeNote}
        </div>
      )}
    </div>
  );
}
