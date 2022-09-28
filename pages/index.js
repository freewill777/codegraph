import Head from 'next/head'

import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

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
        <div className="mx-auto py-8 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-8 lg:px-8">
          <h2 className="sm:mx-6 text-xl font-bold tracking-tight text-gray-900 sm:text-xl">
            <span className="block text-white"> We are a Digital Marketing, Online Advertising, Applications, Management and Development of <span className='underline'>Online Content</span> and Traffic Management</span>
          </h2>
          <div className="mt-12 sm:ml-4 flex lg:mt-0 lg:flex-shrink-0 xs:justify-center">
            <div className="ml-3 inline-flex rounded-md shadow ">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-black hover:bg-gray-500 hover:text-white"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className=" md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {allPostsData.map(({ id, date, title }) => {
              const Iconn = randomElement(icons)
              return (
                <Link href={`/posts/${id}`}>
                  <div key={id} className="relative cursor-pointer hover:bg-gray-500 hover:text-white py-4 px-4 rounded-md">
                    <dt>
                      <div className="absolute flex h-6 w-12 items-center justify-center rounded-md text-white">
                        <span className="h-6 w-6" aria-hidden="true" ><Iconn /></span>
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-white truncate">{title}</p>
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
