export default function Label({ children, htmlFor = "", className = "", ...props }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-gray-700 font-medium mb-1 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}
