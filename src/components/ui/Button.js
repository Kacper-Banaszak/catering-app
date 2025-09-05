// components/ui/Button.js
import Link from "next/link";
const base = "inline-flex items-center justify-center px-4 py-2 rounded border transition";
const variants = {
  primary: "bg-green-600 text-white border-green-600 hover:bg-green-700",
  secondary: "bg-blue-600 text-white border-blue-600 hover:bg-blue-700",
  outline: "bg-white text-gray-800 border-gray-300 hover:bg-gray-50",
};
export function Button({ children, link, onClick, type = "button", variant = "primary" }) {
  const cls = `${base} ${variants[variant] ?? variants.primary}`;
  if (link) return <Link href={link} className={cls}>{children}</Link>;
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
}
