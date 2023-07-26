import { RichText as CMSRichText } from "@graphcms/rich-text-react-renderer"
import { ComponentProps } from "react"

type RichTextProps = ComponentProps<typeof CMSRichText>

export const RichText = ({...props}: RichTextProps) => {
    return (
        <CMSRichText
            {...props}
            renderers={{
                bold: ({ children }) => (
                    <strong className="text-gray-50 font-medium">{children}</strong>
                ),
                ul: ({ children }) => (
                    <ul className="list-disc list-inside pl-2 flex flex-col gap-1">
                        {children}
                    </ul>
                ),
                a: ({ children, ...props }) => (
                    <a
                        {...props}
                        className="hover:text-emerald-500 transition-colors underline"
                    >
                        {children}
                    </a>
                )
            }}
        />
    )
}