"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import logoImage from "@/assets/logo.png";

type LogoProps = {
  className?: string;
  href?: string;
  size?: "header" | "footer";
};

export function Logo({ className = "", href = "/", size = "header" }: LogoProps) {
  const [imgError, setImgError] = useState(false);

  const dimensions = size === "header" ? { width: 180, height: 48 } : { width: 150, height: 40 };
  const heightClass = size === "header" ? "h-10" : "h-8";

  const content = imgError ? (
    <span className="font-display font-semibold tracking-tight">Meridian Platforms</span>
  ) : (
    <Image
      src={logoImage}
      alt="Meridian Platforms"
      {...dimensions}
      className={`${heightClass} w-auto dark:invert ${className}`}
      priority={size === "header"}
      onError={() => setImgError(true)}
    />
  );

  return (
    <Link href={href} className="flex items-center">
      {content}
    </Link>
  );
}
