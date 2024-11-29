import Link from "next/link";
import type { LinkObj } from "../../page";

interface Props {
  tags: string[];
  links: LinkObj[];
  keyId: number;
}
const ProjectTagsAndLinks = ({ tags, links, keyId }: Props) => {
  return (
    <div className="flex-1 md:flex-none px-2">
      <p className="text-xs sm:text-sm font-semibold">Tags</p>
      <div className="flex flex-wrap">
        {tags.map((tag, ind) => (
          <span
            key={`tag-${keyId}-${ind}`}
            className="bg-gray-500 text-white rounded-full px-2 text-xs justify-center align-middle mb-1"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="text-xs sm:text-sm font-semibold">Links: </span>
      {links.map((link, ind) => (
        <Link href={link.url} key={`link-${keyId}-${ind}`} target="_blank">
          <span className="bg-gray-800 text-white rounded-full px-2 text-xs justify-center align-middle mb-1">
            {link.title}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default ProjectTagsAndLinks;
