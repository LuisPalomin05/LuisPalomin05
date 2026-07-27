import HeroTextTittle from "./HeroTextTittle";
import HeroTextAbout from "./HeroTextAbout";
import HeroGitElements from "./HeroGitElements"


const Hero = () => {
  return (
    <section className="heroPerfil">
      <HeroTextTittle />
      <HeroTextAbout />
      <HeroGitElements />
    </section>
  );
};

export default Hero;
