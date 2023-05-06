import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/profile.png";
import { Toaster } from "react-hot-toast";
// import { useFormik } from "formik";
import styles from "../styles/Login.module.css";
import theme from "../styles/theme.module.css";



const Login = () => {
    const navigate = useNavigate();
    const loginUser = () => {
        localStorage.setItem("userloggedIn", true);
        navigate('/', {replace:true});
    };
  return (
    <>
      <div
        className={`${theme.backgroundImg} flex justify-center items-center h-[100vh] w-full`}
      >
        <Toaster position="top-center" reverseOrder={false}></Toaster>

        <div className="flex justify-center items-center w-full max-h-max mt-12">
          <div className={styles.glass}>
            <div className="title flex flex-col items-center">
              <h4 className="text-4xl font-bold">Hello Again!</h4>
            </div>

            <form className="py-1">
              <div className="profile flex justify-center py-4">
                <img src={avatar} className={styles.profile_img} alt="avatar" />
              </div>

              <div className="textbox flex flex-col items-center gap-6">
                <input
                  className={styles.textbox}
                  type="text"
                  placeholder="Email"
                />
                <input
                  className={styles.textbox}
                  type="password"
                  placeholder="Password"
                />
                <button
                  className={`${styles.btn} ${theme.primary}`}
                  type="submit"
                  onClick={loginUser}
                >
                  Sign In
                </button>
              </div>

              <div className="text-center py-4">
                <span className="text-gray-500">
                  Not a Member?
                  <Link className="text-red-500" to="/register">
                    Register Now
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

export default Login;
