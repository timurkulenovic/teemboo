interface ProductImageProps {
  color: string;
  colorName?: string;
  className?: string;
  /** show the color name label */
  labeled?: boolean;
}

const TEE_PATH =
  "M70 42 C74 56 126 56 130 42 L162 56 L150 84 L134 75 L134 176 " +
  "C134 179 131 181 128 181 L72 181 C69 181 66 179 66 176 L66 75 " +
  "L50 84 L38 56 Z";

const TEE_COLLAR = "M82 38 C90 50 110 50 118 38";

export default function ProductImage({
  color,
  colorName,
  className = "",
  labeled = false,
}: ProductImageProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label={colorName ? `${colorName} t-shirt` : "t-shirt"}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`bg-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3f1ec" />
          <stop offset="100%" stopColor="#e9e6df" />
        </linearGradient>
        <filter id={`soft-${color.replace("#", "")}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="3"
            stdDeviation="4"
            floodColor="#000000"
            floodOpacity="0.12"
          />
        </filter>
        <linearGradient id={`shade-${color.replace("#", "")}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.14" />
        </linearGradient>
      </defs>

      <rect width="200" height="200" fill={`url(#bg-${color.replace("#", "")})`} />

      <g filter={`url(#soft-${color.replace("#", "")})`}>
        <path d={TEE_PATH} fill={color} />
      </g>
      <path d={TEE_PATH} fill={`url(#shade-${color.replace("#", "")})`} opacity="0.9" />
      <path
        d={TEE_COLLAR}
        fill="none"
        stroke="#00000022"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {labeled && colorName && (
        <text
          x="100"
          y="196"
          textAnchor="middle"
          fontSize="7"
          letterSpacing="2"
          fill="#6b6b6b"
          fontFamily="Inter, sans-serif"
        >
          {colorName.toUpperCase()}
        </text>
      )}
    </svg>
  );
}
