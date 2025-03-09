import Head from "next/head";
import Image from "next/image";

import image from "../../public/clouds.jpeg";

const Page = () => {
  return (
    <div className="p-2 mx-5 h-auto">
      <Head>
        <title>How Climate Affects Moles and Gophers in the Bay Area</title>
        <meta
          name="description"
          content="How Climate Affects Moles and Gophers in the Bay Area"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <link rel="icon" href="/icon.ico" type="image/ico" sizes="16x16" />

      <div>
        <h1 className="text-2xl font-bold text-green-700 my-2 content-center">
          How Climate Affects Moles and Gophers in the Bay Area
        </h1>
        <div className="max-h-[300px] flex">
          <Image
            src={image}
            alt='Image of clouds'
            width={"20%"}
            // layout="responsive"
            style={{ objectFit: "cover", borderRadius: 8 }}
          />
        </div>
        <p className="font-medium">
          The Bay Area’s unique climate plays a significant role in the behavior
          and activity of moles and gophers. Understanding these effects can
          help you better manage and prevent these pests from invading your
          yard.
        </p>
      </div>

      <div className="my-5">
        <p className="font-bold text-green-700 text-xl my-1">
          Year-Round Activity
        </p>
        <p>
          The Bay Area enjoys a temperate climate throughout the year, which
          means that moles and gophers remain active all year long. Unlike
          regions with harsh winters, where these pests might become inactive,
          the mild temperatures in the Bay Area allow them to continue burrowing
          and foraging without significant interruption.
        </p>
      </div>

      <div className="my-5">
        <p className="font-bold text-green-700 text-xl my-1">
          Seasonal Activity Peaks
        </p>
        <p>
          While moles and gophers are active year-round, their activity tends to
          peak during certain seasons:
        </p>
        <h1 class="font-medium text-lg text-green-700">Spring</h1>
        <p>
          As temperatures rise in the spring, the ground warms up, making it
          easier for moles and gophers to dig. This is a prime time for them to
          expand their tunnel systems and search for food.
        </p>
        <h1 class="font-medium text-lg text-green-700">Fall</h1>
        <p>
          Increased rainfall in the fall softens the soil, making it easier for
          these pests to burrow. This season also sees a spike in their activity
          as they prepare for the cooler months.
        </p>
      </div>

      <div className="my-5">
        <p className="font-bold text-green-700 text-xl my-1">
          Impact of Moisture
        </p>
        <p>
          Moisture levels significantly influence mole and gopher activity. Both
          pests are attracted to moist soil, which is easier to dig through and
          often richer in food sources:
        </p>
        <h1 class="font-medium text-lg text-green-700">Rainy Seasons</h1>
        <p>
          During the rainy seasons, the soil becomes softer, encouraging more
          burrowing activity. This is particularly true in the fall when
          increased precipitation makes the ground more pliable.
        </p>
        <h1 class="font-medium text-lg text-green-700">Dry Periods</h1>
        <p>
          During dry periods, moles and gophers may dig deeper to find moisture
          and food. This can lead to more extensive tunnel systems as they
          search for suitable conditions.
        </p>
      </div>

      <div className="my-5">
        <p className="font-bold text-green-700 text-xl my-1">
          Adaptation to Climate Variability
        </p>
        <p>
          Moles and gophers are highly adaptable creatures. They adjust their
          burrowing behavior and activity levels based on the changing climate
          conditions:
        </p>
        <h1 class="font-medium text-lg text-green-700">
          Temperature Fluctuations
        </h1>
        <p>
          Moles, for example, are known to lower their metabolic rates during
          colder periods, allowing them to conserve energy while remaining
          active underground.
        </p>
        <h1 class="font-medium text-lg text-green-700">Food Storage</h1>
        <p>
          Both moles and gophers increase their foraging efforts before winter
          to store food in their tunnels. This ensures they have enough
          resources to sustain them during less favorable conditions.
        </p>
      </div>

      <p className="font-medium">
        The Bay Area’s temperate climate allows moles and gophers to remain
        active throughout the year, with peak activity during the spring and
        fall. By understanding how climate affects these pests, you can better
        anticipate their behavior and implement effective prevention strategies.
        Keeping your yard well-maintained and monitoring moisture levels can
        help reduce the likelihood of mole and gopher invasions. Happy
        gardening!
      </p>
    </div>
  );
};

export default Page;
