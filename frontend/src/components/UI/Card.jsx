export function Card({ children, className = "", ...props }) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "", ...props }) {
  return (
    <div className={`p-6 border-b border-gray-100 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "", ...props }) {
  return (
    <h3 className={`text-2xl font-bold mb-4 text-gray-800 ${className}`} {...props}>
      {children}
    </h3>
  );
}
