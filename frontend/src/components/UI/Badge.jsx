export default function Badge({ children, variant = "default", className = "", ...props }) {
  const variants = {
    default: "bg-gray-200 text-gray-800",
    secondary: "bg-indigo-500 text-white",
    red: "bg-red-500 text-white",
    green: "bg-green-500 text-white",
    blue: "bg-blue-500 text-white",
  };
  return (
    <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${variants[variant] || variants.default} ${className}`} {...props}>
      {children}
    </span>
  );
}
