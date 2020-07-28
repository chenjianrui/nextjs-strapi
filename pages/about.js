import { NextSeo } from 'next-seo'



export default function About(){
  const SEO = {
    title: 'About page',
    description: 'Just your normal about page'
  }
  return (
    <div>
      <NextSeo {...SEO}/>
      This is a about page
    </div>
  )
}