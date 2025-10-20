import Image from "next/image";

interface AppScreenshotProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  caption?: string;
}

export default function AppScreenshot({
  src,
  alt,
  width = 300,
  height = 600,
  className = "",
  priority = false,
  caption,
}: AppScreenshotProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative overflow-hidden rounded-xl shadow-lg bg-white p-2">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="rounded-lg"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      {caption && (
        <p className="mt-3 text-sm text-text-light text-center max-w-xs">
          {caption}
        </p>
      )}
    </div>
  );
}
