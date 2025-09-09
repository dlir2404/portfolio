import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

const components = {
    h2: ({ children }) => (<h2 className="text-2xl font-bold my-4">{children}</h2>),
    h3: ({ children }) => (<h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>),
    p: ({ children }) => (<p className="mt-2 mb-3 leading-[175%]">{children}</p>),
    ul: ({ children }) => (<ul className="list-disc m-0 pl-5">{children}</ul>),
    li: ({ children }) => (<li className="p-0 pl-2 mb-3 marker:text-blue-400">{children}</li>),
    Image: ({ src, alt, ...props }: ImageProps) => (
        <div className="pt-2 pb-3">
            <Image
                src={src}
                alt={alt}
                className="rounded-2xl"
                {...props}
            />
        </div>
    ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
    return components;
}