import React from "react";
import Head from "next/head";
import Image from "next/image";

import moleImage from "../../public/mole.jpg";
import voleImage from "../../public/vole.jpg";

const Page = () => {
  return (
    <div className="p-2 mx-20 h-auto">
      <Head>
        <title>Moles vs Voles: What's the Difference?</title>
        <meta name="description" content="Moles vs Voles: What's the Difference?" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <link rel="icon" href="icon.jpg" type="image/jpg" sizes="16x16" />

      <div className="mb-5">
        <h className="text-green-700 text-3xl font-bold">
          Moles vs Voles: What's the Difference?
        </h>
        <h1 className="text-green-800 text-xl font-medium">
          Moles and voles are often confused due to their similar burrowing
          habits, but they have distinct differences in appearance, diet, and
          behavior. Here’s a breakdown to help you distinguish between the two.
        </h1>
        {/* <div className="max-h-[300px] flex">
          <Image
            src={voleImage}
            width={"20%"}
            style={{ objectFit: "contain", borderRadius: 8, }}
          />
        </div> */}
      </div>

      <div className="md:h-[400px] sm:flex sm:h-[600px] m-1">
        <div className="flex items-evenly h-full">
          <div className="flex flex-col flex-grow-2 justify-evenly w-1/2 ">
            <div>
              <h2 className="font-bold text-green-700 text-3xl">Moles</h2>
              <h1 class="text-green-700">Appearance</h1>
              <p>
                Moles have elongated bodies, with velvety fur, small eyes, and
                no visible ears. They have large, paddle-like front feet
                designed for digging.
              </p>
            </div>
            <div>
              <h1 class="font-medium text-lg text-green-700">Diet</h1>
              <p>
                Moles are insectivores, primarily feeding on insects,
                earthworms, and grubs.
              </p>
            </div>
            <div>
              <h1 class="font-medium text-lg text-green-700">Behavior</h1>
              <p>
                Moles create extensive underground tunnel systems. Their tunnels
                are usually deeper and can cause raised ridges on the surface of
                your lawn.
              </p>
            </div>
            <div>
              <h1 class="font-medium text-lg text-green-700">Damage</h1>
              <p>
                Moles do not eat plants, but their tunneling can disrupt root
                systems, leading to plant damage
              </p>
            </div>
          </div>

          <div className="w-1/2 flex flex-grow justify-center my-2">
            <Image
              src={moleImage}
              width={400}
              style={{ objectFit: "cover", borderRadius: 8 }}
            />
          </div>
        </div>
      </div>

      <div className="md:h-[400px] sm:flex sm:h-[600px] m-1">
        <div className="flex items-evenly h-full">
          <div className="flex flex-col flex-grow-2 justify-evenly w-1/2 ">
            <div>
              <h2 className="font-bold text-green-700 text-3xl">Voles</h2>
              <h1 class="font-medium text-lg text-green-700">Appearance</h1>
              <p>
                Voles, also known as meadow mice, have a more mouse-like
                appearance with a compact body, short tail, and small eyes and
                ears.
              </p>
            </div>
            <div>
              <h1 class="font-medium text-lg text-green-700">Diet</h1>
              <p>
                Voles are herbivores, feeding on grasses, roots, bulbs, and
                bark.
              </p>
            </div>
            <div>
              <h1 class="font-medium text-lg text-green-700">Behavior</h1>
              <p>
                Voles create shallow burrows and surface runways. They are more
                likely to be seen above ground compared to moles.
              </p>
            </div>
            <div>
              <h1 class="font-medium text-lg text-green-700">Damage</h1>
              <p>
                Voles can cause significant damage to plants by eating roots and
                bulbs. They also gnaw on tree bark, which can girdle and kill
                young trees.
              </p>
            </div>
          </div>

          <div className="w-1/2 flex flex-grow justify-center my-2">
            <Image
              src={voleImage}
              width={400}
              style={{ objectFit: "cover", borderRadius: 8 }}
            />
          </div>
        </div>
      </div>

      <div className="my-5 space-y-2">
        <h1 className="font-bold text-green-700 text-3xl">Key Differences</h1>
        <div>
          <h1 class="font-medium text-lg text-green-700">Tunnels</h1>
          <p>
            Mole tunnels are deeper and create raised ridges, while vole tunnels
            are shallow and often accompanied by visible surface runways.
          </p>
        </div>

        <div>
          <h1 class="font-medium text-lg text-green-700">Diet</h1>
          <p>
            Moles eat insects and worms, whereas voles eat plants and roots.
          </p>
        </div>

        <div>
          <h1 class="font-medium text-lg text-green-700">Appearance</h1>
          <p>
            Moles have specialized digging feet and elongated bodies, while
            voles look more like small, stocky mice.
          </p>
        </div>
      </div>

      <p className="font-medium">
        Understanding these differences can help you identify which pest is
        causing problems in your yard and take appropriate measures to manage
        them. Schedule your free inspection with a Mole Busters technician to
        get to the bottom of your mole, vole, or gopher problems! (Call To
        Action component below)
      </p>
    </div>
  );
};

export default Page;
