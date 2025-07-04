export default function Tag({ isActive, isDisabled, className = '', children }) {
  const base = 'inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm';
  return (
    <span
      className={`
        ${base}
        ${isActive ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'}
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
