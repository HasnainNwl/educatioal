const Newsletter = () => {
    return (
      <section className="bg-[url(/assets/news.jpg)]  w-full h-54 mt-20">
          <div className="text-center p-16">
              <h1 className=" text-[white] text-4xl font-bold ">JOIN OUR NEWSLETTER</h1>
              <p className="text-[white] font-bold mt-2">Subscribe to our newsletter to recive the latest news & updates.</p>
              <div className="flex gap-3 text-center mt-5 ml-80">
                  <input type="email" placeholder="Your email Address" className="w-2/4 p-2 rounded" />
                  <button className="text-[white] bg-[hsl(0,86%,60%)] w-[15%] text-center rounded">Subcribe</button>
              </div>
  
          </div>
      </section>
    )
  }
  
  export default Newsletter