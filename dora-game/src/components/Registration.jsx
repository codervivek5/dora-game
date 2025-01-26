import React from 'react';
import { Link } from "react-router-dom";
import { MatrixRainingLetters } from "react-mdr";

function Registration() {
  return (
    <>
        <MatrixRainingLetters key="foo-bar" custom_class="m-0 p-0" />
        <h1>Welcome to the App</h1>
        <p>Start your journey now!</p>
        <Link to="/Registration" className="register-button">Register</Link>
        
    </>
  )
}

export default Registration

// ---------------------------------------------------------------
const MatrixRainEffect = () => {
    const canvasRef = useRef(null)
  
    useEffect(() => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      
      const resizeCanvas = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
      
      resizeCanvas()
      window.addEventListener('resize', resizeCanvas)
  
      const characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      const charArray = characters.split('')
      
      const fontSize = 16
      const columns = canvas.width / fontSize
  
      const drops = Array(Math.floor(columns)).fill(1)
  
      const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
  
        ctx.fillStyle = '#0F0'
        ctx.font = `${fontSize}px monospace`
  
        for (let i = 0; i < drops.length; i++) {
          const text = charArray[Math.floor(Math.random() * charArray.length)]
          ctx.fillText(text, i * fontSize, drops[i] * fontSize)
  
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0
          }
  
          drops[i]++
        }
      }
  
      const animationInterval = setInterval(draw, 33)
  
      return () => {
        clearInterval(animationInterval)
        window.removeEventListener('resize', resizeCanvas)
      }
    }, [])
  
    return (
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ filter: 'brightness(0.7)', overflow: 'hidden' }} // Added overflow hidden to remove x-axis scroll
      />
    )
  }
  