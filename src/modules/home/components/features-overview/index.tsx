import { Button } from "@medusajs/ui";
import Image from "next/image";

import { ArrowRight, ShoppingBag, Sprout, Tractor } from "lucide-react";
import Link from "next/link";

const FeaturesOverview = () => {
  const imageSrc = `https://${process.env.IMAGE_CLOUD_HOSTNAME}/home/product-cluster.png`;

  return (
    <section className="w-full">
      <div 
        className="w-full grid px-4 md:px-6 lg:grid-cols-2 lg:px-8"
      >
        <div>
          <h2 className="text-2xl italic text-gray-700">
            Why Us?
          </h2>
          <ul className="mt-3 space-y-6">
            <li>
              <span className="flex flex-row gap-x-2">
                <ShoppingBag />
                <h3 className="text-2xl font-semibold">Affordable Pricing</h3>
              </span>
              <p className="text-gray-700 font-light">
                We are proud to offer a standard pricing scheme across all our shirts. 
                No major sales or major profit margins for anyone. 
                Just <span className="font-semibold">simple, fair business</span>.
              </p>
            </li>
            <li>
              <span className="flex flex-row gap-x-2">
                <Sprout />
                <h3 className="text-2xl font-semibold">Nature Focused</h3>
              </span>
              
              <p className="text-gray-700 font-light">
                All of our shirts have a nature theme. 
                Explore our collections that range from&nbsp;
                <span className="font-semibold">scenic landscapes</span>{" "}
                to <span className="font-semibold"> cute animals</span>{" "}
                and styles that range from{" "}
                <span className="font-semibold">black-and-white</span>{" "}
                to <span className="font-semibold">multi-colored</span>. We 
                curate styles with the goal of creating{" "}
                <span className="font-semibold">everyday, unique fashion</span>.
              </p>
            </li>
            <li>
              <span className="flex flex-row gap-x-2">
                <Tractor />
                <h3 className="text-2xl font-semibold">Premium Origins</h3>
              </span>
              <p className="text-gray-700 font-light">
                All of our shirts are made with{" "}
                <span className="font-semibold">100% organic cotton</span>.{" "} 
                This material choice is a <span className="font-semibold">huge advantage</span>{" "}
                <span className="font-semibold">for the environment</span>{" "}
                and <span className="font-semibold">for you</span>.{" "}
                Workers across our supply-chain are paid a{" "}
                <span className="font-semibold">fair, living wage</span>.
              </p>
            </li>
          </ul>
          <Link href="store">
            <Button
              variant="transparent"
              className="mt-6 p-[-1] flex flex-row gap-x-1 text-lg items-center underline"
            >
              Explore
              <ArrowRight className="align-bottom" size={18} />
            </Button>
          </Link>
        </div>
        <div  
          className="flex flex-row"
        >
          <Image
            src={imageSrc}
            alt="Product cluster of three shirts"
            width={897}
            height={433}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;