import { CustomLink } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

export const HighlightedCards = () => {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image
                    width={420}
                    height={304}
                    src="/images/preview.png"
                    alt="Thumbnail do projeto BitCent"
                    className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
                />
            </div>

            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <Image
                        width={20}
                        height={20}
                        alt=""
                        src="/images/icons/project-title-icon.svg"
                    />
                    BitCent
                </h3>

                <p className="text-gray-400 my-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sed labore facilis velit repudiandae ad repellendus atque commodi, debitis eveniet perspiciatis maiores in quidem ipsum a rerum dignissimos minima quibusdam quod sequi fugit quos consequuntur facere iste. Esse dolor mollitia, voluptate tempore sint beatae rem, quod aliquid excepturi rerum harum.
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                </div>

                <CustomLink href="/projects/bitcent">
                    Ver projeto
                    <HiArrowNarrowRight />
                </CustomLink>
            </div>
        </div>
    )
}