import React from 'react';

import Hedder from './component/hedder/Hedder';
import Footer from './component/footer/Footer';
import Questions from './component/questions/Questions';
import Widget, { WidgetProps } from './component/widget/Widget';
import TopSection from './component/topSection/TopSection';


const WIDGETS: WidgetProps[] = [
  {
    title: 'Web & Mobile App Development',
    text: 'Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.',
    buttonName: 'LEARN MORE',
    isImageRight: false,
    image: "https://s3-alpha-sig.figma.com/img/7f59/6d31/c2149f00214af5481c570aeb1a76d7d3?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VhAIw7O~7KjbE1DiJD~9tEw8Wlf4RteG8MloZUVRxwN5ezWLfYI4ZTlZpOO-XZRkZHTkXdWRQLK92zuBdKh51HlYh8NAq~mO8zUCId3fhLSh2WBFld9P~0kcfoOlHkhmO3D9zI0UjjQ~zNn~CQZdQERwX8H0XZhkzFbFvM54~8ryzv8RLOPYeKqM78MlIFZ7i7dZzBgL-~8oBrdCSB5jRMRfiY0aa9kQJjfudqQFuRJ7dyxcdqrZD4UvEhcJ1K6vcyPE4y5ljKKHoefUeSOAjScmLovsRskdHtUBwtccmFSKfEA5yCyrE48~1j3QBPwda3~rOQz2mPwfMEyRvyrJqQ__"
  },
  {
    title: 'Digital Strategy Consulting',
    text: 'Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.',
    buttonName: 'LEARN MORE',
    isImageRight: true,
    image: "https://s3-alpha-sig.figma.com/img/a2c7/a630/be108bd31437b72eaae8e1dbd7abd910?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q1sxZ5KvoKvvrP~e-3Ekv6h6Iu8O5Zs1EamngJ2U3fzj6qJC6cB7h8c191hXyLekGFKrPDCDGnnJmImDKJxQ5yuBPlmJdb9o4z0onin1OzlzAfLaRPdG0KVAxmg1b3Fq5DtL6v6rIzPt2kGe8t5k9ugmmiXaGRuGIoM~O4B-Mtw0RIHy1N5VOFkHadGVK0BVXL1PLU1VD3XJkbVwftBlkK~wJNJOUx5V927TvJJ29cc6~wYBSlZ~k542WKaDQ8t1EWRxUwdHjB8qbfbHHKB3R-cnDyiD8ZxpkQLsKJ~KLIIbc9BMpJUutvJLABxtRp6sb4qtMMfbZhSTxtD-hxwiGw__"
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
