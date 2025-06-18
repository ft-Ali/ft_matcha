export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold transition hover:from-pink-600 hover:to-purple-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
