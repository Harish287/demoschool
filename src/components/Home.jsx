import React from 'react'
// import Image from "../Assets/360_F_522691962_fC6vXEo5v4gFKD1ZsSjwqwJMF5Y3uCxD.jpg"
import anime1 from "../Assets/Anime/anime1.jpg"
import anime2 from "../Assets/Anime/anime2.png"
import anime3 from "../Assets/Anime/anime3.png"
import anime4 from "../Assets/Anime/anime4.png"
import anime5 from "../Assets/Anime/anime5.png"
import anime6 from "../Assets/Anime/anime6.png"
import { motion } from 'framer-motion'
import Slider from "react-slick";
import Imagegif from "../Assets/trophy.png"
import Trophy from "../Assets/trophy (1).png"
import Imagesvg from "../Assets/Anime/stick-man.936d1e5d.svg"
import Imageshape from "../Assets/Untitled design (24).png"


const Home = () => {

  var setting = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <div>
        <div className="container m-auto flex-col  md:flex  lg:flex-row  flex justify-around bg-[#c8cbfe] box-border lg:rounded-[125px]  md:rounded-[0px] items-center sm:flex-col  ">

          {/* leftcontent */}
          <div className=" lg:pl-[50px] sm:pl-[0px] sm:p-[100px] max-w-screen-sm lg:mr-[20px]">
            <motion.div
              initial={{ opacity: 0, y: -70 }}
              whileInView={{ opacity: 100, y: 0, transition: { delay: 0.8, duration: 0.8 } }}
              viewport={{ once: true }}>
              <p className=" font-bold lg:text-[30px] sm:text-[16px] leading-[30px] font-[Roboto, sans-serif] bg-gradient-to-r from-blue-800 to-pink-500 text-transparent bg-clip-text lg:mt-0  md:mt-[20px]">
                Success
                isn't a destination, it's a journey!        </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 100, transition: { delay: 0.8, duration: 0.8 } }}
              viewport={{ once: true }}>
              <h3 style={{ fontFamily: "Nunito,sans-serif" }} className="  lg:text-[46px]  sm:text-[16px] lg:leading-[60px] sm:leading-[10px] font-extrabold relative">Is KAIT The Next Step In Your Journey?</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 100, transition: { delay: 0.8, duration: 0.8 } }}
              viewport={{ once: true }}>
              <p className="font-roboto font-normal lg:text-base lg:leading-9  sm:leading-[10px] text-gray-700 max-w-full sm:max-w-md md:max-w-lg lg:max-w-[28rem] xl:max-w-[30rem]">At KAIT, we believe in the power of connection. Join our thriving community of like-minded individuals and unlock a world of possibilities.
                Not only will you be part of a vibrant community, but you'll also have the chance to earn exciting awards and rewards for your engagement and achievements within KAIT.</p>
            </motion.div>

            {/* left bottom content */}

            <div className="flex items-center max-w-screen-md mt-10 text-left">
              <div className="flex gap-2">

                {/* <div><img className="w-[500px] h-[190px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmmXYHhdwwcmW2Xm_OlS75ILepiNHIADZQ-IO9KVpvtA2iqDl_qGXpm5BFc2LGkRHQRns&usqp=CAU" /> */}

                {/* </div> */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: -70 }}
                    whileInView={{ opacity: 100, y: 0, transition: { delay: 0.8, duration: 0.8 } }}
                    viewport={{ once: true }}>   <h2 style={{ fontFamily: "Nunito,sans-serif" }} className="  text-blue-900 font-bold lg:text-4xl sm:text-lg  lg:leading-10 sm:leading-[20px] lg:mb-4 sm:mb-2">Join Our KAIT Community</h2>
                  </motion.div>


                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 100, transition: { delay: 0.8, duration: 0.8 } }}
                    viewport={{ once: true }}>
                    <p className="text-gray-700 font-normal text-base lg:leading-7 sm:leading-[10px] mb-0 font-roboto max-w-full sm:max-w-md md:max-w-lg lg:max-w-[28rem] xl:max-w-[30rem]">Become a part of the KAIT revolution and unlock the power of the KAIT Community. Dive into the future of finance and explore the wealth of opportunities within the dynamic world of cryptocurrency.</p>
                  </motion.div>
                </div>

              </div>

            </div>



            <div className='flex justify-center cursor-pointer '>     <a href='https://www.kaitworld.com/public/login'><h1 className='  btn btn-border-4  font-bold text-lg px-2 py-1  border-black  hover:shadow-2xl  hover:bg-gradient-to-r from-blue-800 to-pink-500   transition duration-500 ease-in-out '>view more</h1></a>  </div>


          </div>

          {/* righrimages */}

          <div className="w-auto h-auto flex float-right pt-[70px] pb-[70px] box-border  md:flex float-right pt-[70px] pb-[70px] box-border ">
            {/* <img className=" h-[540px] w-[540px] box-border relative rounded-[500px] border-orange-100 border-[15px]" src="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136839.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1717459200&semt=ais_user" alt="" />
    <img className=" h-[350px] w-[350px] box-border absolute  rounded-[500px] border-orange-100 border-[15px] ml-[-150px] mt-[-50px] " src="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136824.jpg" alt="" /> */}


            <img className='lg:h-[540px] lg:w-[540px]  sm:h-[300px] sm:w-[300px] box-border relative object-cover rounded-[500px] border-[#c8cbfe] border-[15px]' src={Imagegif} alt="" />
            <img className=" h-[350px] w-[350px] box-border absolute hidden md:block rounded-[500px]  border-[#c8cbfe] border-[15px] ml-[-150px] mt-[-50px]  " src={Trophy} alt="" />






            {/* Happy clients */}

            <div className=" bg-white w-[350px] h-[200px]  hidden md:block absolute box-border border-[15px] rounded-[50px] mt-[390px] ml-[-135px]">

                <div className="flex gap-10 justify-evenly">
                  <div className=" flex justify-center items-center"><img className="w-[50px] h-[50px] box-border" src={Imagesvg} alt="" />  </div>

                  <div ><h2 className=" text-center mt-2 text-3xl font-bold">18000 +</h2>
                    <p className=" text-center font-bold text-1xl">happy Users</p></div>
                </div>


                <div className="mt-4 gap-5 "><Slider className=" text-center " {...setting}>
                  <div >
                    <img className="w-[50px] h-[50px] box-border rounded-[500px]" src={anime1} alt="" />
                  </div>
                  <div>
                    <img className="w-[50px] h-[50px] box-border rounded-[500px]" src={anime2} alt="" />      </div>
                  <div>
                    <img className="w-[50px] h-[50px] box-border rounded-[500px]" src={anime3} alt="" />      </div>
                  <div>
                    <img className="w-[50px] h-[50px] box-border rounded-[500px]" src={anime4} alt="" />      </div>
                  <div>
                    <img className="w-[50px] h-[50px] box-border rounded-[500px]" src={anime5} alt="" />      </div>
                  <div>
                    <img className="w-[50px] h-[50px] box-border rounded-[500px]" src={anime6} alt="" />      </div>
                </Slider>
                </div>
              </div>

            </div>
        </div>



   
   
   
   
      <div className=" container  flex-col  md:flex  lg:flex-row  flex justify-evenly  items-center sm:flex-col  m-auto  ">



        {/* righrimages */}

        <div className=" box-border relative    lg: w-auto h-auto flex float-left pt-[10px] pb-[10px]   md:flex-row  pt-[10px] pb-[10px] box-border ml-0  sm:pt-[10px] pb-[10px] ml-0">
          <div className=" lg:pt-[50px] md:pt-[30px] md:pb-[0px] sm:pt-[30px] sm:pb-[0px]  lg:pb-[50px]" >

            <img className="flex  z-10  bg-white w-[150px] h-[150px] md:w-[600px] md:h-[500px] lg:w-[600px] lg:h-[500px] sm:w-[200px] sm:h-[200px]" src={Imageshape} alt="" />


            {/* <img className="flex  z-10 absolute bg-white mix-blend-screen w-[600px] h-[500px]" src={Shape} alt="" /> */}
            {/* <img className="relativ w-[600px]  h-[500px]" src={Image} alt="" /> */}
            {/* <img className="relativ w-[1000px]" src={Image21} alt=""/>  */}
          </div>
        </div>

        {/* leftcontent */}
        <div className=" pl-[0] md:pl-[50px] lg:pl-[50px] max-w-screen-sm ">
          <motion.div
            initial={{ opacity: 0, y: -70 }}
            whileInView={{ opacity: 100, y: 0, transition: { delay: 0.8, duration: 0.8 } }}
            viewport={{ once: true }}>
            <p className=" font-bold  lg:text-[30px] sm:text-[19px] lg:leading-[30px] sm:leading-[10px] font-[Roboto, sans-serif] bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text">
              Join KAIT Community Today
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 100, transition: { delay: 0.8, duration: 0.8 } }}
            viewport={{ once: true }}>  <h3 style={{ fontFamily: "Nunito,sans-serif" }} className="  lg:text-[46px] sm:[19px] lg:leading-[65px] sm:leading-[20px] font-extrabold relative">Are you ready to take the first step towards greatness?</h3></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 140 }}
            whileInView={{ opacity: 100, y: 0, transition: { delay: 0.8, duration: 0.8 } }}
            viewport={{ once: true }}>  <p className="font-roboto font-normal text-base lg:leading-9  sm:leading-3 text-gray-700 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">Join the KAIT community today and start your journey towards pushing your limits and claiming victory.  Our user-friendly KAIT staking app allows you to earn passive income. Maximize your returns with industry-leading APYs.</p></motion.div>

          <a href='https://www.kaitworld.com/public/register'><h2 className='  btn btn-border-4  font-bold text-lg px-2 py-1  border-black  hover:shadow-2xl  hover:bg-gradient-to-r from-blue-800 to-pink-500   transition duration-500 ease-in-out ' >Start Staking Today!</h2></a>
          {/* left bottom content */}

          <div className="flex items-center max-w-screen-md mt-10 text-left">
            <div className="flex gap-2">

              <div>
                {/* <img className="w-[300px] h-[200px]" src={Image} />   */}

              </div>
              {/* <div>
        <h2 style={{ fontFamily: "Nunito,sans-serif" }} className="  text-blue-900 font-bold text-4xl leading-10 mb-4">Join Our Upcoming Campaign</h2>

        <p className="text-gray-700 font-normal text-base leading-7 mb-0 font-roboto">Make an impact one piece of clothing at a time to need of others</p></div> */}
            </div>
          </div>



        </div>
        {/* </motion.div> */}
      </div>


    </div>
  )
}

export default Home