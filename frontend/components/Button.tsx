"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={clsx(
        "px-6 py-3 rounded-xl font-semibold transition",
        variant === "primary"
          ? "bg-[#6AE3FF] text-black"
          : "bg-[#121A33] text-white border border-gray-700",
        className
      )}
    >
      {children}
    </motion.button>
  );
}
