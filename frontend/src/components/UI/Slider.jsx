export default function Slider({ min = 0, max = 100, value, onChange, className = "", ...props }) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      className={`w-full accent-purple-600 ${className}`}
      {...props}
    />
  );
}
