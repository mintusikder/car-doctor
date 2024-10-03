import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero-content  flex-col lg:flex-row mt-24 mb-24">
      <div className="w-1/2 relative">
        <img src={person} className="max-w-sm w-3/4 rounded-lg shadow-2xl " />
        <img
          className="w-1/2 border-8 border-white absolute top-1/2 left-1/2"
          src={parts}
          alt=""
        />
      </div>

      <div className="w-1/2 space-y-4">
      <p className="font-bold text-orange-500">About Us</p>
        <h1 className="text-4xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
        <p >
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
        </p>
        <p >
        the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
        </p>
        <button className="btn btn-outline btn-warning">Get More Info</button>
      </div>
    </div>
  );
};

export default About;
