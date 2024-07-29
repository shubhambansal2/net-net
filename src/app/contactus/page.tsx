"use client";
import React from "react";
import SignupFormDemo from "@/components/signup";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import '@/../src/app/contactus/style.css';

export default function Signup() {
  return (
    <div className="contact-parent w-full dark:bg-black bg-white relative flex items-center justify-center">
    {/*<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">*/}
    {/*</div>*/}
      <SignupFormDemo />
    </div>
  );
}