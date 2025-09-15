import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Carousel as LibCarousel } from "@/components/ui/carousel";
import Image from "next/image";

export interface CarouselProps {
    images: string[];
}

export function Carousel({ images }: CarouselProps) {
    return (
        <LibCarousel className="w-full">
            <CarouselContent>
                {images.map((src, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Image src={src}
                                alt={`Slide ${index + 1}`}
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </LibCarousel>
    )
}
