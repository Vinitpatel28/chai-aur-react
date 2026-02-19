import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-12 text-center">
                <Container>
                    <h1 className="text-xl font-semibold text-gray-900 mb-2">Welcome to MegaBlog</h1>
                    <p className="text-gray-500 text-sm">Login to read posts</p>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <h1 className="text-lg font-semibold text-gray-900 mb-6">Latest Posts</h1>
                <div className='flex flex-wrap -mx-2'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home