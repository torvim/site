import Head from 'next/head'
import Link from 'next/link'
import Tilt from 'react-tilt'

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <span className="m-auto">
        <Tilt className="Tilt" options={{ scale : 1, max : 25, easing: "cubic-bezier(.03,.98,.52,.99)" }}>
          <a className="main-url">
            <span className="animate">
              lew
            </span>
            .digital
          </a>
        </Tilt>

        <br/>
        
        <ul className="flex linksIndex">
          <a href="https://github.com/torvim">Github</a>
          <a>•</a>
          <a href="https://magichouseplant.tumblr.com/">Tumblr</a>
          <a>•</a>
          <Link href="/rice"><a>Rice</a></Link>
          <a>•</a>
          <Link href="/inspo"><a>Inspo</a></Link>
          <a>•</a>
          <Link href="/interest"><a>?</a></Link>
        </ul>
      </span>
    </div>
  )
}
