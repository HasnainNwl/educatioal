
const Navbar = () => {
    return (
      <section>
          <div className="flex gap-3  justify-between mx-9">
              <div className="flex m-4">
                  <a href="#" className="flex">
                   <img src="/assets/cap.png" alt="" />
                   <p className="text-base font-serif mt-5 ml-5 " style={{'fontFamily':"sans-serif"}}>Back 2 <br />College</p>
                   </a>
              </div>
              <div className="mt-9 mr-6">
                  <ul className="flex gap-x-9 items-end">
                      <li><a href="#">Careers</a></li>
                      <li><a href="#">Study Tips </a></li>
                      <li><a href="#">Colleges </a></li>
                      <li><a href="#">Financial Aid </a></li>
                      <li><a href="#">online Courses </a></li>
                      <li><a href="#"> More</a></li>
                  </ul>
              </div>
              <div className="flex gap-2 mt-7 ">
              <img className="h-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABnElEQVRIS92VOy9EQRiGdxMFiR/gB5C4hBAKrUQhLqVbKDQKiYJCIaFwKRQSREOUCJaOIFGoBSFuUYhsqRSVQuF5kznJyZo5c9izjZM8OZs5M98z8818s+lUgZ90geOnogSVyAegHprhE67gGg7gOc7kbIISBo4Yyh1BXmlfhzX4iBLZBJsMGDSDdnnvmZmrqQl6oc98P+XdBV8uSa5glI6r8A7DJhW2sZ00bkAZTMBiHIFyfgml0B0RPIglySFobxrAuifhFczRaQqUln7XjHLad0y6pnnP28aEBRkzc+V/O6ZAp2wL9qHHJ3ikQzXUwX1MQS397uAJanyCB9PpL4IXxlb4BPmk6ITg7T5BPpu8TPBxn0DH9AaKQcVz5NmHVr6fgY5pFWR9An0fgyV4AxWaS6LgqngVmopMxWZ9bFeF8tlmevuuCnVTgbWYSf2Q2ARFZiXaE6XL9igtuug0EaXWKfnNdS2RjvItrEDWpOg8SpLEH04jghnogGOYhYtg2UkIFEubHaxkkt8LSQsCyVA4uBqTWoHjLPwHwTc79VMZBk8miAAAAABJRU5ErkJggg=="/>
                  <button className="bg-[#3d3de6] text-[white] w-40 h-9 rounded">Search Programs</button>
              </div>
          </div>
      </section>
    )
  }
  
  export default Navbar