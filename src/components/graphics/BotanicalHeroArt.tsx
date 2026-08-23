export function BotanicalHeroArt({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 520 560"
        className="h-full w-full animate-drift"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        {/* technical sketches */}
        <g stroke="#c4b39a" strokeWidth="1" opacity="0.55">
          <circle cx="260" cy="280" r="210" />
          <circle cx="260" cy="280" r="160" strokeDasharray="4 6" />
          <circle cx="260" cy="280" r="100" />
          <line x1="50" y1="280" x2="470" y2="280" />
          <line x1="260" y1="60" x2="260" y2="500" />
          <path d="M90 180h80 M90 200h60 M350 420h90 M350 440h70" />
          <path d="M120 360c20-40 40-40 60 0s40 40 60 0" />
          <path d="M340 140c10 20 30 30 50 20" />
          <rect x="70" y="90" width="40" height="28" rx="2" />
          <text x="76" y="108" fill="#b89c6a" fontSize="10" opacity="0.8">
            12.4°
          </text>
        </g>

        {/* molecular-ish nodes */}
        <g stroke="#b89c6a" strokeWidth="1.2" opacity="0.45">
          <circle cx="120" cy="120" r="6" fill="#efe9df" />
          <circle cx="150" cy="95" r="4" fill="#efe9df" />
          <circle cx="175" cy="125" r="5" fill="#efe9df" />
          <line x1="120" y1="120" x2="150" y2="95" />
          <line x1="150" y1="95" x2="175" y2="125" />
          <line x1="120" y1="120" x2="175" y2="125" />
          <circle cx="400" cy="420" r="5" fill="#efe9df" />
          <circle cx="430" cy="400" r="4" fill="#efe9df" />
          <circle cx="445" cy="435" r="6" fill="#efe9df" />
          <line x1="400" y1="420" x2="430" y2="400" />
          <line x1="430" y1="400" x2="445" y2="435" />
          <line x1="400" y1="420" x2="445" y2="435" />
        </g>

        {/* plant stem */}
        <path
          d="M255 500c-4-70 8-140 4-210 3-55-6-110 2-165"
          stroke="#2f5a45"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* leaves */}
        <g>
          <path
            d="M258 200c-55-10-95 25-105 70 55 8 90-15 105-70z"
            fill="#3f7a58"
          />
          <path
            d="M258 200c55-8 95 30 100 72-52 5-88-18-100-72z"
            fill="#4d8f66"
          />
          <path
            d="M260 290c-70 5-110 50-112 100 68-8 100-40 112-100z"
            fill="#356f4d"
          />
          <path
            d="M260 290c65 10 108 55 110 102-65-12-98-45-110-102z"
            fill="#45845c"
          />
          <path
            d="M258 150c-40-35-90-25-115 10 50 28 85 20 115-10z"
            fill="#4f9368"
          />
          <path
            d="M262 150c42-32 92-20 112 15-48 25-82 18-112-15z"
            fill="#5aa374"
          />
        </g>

        {/* seed pods */}
        <g fill="#8b5e3c">
          <ellipse cx="230" cy="430" rx="18" ry="28" transform="rotate(-18 230 430)" />
          <ellipse cx="275" cy="445" rx="16" ry="26" transform="rotate(12 275 445)" />
          <ellipse cx="248" cy="470" rx="14" ry="22" transform="rotate(-8 248 470)" />
        </g>
        <g fill="#a06d45">
          <ellipse cx="230" cy="422" rx="8" ry="12" transform="rotate(-18 230 422)" />
          <ellipse cx="275" cy="438" rx="7" ry="11" transform="rotate(12 275 438)" />
        </g>
      </svg>
    </div>
  );
}
