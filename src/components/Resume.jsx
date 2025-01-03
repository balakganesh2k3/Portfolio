import { motion } from "framer-motion";



const Resume = () => {
  return (
    <div className=" text-white">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">
            Resume
      </motion.h2>

      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }} 
       className="mt-4 text-lg text-center opacity-80">
        Download my latest resume by clicking the button below.
      </motion.p>

      <div className="flex justify-center mt-8">
        {/* Updated link to the new resume file */}
        <a href="/bgk_resume.pdf" download="Bala_Ganesh_New_Resume.pdf">
          <button className="px-6 py-3 bg-blue-800 text-white my-10 text-center text-xl rounded-lg hover:bg-blue-900 transition duration-300">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
