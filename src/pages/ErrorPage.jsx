import Lottie from "lottie-react";
import errorAnimation from "../assets/animations/error_animation.json";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie animationData={errorAnimation}></Lottie>
    </div>
  );
};

export default ErrorPage;
