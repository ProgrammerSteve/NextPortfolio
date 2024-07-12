
type DescriptionProps = {
    description: string;
  };
  const ProjectDescription = ({ description }: DescriptionProps) => {
    return (
      <div className="flex-1 md:flex-none px-2">
        <p className="text-xs sm:text-sm font-semibold">Description</p>
        <p className="text-xs lg:text-sm">{description}</p>
      </div>
    );
  };
  export default ProjectDescription