import Head from 'next/head'
import Typed from "react-typed";
import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
const icons = [BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon]

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <div className="mx-auto h-24 py-8 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-8 lg:px-8">
          <h2 className="sm:mx-6 text-xl font-bold tracking-tight sm:text-xl">
            <span className="block" >
              We have expertise in <Typed
                strings={[
                  "Digital Marketing ",
                  "Online Advertising",
                  "Applications",
                  "Management and of Online Content",
                  "Traffic Management"
                ]}
                typeSpeed={70}
                backSpeed={50}
                loop
                className='accent-bg'
              />
              {/* Digital Marketing, Online Advertising, Applications, Management and Development of 
            <span className='underline'>Online Content</span> and Traffic Management */}
            </span>
          </h2>
        </div>
      </div>

      <div className="py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className=" md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {allPostsData.map(({ id, date, title }) => {
              const Iconn = randomElement(icons)
              return (
                <Link href={`/posts/${id}`}>
                  <div key={id} className="relative cursor-pointer hover:text-white py-4 px-4 rounded-md menu-item">
                    <dt>
                      <div className="absolute flex h-6 w-12 items-center justify-center rounded-md">
                        <span className="h-6 w-6" aria-hidden="true" ><Iconn /></span>
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 truncate">{title}</p>
                    </dt>
                    {/* <dd className="mt-2 ml-16 text-base text-white">{ }ss</dd> */}
                  </div>
                </Link>
              )
            })}
          </dl>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
