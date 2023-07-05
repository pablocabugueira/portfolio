import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"

export const ExperienceItem = () => {
    return (
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image
                        src="/images/icons/project-title-icon.svg"
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt="Logo da empresa X"
                    />
                </div>
                <div className="h-full w-[1px] bg-gray-800" />
            </div>

            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a
                        href="l"
                        target="_blank"
                        className="text-gray-500 hover:text-emerald-500 transition-colors"
                    >
                        @ Test1
                    </a>
                    <h4 className="text-gray-300">
                        Desenvolvedor Front-End
                    </h4>
                    <span className="text-gray-500">
                        out 2022 º 0 Momento º 6 Meses
                    </span>
                    <p className="text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nihil quisquam repellat perspiciatis temporibus qui quae quibusdam itaque, id architecto eos, earum eius at dicta, reprehenderit iure minima obcaecati ab.
                    </p>
                </div>

                <h3 className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</h3>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    <TechBadge name="React" />
                    <TechBadge name="React" />
                    <TechBadge name="React" />
                    <TechBadge name="React" />
                    <TechBadge name="React" />
                </div>
            </div>
        </div>
        
    )
}