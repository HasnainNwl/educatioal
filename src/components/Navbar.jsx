
const Navbar = () => {
    return (
      <section>
          <div className="flex lg:gap-3 md:gap-60 gap-20    lg:justify-between  ">
              <div className="flex lg:m-4 m-1">
                  <a href="#" className="flex">
                   <img src="/assets/cap.png" alt="" />
                   <p className="text-base font-serif lg:mt-5 lg:ml-5 mt-4" style={{'fontFamily':"sans-serif"}}>Back 2 <br />College</p>
                   </a>
              </div>
              <div className="lg:mt-9 lg:mr-6 ">
                  <ul className="lg:flex lg:gap-x-9  items-end hidden  ">
                      <li><a href="#">Careers</a></li>
                      <li><a href="#">Study Tips </a></li>
                      <li><a href="#">Colleges </a></li>
                      <li><a href="#">Financial Aid </a></li>
                      <li><a href="#">online Courses </a></li>
                      <li><a href="#"> More</a></li>
                  </ul>
              </div>
              <div className='grid grid-cols-2 mt-5  sm:w-[115px] mr-28'>
                  <a href="#"  rel="noopener noreferrer">
                  <box-icon className=' h-10 lg:h-[79%] hover:cursor-pointer' size="lg"  name='search'></box-icon>
                    </a>                 
                  <button className="bg-[#3d3de6] text-[white] lg:w-40 lg:h-9 h-9 w-32 sm:w-40 rounded">Search Programs</button>
                </div> 
          </div>
      </section>
    )
  }
  
  export default Navbar