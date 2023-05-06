import {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/profile.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import styles from "../styles/Login.module.css";
import extend from "../styles/Register.module.css";
import theme from "../styles/theme.module.css";
import convertToBase64 from "../helper/convert.js";
const Register = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState();
    const onUpload = async (e) => {
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64)
    }
  return (
    <>
      <div
        className={`${theme.backgroundImg} flex justify-center items-center h-[100vh] w-full`}
      >
        <Toaster position="top-center" reverseOrder={false}></Toaster>

        <div className="flex justify-center items-center w-full max-h-max my-12">
          <div className={`${styles.glass} ${extend.glass}`}>
            <div className="title flex flex-col items-center">
              <h4 className="text-4xl font-bold">Register Now</h4>
            </div>

            <form className="py-1">
              <div className="profile flex justify-center py-4">
                <label htmlFor="profile">
                  <img
                    src={file || avatar}
                                      className={`${styles.profile_img} object-cover`}
                    alt="avatar"
                  />
                </label>

                <input onChange={onUpload} type="file" id="profile" name="profile" />
              </div>

              <div className="textbox flex flex-col items-center gap-6 ">
                <div className="grid grid-cols-2 gap-4 place-items-center">
                  <input
                    className={extend.textbox}
                    type="text"
                    placeholder="First Name*"
                  />
                  <input
                    className={extend.textbox}
                    type="text"
                    placeholder="Last Name*"
                  />

                  <input
                    className={`${extend.textbox} col-span-2`}
                    type="email"
                    placeholder="Email*"
                  />
                  <input
                    className={`${extend.textbox} col-span-2`}
                    type="tel"
                    placeholder="Mobile*"
                  />
                  <input
                    className={extend.textbox}
                    type="password"
                    placeholder="Password*"
                  />
                  <input
                    className={extend.textbox}
                    type="password"
                    placeholder="Confirm Password*"
                  />

                  <button
                    className={`${styles.btn} ${extend.btn} ${theme.primary} col-span-2`}
                    type="submit" onClick={()=>navigate('/login', {replace:true})}
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              <div className="text-center py-4">
                <span className="text-gray-500">
                  Already Register?
                  <Link className="text-red-500" to="/login">
                    Login Now
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
