import Head from "next/head";
import BlogCard from "@/src/components/BlogCard/blogCard";
import Link from "next/link";

import gopherImage from "../../public/gopher.jpg";
import voleImage from "../../public/vole.jpg";
import moleImage from "../../public/mole.jpg";
import banner from "../../public/mole-busters-banner.jpg";

const Page = () => {
  return (
    <div className="flex-row flex-grow justify-evenly justify-items-end">
      <Head>
        <title>Mole Busters Blog</title>
        <meta name="description" content="Mole Busters Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <link rel="icon" href="icon.ico" type="image/ico" sizes="16x16" />
      <Link href="/blogs/DIY-or-Professional-Which-is-Right-for-Your-Yard-to-Get-Rid-of-Gophers">
        <BlogCard
          image={banner}
          imageAlt={"Mole Busters banner"}
          title="DIY or Professional? Which is Right for Your Yard to Get Rid of Gophers?"
          description="This article explores the pros and cons of each
          approach to help you decide which is right for your yard."
          date="May 3, 2025"
        />
      </Link>
      <Link href="/blogs/Moles-in-Your-Lawn-Understanding-Their-Motivations-and-Habits">
        <BlogCard
          image={moleImage}
          imageAlt={"Mole"}
          title="Moles in Your Lawn: Understanding Their Motivations and Habits"
          description="This article delves into the science behind mole behavior, exploring
          how they dig, what attracts them, their diet, and their habits, with a
          special focus on moles in the Bay Area."
          date="April 21, 2025"
        />
      </Link>
      <Link href="/blogs/Moles-Vs-Voles-Whats-The-Differnce">
        <BlogCard
          image={voleImage}
          imageAlt={"Image of a vole"}
          title="Moles vs Voles: What's the Difference?"
          description="Moles and voles are often confused due to their similar burrowing
          habits, but they have distinct differences in appearance, diet, and
          behavior. "
          date="April 21, 2025"
        />
      </Link>
    </div>
  );
};

export default Page;
