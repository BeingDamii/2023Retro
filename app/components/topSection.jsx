import Link from "next/link";

const TopSection = () => {
  return (
    <div className="top-section-wrapper">
      <h1 className="large-heading">2023 RETRO</h1>
      <div className="items-wrapper">
        <h3 className="small-heading">Tell your 2023 story</h3>
        <div className="buttons-wrapper">
          <Link className="button" href="/add-story">
            Tell your story
          </Link>
          <Link className="button" href="/add-story">
            Twitter
          </Link>
          <Link className="button" href="/add-story">
            Dark mode
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
