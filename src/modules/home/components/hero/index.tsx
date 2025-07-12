import Image from "next/image"
import Link from "next/link";

import { Button, Heading } from "@medusajs/ui"
import { ribeye } from "app/layout";

import cottonField from '../../../../../public/cotton-field.jpg';


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
        <Heading level="h1" className={`${ribeye.className} text-4xl text-cyan-600 p-4 rounded bg-ui-bg-highlight uppercase outline`}>
          Earth Cotton
          <p className="text-xl lowercase pt-2">
            Organic Cotton Made Simple
          </p>
        </Heading>
        <Link href="store">
          <Button
            className={`${ribeye.className} text-cyan-600 text-xl outline bg-ui-bg-highlight`}
            size="xlarge"
            variant="transparent"
          >
            Shop Now
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default Hero
