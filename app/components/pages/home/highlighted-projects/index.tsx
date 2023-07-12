import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { HighlightedCards } from "./project-cards"
import { CustomLink } from "@/app/components/link"
import { HiArrowNarrowRight } from "react-icons/hi"

export const HighlightedProjects = () => {
    return (
        <section className="container py-16">
            <SectionTitle
                subtitle="destaques"
                title="Projetos em destaque"
            />
            <HorizontalDivider className="mb-16" />

            <div>
                <HighlightedCards />
                <HorizontalDivider className="my-16" />
                <HighlightedCards />
                <HorizontalDivider className="my-16" />

                <p className="flex items-center gap-1.5">
                    <span className="text-gray-400">Se interessou?</span>
                    <CustomLink className="inline-flex" href="/projects">
                        Ver todos
                        <HiArrowNarrowRight />
                    </CustomLink>
                </p>
            </div>
        </section>
    )
}