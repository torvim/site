import Head from 'next/head'
import Link from 'next/link'
import Tilt from 'react-tilt'

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <span className="m-auto">
        <Tilt className="Tilt" options={{ scale : 1, max : 25, easing: "cubic-bezier(.03,.98,.52,.99)" }}>
          <div className="main-url">
            <span className="animate">
              404: {" "}
            </span>
             not found.
          </div>
        </Tilt>

        <br/>
        
        <ul className="flex links">
          <Link href="/"><a>← Go back</a></Link>
          <Link href="/interest"><a>Something cool ↗</a></Link>
        </ul>
        
      </span>

    </div>
  )
}
