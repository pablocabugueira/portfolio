import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { HighlightedCards } from "./project-cards"
import { CustomLink } from "@/app/components/link"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Project } from "@/app/types/projects"

type HighlightedProjectsProps = {
    projects: Project[]
}

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
    return (
        <section className="container py-16">
            <SectionTitle
                subtitle="destaques"
                title="Projetos em destaque"
            />
            <HorizontalDivider className="mb-16" />

            <div>
                {projects?.map(project => (
                    <div key={project.slug}>
                        <HighlightedCards project={project} />
                        <HorizontalDivider className="my-16" />
                    </div>
                ))}
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