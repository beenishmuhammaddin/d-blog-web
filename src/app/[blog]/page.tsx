import Image from "next/image";
export default function page() {
  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
      HAPPY NEW YEAR! New Years Eve: Regular Hours | New Years Day: 11AM-7PM (Sales Only)

</h1>
      {/* Featured Image */}
      <Image
        src="/img.jpg"
        width={500}
        height={500}
        alt="AI for everyone"
        className="rounded"
      />
      {/* Blog Summary Section */}
      <section>
      <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
        Summary
      </h2>
      <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
      We Introduced the Fancy, Stunning and Modern Stylish Women Abayas, Kaftans,Arabic Jalabiyat,Jilbabs,
      Thobe Beautiful Hijabs, Scarfs And Turbans At Factory Prices.
      All Abaya Come With Matching Sheila Embroidery Stone Multi Colors Shinny Stones, Thread And Patch Work.
      All Abaya Made With Super Soft Lightweight Original Fabric Like Salona Nida Emirati Nida, Classic Nida,Ameera Nida,Shinning Zoom,Satin,Crepe,Shimmer and Armani Silk Satin Fabric.
      </p>
      </section>
      {/* Author Section (Image & Bio) */}
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <Image
          src="/img2.jpg"
          width={200}
          height={200}
          alt="author"
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-dark dark:text-light">BEENISH</h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
          learning Web Developing | Expert in WordPress Nextjs Reactjs Nodejs Typescript JavaScript 
         | student of GIAIC
          </p>
        </div>
      </section>

      {/* Main Body of Blog */}
      <p className="text-lg leading-normal text-dark/80 dark:text-light/80">
      In the ever-expanding realm of modest fashion, the curiosity surrounding various garments worn by Muslim women, especially converts is on the rise.

Hijab, jilbab, khimar, abaya, and niqab are among the commonly worn garments in the world, each serving a unique purpose in achieving a modest Islamic look.

To demystify these garments and highlight their significance in modest fashion, we'll dive into their definitions, differences, and roles inshallah.!
      </p>
    </article>
  );
}