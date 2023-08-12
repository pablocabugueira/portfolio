"use client"

import Image from "next/image"
import { TechBadge } from "../../../tech-badge"
import { CustomButton } from "../../../button"
import { HiArrowNarrowRight } from "react-icons/hi"
import { HomePageInfo } from "@/app/types/page-info"
import { RichText } from "@/app/components/rich-text"
import { CMSIcon } from "@/app/components/cms-icon"
import { motion } from "framer-motion"
import { techBadgeAnimation } from "@/app/lib/animations"

type HomeSectionProps = {
    homeInfo: HomePageInfo
}

export const HeroSection = ({ homeInfo }: HomeSectionProps) => {
    const HandleContact = () => {
        const contactSection = document.querySelector("#contact")
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth"})
        }
    }

    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <motion.div
                    className="w-full lg:max-w-[530px]"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="font-mono text-emerald-400">Olá, meu nome é</p>
                    <strong className="text-4xl font-medium mt-2">Pablo Cabugueira</strong>

                    <div className="text-gray-400 my-6 text-sm sm:text-base">
                        <RichText content={homeInfo.introduction.raw} />
                    </div>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {homeInfo.technologies.map((tech, i) => (
                            <TechBadge
                                name={tech.name}
                                key={`intro-tech-${tech.name}`}
                                {...techBadgeAnimation}
                                transition={{ duration: 0.2, delay: i * 0.1 }}
                            />
                        ))}
                    </div>

                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <CustomButton className="w-max shadow-button" onClick={HandleContact}>
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </CustomButton>

                        <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
                            {homeInfo.socials.map((contact, index) => (
                                <a
                                    href={contact.url}
                                    key={`contact-${index}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-100 transition-colors"
                                >
                                    <CMSIcon icon={contact.iconSvg} />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 200, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 200, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="origin-center"
                >
                    <Image
                        className="w-[315px] h-[300px] lg:w-[427px] lg:h-[404px] mb-6 lg:mb-0 rounded-lg object-cover"
                        width={420}
                        height={404}
                        src={homeInfo.profilePicture.url}
                        alt="Astronaut Picture"
                    />
                </motion.div>
            </div>
        </section>
    )
}