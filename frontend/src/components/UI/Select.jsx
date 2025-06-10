import React from "react";

export function Select({ value, onChange, children, className = "", ...props }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

export function SelectItem({ value, children, ...props }) {
  return (
    <option value={value} {...props}>
      {children}
    </option>
  );
}

export function SelectTrigger({ children, className = "", ...props }) {
  return <div className={className} {...props}>{children}</div>;
}

export function SelectContent({ children, className = "", ...props }) {
  return <div className={className} {...props}>{children}</div>;
}

export function SelectValue({ value, options }) {
  const label = options?.find(opt => opt.value === value)?.label || "";
  return <span>{label}</span>;
}
