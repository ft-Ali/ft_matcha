import React from "react";

export function Tabs({ value, onValueChange, children, className = "", ...props }) {
  return (
    <div className={className} {...props}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { value, onValueChange })
      )}
    </div>
  );
}

export function TabsList({ children, className = "", ...props }) {
  return (
    <div className={`flex space-x-2 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value: val, children, value, onValueChange, className = "", ...props }) {
  const isActive = val === value;
  return (
    <button
      className={`${className} ${isActive ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" : "bg-transparent text-gray-700"}`}
      onClick={() => onValueChange(val)}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value: val, children, value, className = "", ...props }) {
  if (val !== value) return null;
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
