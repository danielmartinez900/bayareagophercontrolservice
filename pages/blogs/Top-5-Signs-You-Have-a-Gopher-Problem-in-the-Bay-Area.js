import Head from "next/head";
import Image from "next/image";
import CallToAction from "@/src/components/CallToActionInputs/CallToAction";

import image from "../../public/gopher.jpg";

const Page = () => {
  return (
    <article className="p-2 mx-5 h-auto">
      <Head>
        <title>Top 5 Signs You Have a Gopher Problem in the Bay Area</title>
        <meta
          name="description"
          content="Top 5 Signs You Have a Gopher Problem in the Bay Area"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <link rel="icon" href="/icon.ico" type="image/ico" sizes="16x16" />

      <section>
        <h className="text-2xl font-bold text-green-700 my-1 content-center">
          Top 5 Signs You Have a Gopher Problem in the Bay Area
        </h>
        <div className="max-h-[300px] flex">
          <Image
            src={image}
            width={"20%"}
            style={{ objectFit: "cover", borderRadius: 8 }}
          />
        </div>
        <p className="font-medium">
          Dealing with gophers can be a tricky business it you don't spot their
          signs early enough. Gophers can cause significant damage to lawns,
          gardens, and even infrastructures without making much noise. Whether
          you're a homeowner or property manager in the bay Area, it is crucial
          to recognize the early signs. Here are the top indicators that you may
          be facing a gopher problem.
        </p>
      </section>

      <main>
        <section className="my-5">
          <h1 className="font-bold text-green-700 text-xl my-1">
            Mounds of Fresh Dirt
          </h1>
          <p>
            One of the most visible signs of gopher activity is the presence of
            fresh mounds of dirt around your lawn or garden. These mounds are
            typically crescent-shaped and can appear overnight. Gophers push the
            dirt to the surface as they create their extensive underground
            tunnel systems.
          </p>
        </section>

        <section className="my-5">
          <h1 className="font-bold text-green-700 text-xl my-1">
            Visible Tunnels
          </h1>
          <p>
            Unlike mole tunnels, gopher tunnels are broad and shallow, often
            resulting in sunken areas in your yard. These tunnel openings can
            cause the soil to sink, making it uneven. If you notice these
            depressions in your lawn, it's a clear sign of gopher activity.
          </p>
        </section>

        <section className="my-5">
          <h1 className="font-bold text-green-700 text-xl my-1">
            Damaged Plants and Roots
          </h1>
          <p>
            Gophers feed on the roots and lower stems of plants, causing them to
            wilt or die. It you notice plants in your garden suddenly withering
            without any apparent reason, it could be due to gophers eating away
            at their roots. They tend to love vegetables, flowers, and
            ornamental plants.
          </p>
        </section>

        <section className="my-5">
          <h1 className="font-bold text-green-700 text-xl my-1">
            Gnaw Marks on Irrigation Systems
          </h1>
          <p>
            Gophers often chew on hoses, irrigation lines, and utility cables,
            leaving behind distinctive gnaw marks. This behavior can lead to
            significant damage and costly repairs. Inspect your irrigation
            system regularly for any signs of gopher gnawing.
          </p>
        </section>

        <section className="my-5">
          <h1 className="font-bold text-green-700 text-xl my-1">
            Gopher Sightings
          </h1>
          <p>
            most obvious sign of a gopher problem is actually seeing a gopher
            scurrying about in your garden. Gophers are usually active during
            dawn or dusk. If you spot one, there are likely many more hiding
            below the surface.
          </p>
        </section>
      </main>

      <CallToAction
        title="If you notice any of these signs on your property, it's time to take
        action. Gopher infestations can quickly escalate, causing more damage
        over time. At Mole Busters, we provide humane and effective gopher
        control services to tackle your gopher problems in the Bay Area! "
      />
    </article>
  );
};

export default Page;
