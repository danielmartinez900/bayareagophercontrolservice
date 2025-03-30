import Head from "next/head";
import Image from "next/image";
import CallToAction from "@/src/components/CallToActionInputs/CallToAction";

import moleImage from "../../public/mole.jpg";
import voleImage from "../../public/vole.jpg";

const Page = () => {
  return (
    <article className="p-2 mx-5 h-auto">
      <Head>
        <title>Moles vs Voles: What's the Difference?</title>
        <meta
          name="description"
          content="Moles vs Voles: What's the Difference?"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <link rel="icon" href="/icon.ico" type="image/ico" sizes="16x16" />

      <section className="space-y-1 mb-2">
        <h className="text-green-700 text-xl lg:text-3xl font-bold">
          Moles vs Voles: What's the Difference?
        </h>
        <p className="text-md md:text-lg lg:text-lg ">
          Moles and voles are often confused due to their similar burrowing
          habits, but they have distinct differences in appearance, diet, and
          behavior. Here’s a breakdown to help you distinguish between the two.
        </p>
      </section>

      <main>
        <section className="flex flex-col lg:flex-row-reverse my-2">
          <div className="flex lg:flex-grow lg:w-1/3 justify-center">
            <Image
              src={moleImage}
              alt="Image of Mole"
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover", borderRadius: 8 }}
            />
          </div>
          <div className="flex flex-col justify-evenly space-y-1 pr-2">
            <div>
              <h1 className="font-bold text-green-700 text-3xl">Moles</h1>
              <h2 class="text-green-700 text-lg font-semibold">Appearance</h2>
              <p>
                Moles have elongated bodies, with velvety fur, small eyes, and
                no visible ears. They have large, paddle-like front feet
                designed for digging.
              </p>
            </div>
            <div>
              <h2 class="text-green-700 text-lg font-semibold">Diet</h2>
              <p>
                Moles are insectivores, primarily feeding on insects,
                earthworms, and grubs.
              </p>
            </div>
            <div>
              <h2 class="text-green-700 text-lg font-semibold">Behavior</h2>
              <p>
                Moles create extensive underground tunnel systems. Their tunnels
                are usually deeper and can cause raised ridges on the surface of
                your lawn.
              </p>
            </div>
            <div>
              <h2 class="text-green-700 text-lg font-semibold">Damage</h2>
              <p>
                Moles do not eat plants, but their tunneling can disrupt root
                systems, leading to plant damage.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row-reverse my-2">
          <div className="flex lg:flex-grow lg:w-1/3 justify-center">
            <Image
              src={voleImage}
              alt="Image of Vole"
              style={{ objectFit: "cover", borderRadius: 8 }}
            />
          </div>
          <div className="flex flex-col justify-evenly space-y-1 pr-2">
            <div>
              <h1 className="font-bold text-green-700 text-3xl">Voles</h1>
              <h2 class="text-green-700 text-lg font-semibold">Appearance</h2>
              <p>
                Voles, also known as meadow mice, have a more mouse-like
                appearance with a compact body, short tail, and small eyes and
                ears.
              </p>
            </div>
            <div>
              <h2 class="text-green-700 text-lg font-semibold">Diet</h2>
              <p>
                Voles are herbivores, feeding on grasses, roots, bulbs, and
                bark.
              </p>
            </div>
            <div>
              <h2 class="text-green-700 text-lg font-semibold">Behavior</h2>
              <p>
                Voles create shallow burrows and surface runways. They are more
                likely to be seen above ground compared to moles.
              </p>
            </div>
            <div>
              <h2 class="text-green-700 text-lg font-semibold">Damage</h2>
              <p>
                Voles can cause significant damage to plants by eating roots and
                bulbs. They also gnaw on tree bark, which can girdle and kill
                young trees.
              </p>
            </div>
          </div>
        </section>

        <section className="my-5 space-y-2">
          <h1 className="font-bold text-green-700 text-3xl">Key Differences</h1>
          <div>
            <h2 class="text-green-700 text-lg font-semibold">Tunnels</h2>
            <p>
              Mole tunnels are deeper and create raised ridges, while vole
              tunnels are shallow and often accompanied by visible surface
              runways.
            </p>
          </div>

          <div>
            <h2 class="text-green-700 text-lg font-semibold">Diet</h2>
            <p>
              Moles eat insects and worms, whereas voles eat plants and roots.
            </p>
          </div>

          <div>
            <h2 class="text-green-700 text-lg font-semibold">Appearance</h2>
            <p>
              Moles have specialized digging feet and elongated bodies, while
              voles look more like small, stocky mice.
            </p>
          </div>
          <p>
            Understanding these differences can help you identify which pest is
            causing problems in your yard and take appropriate measures to
            manage them. Schedule your free inspection with a Mole Busters
            technician to get to the bottom of your mole, vole, or gopher
            problems!
          </p>
        </section>
      </main>

      <CallToAction />
    </article>
  );
};

export default Page;
