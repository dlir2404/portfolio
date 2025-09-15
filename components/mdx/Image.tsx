import Image, { ImageProps } from "next/image";

export default function MDXImage({ src, alt, ...props }: ImageProps) {
    return (
        <div className="pt-2 pb-3 flex justify-center items-center">
            <Image
                src={src}
                alt={alt}
                className="rounded-lg w-full h-auto"
                {...props}
            />
        </div>
    )
}