import 'react'

const News = () => {
  return (
    <div>
      <div className="bg-primary py-12">
      <h1 className="font-kumbh text-3xl text-center mt-12">News</h1></div>
      <div className="flex flex-col lg:flex-row items-center justify-center m-12 relative">
        <div className="relative w-full lg:w-1/2 ml-10 lg:order-1 order-1">
          
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent to-white rounded-t-lg lg:rounded-lg"></div>
        </div>
        <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-white rounded-b-lg lg:rounded-b-lg shadow-lg lg:shadow-lg mt-4 lg:mt-0 lg:ml-10 lg:order-0 order-0">
          <h2 className="font-kumbh text-2xl text-center lg:text-left">Stay Updated</h2>
          <p className="font-rubik text-lg text-center lg:text-left mt-4">
            Get the latest news and updates from our blog. We cover everything from new features to tips and tricks to help you succeed.
          </p>
          <div className="flex justify-center lg:justify-start mt-8">
            <a
              href="#"
              className="font-kumbh text-white bg-primary py-2 px-6 rounded-full hover:bg-primary-dark transition duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
