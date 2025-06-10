export function Avatar({ children, className = "", ...props }) {
  return (
    <div className={`relative rounded-full overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt, className = "", ...props }) {
  return <img src={src} alt={alt} className={`w-full h-full object-cover ${className}`} {...props} />;
}

export function AvatarFallback({ children, className = "", ...props }) {
  return (
    <div className={`flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold ${className}`} {...props}>
      {children}
    </div>
  );
}
