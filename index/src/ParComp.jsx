import React from 'react';
import Child from './ChildCom';

const Parent = () => {
  return (
    <div>
      <Child
        name="The Season's Latest"
        head="Get the season's latest in a flick of your hand"
        button="Show More"
        style="style" /* The style class applies the background image */
        desc="desc"
        heading="heading"
        para="para"
        but="but"
      />

      <Child
        name="Our Designs"
        head="Get the season's latest in a flick of your hand"
        button="Show More"
        style="style1" /* Second card background */
        desc="desc1"
        heading="heading1"
        para="para"
        but="but"
      />

      <Child
        name="Insider"
        head="Get the season's latest in a flick of your hand"
        button="Show More"
        style="style2" /* Third card background */
        desc="desc2"
        heading="heading1"
        para="para"
        but="but"
      />
    </div>
  );
};

export default Parent;
