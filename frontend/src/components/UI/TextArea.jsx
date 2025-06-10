export default function TextArea({ className = "", ...props }) {
  return (
    <textarea
      className={`border border-gray-300 rounded px-3 py-2 w-full min-h-[80px] focus:outline-none focus:ring-2 focus:ring-purple-500 resize-y ${className}`}
      {...props}
    />
  );
}
