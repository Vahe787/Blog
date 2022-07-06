import React from "react";

const Input = ({ handleValue, text, type, placeholder, value }) => {
  return (
    <div className="mt-4">
      <label className="block text-sm">{text}</label>
      <input
        onChange={handleValue}
        type={type}
        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export { Input };
