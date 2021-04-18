import Hero from '../hero/Hero.js';
import Text from '../text/Text.js';
import Slider from '../slider/Slider.js';

function Content() {
  return (
    <main className="main u-padding">
      <h2>Contenido principal</h2>
      <Hero />
      <Text />
      <Slider />
    </main>
  );
}

export default Content;
