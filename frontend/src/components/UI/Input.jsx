export default function Input({ className = "", ...props }) {
  return (
    <input
      className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500 ${className}`}
      {...props}
    />
  );
}
