import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import sanityClient from '../clients'

function AllPosts() {
    const [allPostData, setAllPostData] = useState(null)

    useEffect(()=>{
        sanityClient.fetch(
            `*[_type =='post']{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                }
            }`)
            .then(data => setAllPostData(data))
            .catch(error=> console.log(error))
         
    },[])
    console.log(allPostData)

  return (
    <div className=' bg-green-100 min-h-screen p-12'>
        <div className=' container mx-auto'>
            <h2 className=' text-5xl flex justify-center'>Blog Posts</h2>
            <h3 className=' text-lg text-gray-600 flex justify-center mb-12'>Welcome to my blog</h3>
            <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                
                {allPostData && allPostData.map((post,idx)=>(
                    <Link to={'/' + post.slug.current} key={post.slug.current}>
                        <span className=' bg-white block h-64 relative rounded shadow leading-snug border-l-8 border-green-400' key={idx}>
                            <img className=' w-full h-full rounded-lg object-cover absolute' src={post.mainImage.asset.url} alt={''}/>
                            <span className=' relative h-full flex justify-end items-end pr-4 pb-4'>
                            <h2 className=' text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 bg-opacity-75 rounded hover:bg-white'>
                                {post.title}
                            </h2>
                        </span>
                        </span>
                        {/* <span className=' relative h-full flex justify-end items-end pr-4 pb-4'>
                            <h2 className=' text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 bg-opacity-75 rounded'>
                                {post.title}
                            </h2>
                        </span> */}
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AllPosts