import React from "react";
import { motion } from "motion/react";

import pic1 from '../assets/about1.jpg'
import pic2 from '../assets/about2.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
       <div className="flex-1">
         <motion.img
          src={pic1}
          animate = {{y: [100, 150, 100]}}
          transition={{duration: 5 , repeat: Infinity}}

          className="max-w-sm border-s-8 border-b-8 border-blue-500  rounded-tl-4xl rounded-br-4xl  shadow-2xl"
        />
         <motion.img
          src={pic2}
          animate = {{x: [100, 150, 100]}}
          transition={{duration: 5 , delay : 2,  repeat: Infinity}}

          className=" h-80 border-t-8 border-r-8 border-blue-500  rounded-tr-4xl rounded-bl-4xl  shadow-2xl"
        />
       </div>
        <div className="flex-1 ">
          {/* <motion.h1
      animate={{rotate: 180,
        x : 200,
        y: -200,
         transition: { duration: 4 }
      }}   
      className="text-5xl font-bold">Latest Jobs For you!</motion.h1> */}

          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 1 } }}
            className="text-5xl font-bold"
          >
            Remote{" "}
            <motion.span
              animate={{
                color: ["#ff5733", "#33ff33", "#8a33ff"],
                transition: { duration: 2, repeat: Infinity },
              }}
            >
              Jobs
            </motion.span>{" "}
            For you!
          </motion.h1>

          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
