"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
};

export default function MediaImage({
  src,
  alt,
  className = "",
  fallbackLabel = "Foto akan ditambahkan",
}: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-[#eef4fb] via-white to-[#d9e8f8] ${className}`}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}

      {failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0d3c78] text-white shadow-lg">
            <ImageIcon className="h-5 w-5" />
          </div>
          <p className="max-w-[220px] text-sm font-bold text-[#31567e]">
            {fallbackLabel}
          </p>
        </div>
      )}
    </div>
  );
}
