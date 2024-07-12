"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ImageProps = {
    title: string;
    imageSrc: StaticImageData;
    imageLink: string;
    isLazy: boolean;
};

const ProjectImage = ({ title, imageSrc, imageLink, isLazy }: ImageProps) => {
    return (
      <div className="sm:w-[300px] sm:min-w-[300px] h-full flex flex-col justify-items-center align-center">
        <h1 className="mx-auto font-bold">{title}</h1>
        <div className="relative mx-auto">
          <Link href={imageLink} target="_blank">
            {isLazy ? (
              <div
                style={{
                  maxWidth: "400px",
                  width: "100%",
                  aspectRatio: "2",
                }}
              >
                <Image
                  src={imageSrc}
                  style={{ width: "100%", height: "100%" }}
                  alt={`Project:${title}`}
                  loading="lazy"
                  placeholder="blur"
                />
              </div>
            ) : (
              <div
                style={{
                  maxWidth: "400px",
                  width: "100%",
                  aspectRatio: "2",
                }}
              >
                <Image
                  src={imageSrc}
                  style={{ width: "100%", height: "100%" }}
                  alt={`Project:${title}`}
                  loading="eager"
                  placeholder="blur"
                />
              </div>
            )}
          </Link>
        </div>
      </div>
    );
  };
  export default ProjectImage