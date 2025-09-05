export function Modal({ open, title, children, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white rounded shadow max-w-lg w-full">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-semibold">{title}</h3>
          <button onClick={onClose} aria-label="Zamknij">✕</button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
