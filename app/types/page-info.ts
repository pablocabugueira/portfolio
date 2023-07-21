import { RichTextContent } from "@graphcms/rich-text-types"
import { KnownTech, Project } from "./projects"

export type Social = {
    url: string
    iconSvg: string
}

export type HomePageInfo = {
    introduction: {
        raw: RichTextContent
    }
    technologies: KnownTech[]
    profilePicture: {
        url: string
    }
    socials: Social[]
    knownTechs: KnownTech[]
    highlightedProjects: Project[]
}

export type HomePageData = {
    page: HomePageInfo
}