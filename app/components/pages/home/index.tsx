import Image from "next/image"
import { TechBadge } from "../../tech-badge"
import { CustomButton } from "../../button"
import { HiArrowNarrowRight } from "react-icons/hi"
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from "react-icons/tb"

const MOCK_DOCKS = [
    {
        url: "https://github.com/pablocabugueira",
        icon: <TbBrandGithub />
    },
    {
        url: "https://www.linkedin.com/in/pablo-galvao-cabugueira/",
        icon: <TbBrandLinkedin />
    },
    {
        url: "https://wa.me/5511946060422",
        icon: <TbBrandWhatsapp />
    },
]

export const HeroSection = () => {
    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-emerald-400">Olá, meu nome é</p>
                    <strong className="text-4xl font-medium mt-2">Pablo Cabugueira</strong>

                    <p className="text-gray-400 my-6 text-sm sm:text-base">Olá, meu nome é Pablo Cabugueira e eu sou um desenvolvedor front-end apaixonado por tecnologia.</p>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <TechBadge
                                name="Next.js"
                            />
                        ))}
                    </div>

                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <CustomButton className="w-max shadow-button">
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </CustomButton>

                        <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
                            {MOCK_DOCKS.map((contact, index) => (
                                <a
                                    href={contact.url}
                                    key={`contact-${index}`}
                                    target="_blank"
                                    className="hover:text-gray-100 transition-colors"
                                >
                                    {contact.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <Image
                    className="w-[315px] h-[300px] lg:w-[427px] lg:h-[404px] mb-6 lg:mb-0 rounded-lg object-cover"
                    width={420}
                    height={404}
                    src="/images/header-img.svg"
                    alt="Astronaut Picture"
                />
            </div>
        </section>
    )
}