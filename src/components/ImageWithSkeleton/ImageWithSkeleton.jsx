import { useState } from "react";

/**
 * Image with skeleton shimmer loading state.
 * Fades in after load. Maintains aspect ratio to prevent layout shifts.
 */
export default function ImageWithSkeleton({
  src,
  alt,
  className = "",
  objectFit = "cover",
  aspectRatio,
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-neutral-200 ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* Shimmer skeleton */}
      {!loaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%]" />
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 text-neutral-400 text-sm">
          Image unavailable
        </div>
      )}

      {/* Actual image */}
      {!error && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`w-full h-full transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectFit }}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}
