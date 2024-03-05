const Navbar = () => {
  return (
    <>

    <nav className="w-full h-full items-center justify-center">
        <div className="flex w-screen justify-around bg-cyan-900 hover:bg-cyan-600 shadow-lg fixed mx-auto">
               <a href="" className="md:flex-none w-20 h-10 text-center ml-5 mr-32 font-medium text-white bg-sky-500/100 rounded-lg  ">RESUME</a>
               <div className="md:w-screen md:flex md:justify-around hidden ">
                <a href="" className="flex-initial w-75 text-center  font-bold text-gray-900 ">ABOUT</a>
                <a href="" className="flex-initial w-75 text-center  font-bold text-gray-900 ">EDUCATION</a>
                <a href="" className="flex-initial w-75 text-center  font-bold text-gray-900 ">EXPERIANCE</a>
                <a href="" className="flex-initial w-75 text-center  font-bold text-gray-900 ">CONTACT</a>

               </div>
                
                  
                
        </div>      
    </nav>
        
    <div className="container mx-auto">

    <div className="bg-[url('./src/assets/computers.jpg')] bg-cover bg-fixed bg-center rounded-lg md:bg-cover md:bg-center md:bg-fixed md:rounded-xl md:shadow-xl md:mx-auto ">    
        <div className="container w-full pt-40">
            <div className="container grid md:grid-cols-2 grid-cols-1   "> 
                <div className="container-1 mx-28">
                    <div>
                        <h3 className="w-20 bg-slate-400 rounded-e-full font-medium text-lg text-white mb-5">Hello I`M </h3>
                        <p className="font-semibold text-lg text-white">Abdul Faishal Simatupang</p>
                        <p className="font-semibold text-lg text-white">Full Stack Developer</p>
                    </div>

                    <div className=" container flex p-1">
                        <img src="./src/assets/email.png" alt="" className="w-5"/>
                        <p className="flex-initial ml-5 font-semibold text-white">abdulfaishal111@gmail.com</p>
                    </div>

                    <div className=" container flex p-1">
                        <img src="./src/assets/phone.png" alt="" className="w-5" />
                        <p className="flex-initial ml-5 font-semibold text-white">+62-82294922252</p>        
                    </div>

                    <div className=" container flex p-1">
                        <img src="./src/assets/location.png" alt="" className="w-5"/>
                        <p className="flex-initial ml-5 font-semibold text-white">Jalan Mapilindo No.41c Medan</p>
                    </div> 
                </div> 

                <div className=" container-2">
                    <img src="./src/assets/profile.jpg" alt="" className="w-48 mx-auto rounded-full mb-20"/>
                </div>    

            </div>
        </div>      
    </div>





    </div>
   
    <hr className="mt-24 border-t-4"/>
    </>
    
  )
}

export default Navbar