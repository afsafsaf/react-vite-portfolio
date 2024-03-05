const Education = () => {
  return (
    <>
        <div className="container max-auto ">
            <h3 className=" p-5 mx-auto text-center font-semibold text-2xl m-2 ml-8 ">EDUCATION & EXPERIENCE</h3> 
        </div>

        <div className=" container grid md:grid-cols-3 md:mx-auto ">
            <div className="container md:w-48 sm: ">
                <img src="./src/assets/skilss.png" alt="" />
            </div>

        <div className="container-1  grid grid-cols-2 md:gap-10 gap-3 ">
                <div className="container mx-auto border rounded-lg shadow-lg p-5 ">
                    <h6 className="text-center border-2 border-sky-500 h-full font-serif">
                    Telecommunication and Air Navigation Engineering from Aviation
                    And Safety Academy Medan.
                    </h6>
                    <p className="text-center">2016-2019.</p>
                </div>

                <div className="container mx-auto border rounded-lg shadow-lg p-5 ">
                    <h6 className="text-center border-2 border-sky-500 h-full font-serif ">Open University. <br /><br /><br /><br /><br /></h6>
                    <p className="text-center">2020-2023.</p>
                </div>

                <div className="container mx-auto border rounded-lg shadow-lg p-5">
                    <h6 className="text-center border-2 border-sky-500 h-full font-serif">Bootcamp in Purwadhika Digital Technology School. <br /><br /><br /></h6>
                    <p className="text-center">2024.</p>
                </div>
                
                <div className="container mx-auto border rounded-lg shadow-lg p-5 ">
                    <h6 className="text-center border-2 border-sky-500 h-full  font-serif">
                    On The Job Training at Perum LPPNPI Airnav Husein Sastranegara
                    International Airport Bandung.
                    </h6>
                    <p className="text-center">2018.</p>
                </div>

                <div className="container mx-auto border rounded-lg shadow-lg p-5">
                    <h6 className="text-center border-2 border-sky-500 h-full font-serif">
                    On The Job Training at Angkasa Pura 2 Husein Sastranegara
                    International Airport Bandung.
                    </h6>
                    <p className="text-center">2018.</p>
                </div>

                <div className="container mx-auto border rounded-lg shadow-lg p-5">
                    <h6 className="text-center border-2 border-sky-500 h-full font-serif ">
                    On The Job Training at Perum LPPNPI Airnav Sultan Iskandar
                    Muda International Airport Banda Aceh.
                    </h6>
                    <p className="text-center">2018.</p>
                </div> 
            </div>
          </div>

      <hr className="mt-24 border-t-4"/>
    </>
  );
};

export default Education;
