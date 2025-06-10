export default function Separator({ className = "", ...props }) {
  return (
    <hr className={`border-t border-gray-200 my-4 ${className}`} {...props} />
  );
}
