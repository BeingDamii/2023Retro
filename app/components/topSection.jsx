import Link from "next/link";
import { NormalButton, SwitchTheme } from "./buttons";

const TopSection = () => {
  return (
    <div className="top-section-wrapper">
      <h1 className="large-heading">2023 RETRO</h1>
      <div className="items-wrapper">
        <h3 className="small-heading">Tell your 2023 story</h3>
        <div className="buttons-wrapper">
          <NormalButton text="Tell your story" link="/tell-story" />
          <NormalButton text="Twitter" link="https://twitter.com/hydedenz" />
          <SwitchTheme text="Dark mode"/>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
