

const Jumbotron = () => {
  return (
    <>
    <div className="container mx-auto p-7 max-w-screen-lg">

        <h1 className="mx-auto text-center font-semibold text-2xl m-2">ABOUT</h1> 
        <div className="container mx-auto grid grid-cols-2 ">

        <div className="md:grid grid-cols-[150px_minmax(670px,_1fr)_100px] relative ">
              <div className="container-1 max-w-screen-lg  ">
                  <img src="./src/assets/about.png" alt="" className="w-48 absolute -left-10 md:left-10  " />
              </div>
              <div className="md:container-2 mx-auto max-w-screen-lg ">
                  <p className="mx-auto border rounded-lg shadow-xl p-10 mt-2 w-80 ">I`am Faishal, web-developer base on medan, Indonenesia. I was graduate from diploma majoring in telecomunication and air navigation engineering from aviation and safety academy medan with GPA 3.31. I have web-developers skills when i was join purwadhika technology school on February 2024.</p>
              </div>    


        </div>
             
         
        </div> 
                
    </div>

    <hr className="mt-24 border-t-4"/>
    </>

  )
}

export default Jumbotron