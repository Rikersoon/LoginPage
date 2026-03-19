export default function SpaceIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      width="350"
      height="350"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 20px 40px rgba(147, 51, 234, 0.3))' }}
    >
      <defs>
        <radialGradient id="planetGradient1" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#ffd89b" />
          <stop offset="50%" stopColor="#ffb347" />
          <stop offset="100%" stopColor="#ff9500" />
        </radialGradient>

        <radialGradient id="planetGradient2" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#b8e0f6" />
          <stop offset="70%" stopColor="#6ba3d4" />
          <stop offset="100%" stopColor="#3b5998" />
        </radialGradient>

        <radialGradient id="planetGradient3" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#d4a5ff" />
          <stop offset="60%" stopColor="#9966ff" />
          <stop offset="100%" stopColor="#5533cc" />
        </radialGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Fundo com efeito de camadas */}
      <circle cx="200" cy="200" r="200" fill="#1a0f3f" opacity="0.5" />
      <circle cx="200" cy="200" r="180" fill="#2d1b69" opacity="0.3" />

      {/* Estrelas pequenas */}
      <circle cx="80" cy="60" r="1.5" fill="#fff" opacity="0.8" filter="url(#glow)" />
      <circle cx="320" cy="80" r="1" fill="#fff" opacity="0.6" filter="url(#glow)" />
      <circle cx="100" cy="150" r="1" fill="#fff" opacity="0.7" filter="url(#glow)" />
      <circle cx="340" cy="200" r="1.5" fill="#fff" opacity="0.8" filter="url(#glow)" />
      <circle cx="80" cy="280" r="1" fill="#fff" opacity="0.5" filter="url(#glow)" />
      <circle cx="300" cy="320" r="1.5" fill="#fff" opacity="0.7" filter="url(#glow)" />
      <circle cx="150" cy="350" r="1" fill="#fff" opacity="0.6" filter="url(#glow)" />
      <circle cx="320" cy="150" r="1" fill="#fff" opacity="0.7" filter="url(#glow)" />
      <circle cx="60" cy="200" r="1.5" fill="#fff" opacity="0.8" filter="url(#glow)" />

      {/* Anéis de Saturno */}
      <g opacity="0.6">
        <ellipse cx="120" cy="100" rx="70" ry="25" fill="none" stroke="#c4a0ff" strokeWidth="8" />
        <ellipse cx="120" cy="100" rx="65" ry="20" fill="none" stroke="#9966ff" strokeWidth="4" opacity="0.5" />
      </g>

      {/* Planeta Principal (Amarelo/Laranja) - Centro */}
      <circle cx="200" cy="220" r="70" fill="url(#planetGradient1)" filter="url(#glow)" />
      <ellipse cx="235" cy="180" rx="20" ry="35" fill="rgba(255, 255, 255, 0.15)" />

      {/* Planeta Azul */}
      <circle cx="280" cy="140" r="45" fill="url(#planetGradient2)" filter="url(#glow)" />
      <circle cx="295" cy="125" r="12" fill="rgba(255, 255, 255, 0.2)" />

      {/* Planeta Roxo */}
      <circle cx="100" cy="120" r="40" fill="url(#planetGradient3)" filter="url(#glow)" />
      <circle cx="110" cy="105" r="10" fill="rgba(255, 255, 255, 0.15)" />

      {/* Planeta pequeno Rosa */}
      <circle cx="320" cy="280" r="25" fill="#ff69b4" opacity="0.6" filter="url(#glow)" />
      <circle cx="328" cy="270" r="7" fill="rgba(255, 255, 255, 0.2)" />

      {/* Anéis de luz ao redor do planeta principal */}
      <circle
        cx="200"
        cy="220"
        r="85"
        fill="none"
        stroke="url(#planetGradient1)"
        strokeWidth="2"
        opacity="0.3"
        strokeDasharray="5,5"
      />

      {/* Orbitas de cometas */}
      <path
        d="M 150 180 Q 180 160 220 170"
        fill="none"
        stroke="#9333ea"
        strokeWidth="1.5"
        opacity="0.4"
        strokeDasharray="3,3"
      />

      {/* Cometas/Cristais flutuantes */}
      <g opacity="0.8" filter="url(#glow)">
        <polygon points="50,80 55,90 45,90" fill="#9966ff" />
        <line x1="52.5" y1="90" x2="52.5" y2="105" stroke="#9966ff" strokeWidth="1" opacity="0.6" />
      </g>

      <g opacity="0.7" filter="url(#glow)">
        <polygon points="330,50 340,65 320,65" fill="#c084fc" />
        <line x1="330" y1="65" x2="330" y2="85" stroke="#c084fc" strokeWidth="1" opacity="0.5" />
      </g>

      {/* Efeito de ondas de energia */}
      <circle
        cx="200"
        cy="220"
        r="95"
        fill="none"
        stroke="#9333ea"
        strokeWidth="1"
        opacity="0.2"
        strokeDasharray="10,5"
      />
    </svg>
  )
}
