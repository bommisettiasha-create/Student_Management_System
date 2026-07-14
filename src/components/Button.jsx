const Button = ({ text, onClick, color = '#3498db' }) => (
  <button className="btn" style={{ background: color }} onClick={onClick}>{text}</button>
)
export default Button

