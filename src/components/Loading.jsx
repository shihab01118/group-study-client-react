import Lottie from "lottie-react";
import loading_animation from '../assets/animations/loading_animation.json';


const Loading = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <Lottie className="h-24" animationData={loading_animation}></Lottie>
          </div>
    );
};

export default Loading;