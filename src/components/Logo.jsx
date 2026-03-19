export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="#9333ea"
      strokeWidth="2"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9333ea" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>

      {/* Círculo externo */}
      <circle cx="32" cy="32" r="30" stroke="url(#logoGradient)" fill="none" strokeWidth="1.5" opacity="0.5" />

      {/* Triângulo (Projeto) */}
      <path d="M 32 12 L 48 44 L 16 44 Z" fill="url(#logoGradient)" opacity="0.8" />

      {/* Ponto central */}
      <circle cx="32" cy="32" r="4" fill="#9333ea" />

      {/* Linhas decorativas */}
      <line x1="12" y1="32" x2="20" y2="32" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.6" />
      <line x1="44" y1="32" x2="52" y2="32" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.6" />
      <line x1="32" y1="12" x2="32" y2="20" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.6" />
      <line x1="32" y1="44" x2="32" y2="52" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.6" />
    </svg>
  )
}
