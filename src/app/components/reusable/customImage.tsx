import Image from "next/image";
import { CustomImage } from "@/app/interfaces";

export default function CustomImage({ src, width, height, alt, priority, className, style, sizes }: CustomImage) {
  const prty = priority ? true : false

  return (
    <>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        priority={prty}
        className={className}
        style={style}
        sizes={sizes}
        loading="lazy"
      />
    </>
  )
}