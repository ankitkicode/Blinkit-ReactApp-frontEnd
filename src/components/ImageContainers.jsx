import React from 'react'

function ImageContainers() {
  return (
    <div className='flex relative mt-2 max-[600px]:h-[18vh] max-[600px]:mt-[25%]  w-[95%] ml-[4%] h-[33vh] relative whitespace-nowrap w-full overflow-y-hidden overflow-x-auto gap-4'>
      <img className=' h-full object-fill' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg" alt="" />
      <img className=' h-full object-fill' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg" alt="" />
      <img className=' h-full object-fill' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg" alt="" />
    </div>
  )
}

export default ImageContainers
