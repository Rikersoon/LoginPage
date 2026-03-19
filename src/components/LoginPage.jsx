import { useState } from 'react'
import './LoginPage.css'
import SpaceIllustration from './SpaceIllustration'
import UserIcon from './UserIcon'
import PasswordIcon from './PasswordIcon'
import Logo from './Logo'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!email || !password) {
      setError('Por favor, preencha todos os campos')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Por favor, insira um e-mail válido')
      return
    }

    setError('')
    console.log('Login:', { email, password, rememberMe })
    alert('Login realizado com sucesso!')
  }

  return (
    <div className="login-container">
      <div className="login-illustration">
        <SpaceIllustration />
      </div>

      <div className="login-form-wrapper">
        <div className="login-form-content">
          <div className="logo-section">
            <Logo />
            <h1 className="company-name">HProjects</h1>
            <p className="welcome-text">Bem-vindo ao nosso mundo</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <div className="input-wrapper">
                <UserIcon />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <PasswordIcon />
                <input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-options">
              <label className="remember-checkbox">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Lembrar de mim</span>
              </label>
              <a href="#" className="forgot-password">
                Esqueceu a senha?
              </a>
            </div>

            <button type="submit" className="login-button">
              ENTRAR
            </button>
          </form>

          <p className="register-text">
            Não tem uma conta? <a href="#">Crie uma agora</a>
          </p>
        </div>
      </div>
    </div>
  )
}
