

const Footer = () => {
  return (
    <div className="h-screen p7">
        <h1 className="mx-auto text-center font-semibold m-5 text-2xl" >CONTACT ME</h1> 

        <div className="w-full h-full items-center justify-center flex">
          <div className="">
              <div className="mb-6">
                  <label htmlFor="success" className="block mb-2 text-sm font-medium text-black">Name:</label>
                  <input type="text" id="success" placeholder="  Input Name" className="bg-blue-300 border border-black placeholder:bg-blue-100 -700 text-sm rounded-lg block w-full p-1 " /> <br />
      
                  <label htmlFor="success" className="block mb-2 text-sm font-medium text-black">Email:</label>
                  <input type="text" id="success" placeholder="  Input Email" className="bg-blue-300 border border-black placeholder:bg-blue-200 -700 text-sm rounded-lg block w-full p-1" /> <br />
        
                  <label htmlFor="success" className="block mb-2 text-sm font-medium text-black">Phone Number:</label>
                  <input type="text" id="success" placeholder="  Input Phone Number" className="bg-blue-300 border border-black placeholder:bg-blue-200 -700 text-sm rounded-lg block w-full p-1" /> <br />

                  <label htmlFor="Pesan" className="text-sm font-medium">Massage:</label> <br />
                  <textarea name="" id="" cols="50" rows="10" placeholder="   Input Massage" className="border-t-black bg-gradient-to-br from-blue-200 p-2"></textarea><br />

                  <button type="submit" className="bg bg-gradient-to-br bg-cyan-600 rounded-sm mr-6 mt-1 p-0.5 text-sm font-semibold">Submit</button>
                  <button type="reset" className="bg bg-gradient-to-br bg-cyan-600 rounded-sm p-0.5 text-sm font-semibold">Cancel</button>


                  <p className="mt-2 text-sm text-black"><span className="font-medium">Thanks!! </span>for coming to my portfolio</p>
            

              </div>
          </div>

        </div>
    </div>

  )
}

export default Footer