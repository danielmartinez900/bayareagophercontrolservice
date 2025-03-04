import Head from "next/head";
import BlogCard from "@/src/components/BlogCard/blogCard";

import image from "../../public/mole-hole.jpeg";
import backyardImage from "../../public/backyard.jpeg";
import gopherImage from "../../public/gopher.jpg";
import voleImage from "../../public/vole.jpg";
import clouds from "../../public/clouds.jpeg";

const Page = () => {
  return (
    <div className="flex-row flex-grow justify-evenly justify-items-end">
      <Head>
        <title>Mole Busters blog</title>
        <meta name="description" content="Mole Busters Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <link rel="icon" href="icon.jpg" type="image/jpg" sizes="16x16" />
      <a href="/blogs/Top-5-Signs-You-Have-a-Gopher-Problem-in-the-Bay-Area">
        <BlogCard
          image={gopherImage}
          title="Top 5 Signs You Have a Gopher Problem in the Bay Area"
          description="Gophers can cause a lot of problems to your yard. Here are 5 simple
          ways you can identity a gopher problem early on.  "
          date="02/18/2025"
        />
      </a>
      <a href="/blogs/Moles-Vs-Voles-Whats-The-Differnce">
        <BlogCard
          image={voleImage}
          title="Moles vs Voles: What's the Difference?"
          description="Moles and voles are often confused due to their similar burrowing
          habits, but they have distinct differences in appearance, diet, and
          behavior. "
          date="02/20/2025"
        />
      </a>
      <a href="/blogs/How-Climate-Affects-Moles-and-Gophers-in-the-Bay-Area">
        <BlogCard
          image={clouds}
          title="How Climate Affects Moles and Gophers in the Bay Area"
          description="The Bay Area’s unique climate plays a significant role in the behavior and activity of moles and gophers. Understanding these effects can help you better manage and prevent these pests from invading your yard."
          date="02/20/2025"
        />
      </a>
    </div>
  );
};

export default Page;
