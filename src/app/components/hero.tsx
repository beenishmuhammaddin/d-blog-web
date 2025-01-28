import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Hero = ({ data }: { data: Blog }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <Image
                className="lg:h-fit md:h-36 w-full object-cover object-center"
                src={urlFor(data.image).url()}
                alt="blog"
                width={700}
                height={475}
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {data.Title}
                </h1>
                <p className="leading-relaxed mb-3">{data.Paragraph}</p>
                <div className="flex items-center flex-wrap">
                  <Link
                    href={`/blog/${data.slug}`}
                    className="text-black-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <Image
              className="lg:h-fit md:h-36 w-full object-cover object-center"
              src={urlFor(data.image).url()}
              alt="blog"
              width={700}
              height={475}
            />
            <div className="p-6">
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                {data.Title}
              </h1>
              <p className="leading-relaxed mb-3">{data.Paragraph}</p>
              <div className="flex items-center flex-wrap">
                <Link
                  href={`/blog/${data.slug}`}
                  className="text-black-500 inline-flex items-center md:mb-2 lg:mb-0"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
