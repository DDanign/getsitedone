import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/** @titleBy title */
export interface Card {
    icon: ImageWidget;
    alt: string;
    title: string;
    /** @format html */
    description: string;
    width: number;
    height: number;
}

export interface Props {
    /** @format color-input */
    backgroundColor?: string;
    /** @format html */
    title?: string;
    cards: Card[]
}

function Cards({ cards, title, backgroundColor }: Props) {
    return (
        <div style={{ backgroundColor }}>
            <div class="container flex flex-col gap-20 py-16">
                {title && <div dangerouslySetInnerHTML={{ __html: title }} />}
                <div class="flex justify-between gap-8 items-center flex-wrap">
                    {cards.map(({ alt, description, icon, title, width, height }) =>
                        <div class="flex flex-col gap-6 border-2 border-[#C9CFCF] rounded-[40px] bg-white p-12 text-black" style={{ width, height }} >
                            <Image src={icon} alt={alt} width={40} height={40} />
                            <p class="text-3xl font-bold">{title}</p>
                            <div dangerouslySetInnerHTML={{ __html: description }} />
                        </div>)}
                </div>
            </div>
        </div>
    );
}

export default Cards;