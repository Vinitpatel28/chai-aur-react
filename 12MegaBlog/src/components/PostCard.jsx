import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    const [imgError, setImgError] = React.useState(false);
    const imageUrl = featuredImage ? (appwriteService.getFileView(featuredImage) || appwriteService.getFilePreview(featuredImage)) : null;
    const showPlaceholder = !imageUrl || imgError;

  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-white rounded-lg p-4 border border-gray-200 hover:border-gray-300'>
            <div className='w-full mb-3 overflow-hidden rounded bg-gray-100 min-h-[160px] flex items-center justify-center'>
                {showPlaceholder ? (
                  <span className='text-gray-400 text-sm'>No image</span>
                ) : (
                  <img 
                    src={imageUrl} 
                    alt={title}
                    className='w-full h-40 object-cover' 
                    onError={() => setImgError(true)}
                  />
                )}
            </div>
            <h2 className='text-base font-semibold text-gray-900'>{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard