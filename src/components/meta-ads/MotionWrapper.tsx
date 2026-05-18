"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapperProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function MotionWrapper({
    children,
    className = "",
    delay = 0,
}: MotionWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.65, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}