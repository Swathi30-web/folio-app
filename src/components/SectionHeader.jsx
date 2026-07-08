import React from "react";
import logo from "../assets/Logo.jpeg";

export default function SectionHeader({
  number = "01",
  title = "Overview",
  
}) {
  return (
    <div className="flex items-center w-full">
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="w-8 h-8 object-contain mr-4"
      />

      {/* Number */}
      <span className="text-slate-400 text-sm font-semibold mr-4">
        {number}
      </span>

      {/* Title */}
      <span className="text-indigo-600 uppercase text-sm font-semibold tracking-wider">
        {title}
      </span>
    </div>
  );
}