import Head from 'next/head'
import Link from 'next/link'
import Tilt from 'react-tilt'

export default function Home() {
  return (
    <div className="my-5 text-2xl px-64 font-medium">
      <ul className="flex links py-5">
        <p>What is <span className="animate">(un)</span>made?</p>
        <Link href="/"><a>← Go back</a></Link>
      </ul>

      <span className="animate">(un)</span>made is simply a collection of links and ideas for future projects. it's largely unstructured, and each item probably has no description.
      <ul className="list-disc mt-5">
        <li>Fully featured YAML based language</li>
        <li>Remote minecraft enchantment/crafting bot</li>
        <li>Make a display font!</li>
        <li>Online magazine/newsletter focused on design</li>
        <li>Write design language based on minimalism</li>
        <li>Index of USA government deep state conspiracies</li>
      </ul>
    </div>
  )
}
