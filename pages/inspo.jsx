import fg from "fast-glob"
import Gallery from "../components/Gallery"
import Link from "next/link"
import { useRouter } from 'next/router'

export default function Home({ images }) {
  return (
    <div className="my-5 mx-40">
      <ul className="flex links p-2">
        <p href="https://github.com/torvim">Here's some of the images from my inspo collection.</p>
        <Link href="/"><a>← Go back</a></Link>
      </ul>
      <Gallery images={images}/>
    </div>
  );
}

export async function getStaticProps() {
  const images = await fg([
    `public/gallery/inspo/thumb.*.png`,
  ])

  return {
    props: {
      images
    },
  };
}
