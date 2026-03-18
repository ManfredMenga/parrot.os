export default function ParallaxDivider({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-[120%] object-cover object-center parallax-divider-img"
          style={{ marginTop: '-10%' }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
    </div>
  );
}
