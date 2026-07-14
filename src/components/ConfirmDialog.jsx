const ConfirmDialog = ({ message, onConfirm, onCancel }) => (
  <div className="dialog-overlay">
    <div className="dialog">
      <h3>{message}</h3>
      <Button text="Yes" color="#e74c3c" onClick={onConfirm} />
      <Button text="Cancel" color="#95a5a6" onClick={onCancel} />
    </div>
  </div>
)
export default ConfirmDialog

