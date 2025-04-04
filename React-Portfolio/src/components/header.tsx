import profileImg from "../assets/Ghibli.jpg";

function Header() {
  return (
    <>
      <section className="hero">
      <div className="content">
        <div className="left">
          <p>Hi I'm</p>
          <h1>Mark Daniel Aguinaldo</h1>
          <h2>
            Full-Stack Engineer
          </h2>
          <p>
            I build modern web applications with clean code, responsive
            design, and performance in mind.
          </p>
        </div>
        <div className="right">
          <img src={profileImg} className="image" alt="Profile Image" />
        </div>
      </div>
    </section>
    </>
  );
}

export default Header;
