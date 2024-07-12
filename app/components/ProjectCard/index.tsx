import type { Project } from "@/app/page";
import ProjectDescription from "./ProjectDescription";
import ProjectTagsAndLinks from "./ProjectTagsAndLinks";
import ProjectImage from "./ProjectImage";

interface Props{
    project:Project;
}

const ProjectCard = ({ project }: Props) => {
    return (
        <>
        <div className="mb-12 sm:mb-0 sm:h-[300px] flex flex-col sm:flex-row gap-2">
        <ProjectImage
            title={project.title}
            imageSrc={project.imageSrc}
            imageLink={project.imageLink}
            isLazy={project.isLazy}
            key={`image-${project.id}`}
        />
        <div className="h-full grow flex flex-col sm:flex-row md:flex-col ">
            <ProjectDescription
            description={project.description}
            key={`description-${project.id}`}
            />
            <ProjectTagsAndLinks
            tags={project.tags}
            links={project.links}
            keyId={project.id}
            key={`tags-${project.id}`}
            />
        </div>
        
        </div>
        <hr className="block sm:hidden border-t-4 border-gray-300 mb-8" />
        </>
    );
};
export default ProjectCard