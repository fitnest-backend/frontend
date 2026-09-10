"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";

type RemoteImageProps = Omit<ImageProps, "src"> & {
  src: string;
  fallback?: string;
};

function isStaticAsset(src: string) {
  return src.startsWith("/images/") || src.startsWith("/icons/");
}

const RemoteImage = ({
  src,
  fallback = "/images/main-page.webp",
  alt,
  ...props
}: RemoteImageProps) => {
  const [current, setCurrent] = useState(src || fallback);

  useEffect(() => {
    setCurrent(src || fallback);
  }, [src, fallback]);

  const remote = !isStaticAsset(current);

  return (
    <Image
      {...props}
      alt={alt}
      src={current || fallback}
      unoptimized={remote}
      onError={() => {
        if (current !== fallback) setCurrent(fallback);
      }}
    />
  );
};

export default RemoteImage;
