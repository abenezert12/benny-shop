import type { SyntheticEvent } from "react";

export function handleImageError(
  event: SyntheticEvent<HTMLImageElement, Event>,
  fallbackSrc = "/placeholder.svg"
) {
  const img = event.currentTarget;
  if (img.src !== fallbackSrc) {
    img.src = fallbackSrc;
  }
}
