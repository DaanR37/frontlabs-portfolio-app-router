import MainVideo from "../../assets/Amsterdam-small-size.mp4";

const CoverVideo = () => {

    return (
        <section className="absolute w-full h-[100vh]">
            <video src={MainVideo} typeof="video/mov"
                autoPlay muted loop
                className="absolute w-full h-[100vh] object-cover"
            />
        </section>
    );
};

export default CoverVideo;
