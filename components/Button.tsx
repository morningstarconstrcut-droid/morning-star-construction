"use client";
import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary"; // choose style
}

const Button = ({ children, href, onClick, variant = "primary" }: ButtonProps) => {
  const baseClasses =
    "px-8 py-4 rounded-2xl font-semibold text-lg transition duration-300 inline-block text-center";

  const variants = {
    primary: "bg-yellow-500 text-black hover:bg-yellow-600",
    secondary: "border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black",
  };

  const className = `${baseClasses} ${variants[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
