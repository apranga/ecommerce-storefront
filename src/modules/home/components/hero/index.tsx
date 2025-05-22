import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"
import cottonField from '../../../../../public/cotton-field.jpg';
import { ribeye } from "app/layout";

const Hero = () => {
  return (
    <section className="h-[75vh] relative">
      <Image
        alt="Cotton field"
        src={cottonField}
        placeholder="blur"
        quality={100}
        fill
        style={{
          objectFit: 'cover',
        }}
      />
      <div className={`absolute inset-0 flex flex-col justify-center items-center text-center px-8 gap-6 z-10`}>
        <Heading level="h1" className={`${ribeye.className} text-3xl text-rose-700 p-4 rounded`}>
          Organic Cotton Made Simple
        </Heading>
        <Button
          className={`${ribeye.className} text-rose-700 text-xl outline`}
          size="xlarge"
          variant="transparent"
        >
          Shop Now
        </Button>
      </div>
    </section>
  )
}

export default Hero
