import React from 'react';

import Hedder from './component/hedder/Hedder';
import Footer from './component/footer/Footer';
import Questions from './component/questions/Questions';
import Widget, { WidgetProps } from './component/widget/Widget';
import TopSection from './component/topSection/TopSection';
import computerImage from "./images/computer.png";
import magnifying_glass from "./images/magnifying_glass.png";


const WIDGETS: WidgetProps[] = [
  {
    title: 'Web & Mobile App Development',
    text: 'Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.',
    buttonName: 'LEARN MORE',
    isImageRight: false,
    image: computerImage
  },
  {
    title: 'Digital Strategy Consulting',
    text: 'Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.',
    buttonName: 'LEARN MORE',
    isImageRight: true,
    image: magnifying_glass
  }



]

function App() {
  return (
    <div className="">
      <Hedder />

      {/* body */}
      <TopSection />
      <div className='flex justify-center items-center flex-col mx-10'>
        <div>
          {WIDGETS.map((widget, index) => {
            return <Widget key={index} {...widget} />
          })}
        </div>
        <Questions />
      </div>

      <Footer />
    </div>
  );
}

export default App;
