

export default function Example({posts}) {
  return (
    
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
               <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-60 w-80 rounded bg-gray-50" />
              </div>
             
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
             
            </article>
          ))}
        </div>
      
  )
}
