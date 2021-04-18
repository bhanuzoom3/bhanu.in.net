import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetdata from '@/data/siteMetadata'

const editUrl = (fileName) => `${siteMetdata.siteRepo}/blob/master/data/blog/${fileName}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ children, frontMatter, next, prev }) {
  const { slug, fileName, date, title, tags } = frontMatter

  return (
    <SectionContainer>
      <BlogSeo url={`${siteMetdata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      {/* <article> */}
        <div className="container w-full md:max-w-3xl mx-auto pt-20">
          <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style={{ gridTemplateRows: 'font-family:Georgia,serif' }}>
          {/* --Title-- */}
			      <div className="font-sans">
              <p className="text-base md:text-sm text-green-500 font-bold">&lt; <a href="/blog" className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">BACK TO BLOG</a></p>
              <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{title}</h1>
              <p className="text-sm md:text-base font-normal text-gray-600">Published on &nbsp;
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString(siteMetdata.locale, postDateTemplate)}
                </time>
              </p>
            </div>
            {/* --Title-- */}
            {/* --Post Content-- */}

            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">{children}</div>
                <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                  <Link href={editUrl(fileName)}>{'Edit on GitHub'}</Link>
                </div>
            </div>


          </div>

      {/* </article> */}
      		{/* <!--Tags --> */}

      {tags && (
          <div className="text-base md:text-sm text-gray-500 px-4 py-6">
            Tags: <div className="text-base md:text-sm text-green-500 no-underline hover:underline"> {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}</div>
          </div>

      )}
      		{/* <!--Tags --> */}


			{/* --Post Content-- */}
        		<hr className="border-b-2 border-gray-400 mb-8 mx-4"></hr>

       {/* --Author-- */}
        <figure>
          <div className="container flex w-full items-center font-sans px-4 py-12">
            <img className="w-10 h-10 rounded-full mr-4" src="/static/images/avatar-1.png" alt="Avatar of Author"></img>
            <div className="flex-1 px-2">
              <p className="text-base font-bold text-base md:text-xl leading-none mb-2">{siteMetdata.author}</p>
              <p className="text-gray-600 text-xs md:text-base">{siteMetdata.aboutAuthor}</p>
            </div>
            <div className="justify-end">
              <a href="/about" className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">Know More About Author</a>
            </div>
          </div>

        </figure>
        {/* --Author-- */}
      <hr className="border-b-2 border-gray-400 mb-8 mx-4"></hr>

		{/* <!--Next & Prev Links--> */}

      {(next || prev) && (
      <div className="font-sans flex justify-between content-center px-4 pb-12">
          {prev && (
            <div className="text-left">
                <span className="text-xs md:text-sm font-normal text-gray-600">&lt; Previous Post</span><br></br>
                <p><Link href={`/blog/${prev.slug}`} className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline">{prev.title}</Link></p>
            </div>
          )}
          {next && (
                <div className="text-right">
                  <span className="text-xs md:text-sm font-normal text-gray-600">Next Post &gt;</span><br></br>
                  <p><Link href={`/blog/${next.slug}`} className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline">{next.title}</Link></p>
                </div>

            )}
      </div>
        )}

		{/* <!--Next & Prev Links--> */}

    </div>

    </SectionContainer>
  )
}
