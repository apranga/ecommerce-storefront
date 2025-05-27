import { Heading } from "@medusajs/ui";
import Image from "next/image";

const FeaturesOverview = () => {
  const imageSrc = `https://${process.env.IMAGE_CLOUD_HOSTNAME}/home/product-cluster.png`;

  return (
    <section className="w-full">
      <div className="container grid px-4 md:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-2xl">
            Why Us?
          </h2>
          <ul className="mt-3 space-y-3">
            <li>
              <h3 className="text-xl">Affordable Pricing</h3>
              <p>
                We are proud to offer a standard pricing scheme across all our shirts. 
                No major sales or major profit margins for anyone. 
                Just simple, fair business.
              </p>
            </li>
            <li>
              <h3 className="text-xl">Nature Focused</h3>
              <p>
                All of our shirts have a nature theme. 
                Explore our collections that range from scenic landscapes to cute animals 
                and styles that range from black-and-white to multi-colored. 
                We curate styles with the goal of creating everyday, unique fashion.
              </p>
            </li>
            <li>
              <h3 className="text-xl">Premium Origins</h3>
              <p>
                All of our shirts are made with 100% organic cotton. 
                This material choice is a huge advantage for the environment and for you. 
                Workers across our supply-chain are paid a fair, living wage.
              </p>
            </li>
          </ul>
        </div>
        <Image
          src={imageSrc}
          alt="Product cluster of three shirts"
          width={1400}
          height={1080}
        />
      </div>
    </section>
  );
};

export default FeaturesOverview;