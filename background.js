import React from 'react';
import './background.css';
import before from './images/before.png';
import after from './images/after.png';
import ReactCompareImage from 'react-compare-image';


function Background  () {
  return (
    <>
  <div>
  <div className="bgf"></div>
      <div className="bgf bgf2"></div>
      <div className="bgf bgf3"></div>
    <div className='good'>
        <div className="v4_10"></div>
        <div className="v1_10">
          <div className="care">
            <span>SELF-CARE IS GIVING THE WORLD THE BEST OF YOU, INSTEAD OF THE LEFT OF YOU</span>
          </div>
        </div>
        <div className="v5_11">
          <div className="donateeee">
            <span>HAIR ALWAYS GROWS BACK SO GIVE IT TO THE ONES IN NEED</span>
          </div>
        </div>
      </div>
      <div className="v5_12">
        <div className="donat879">
          <span>STRAIGTH, WAVY OR CURLY, IF IT'S HEALTHY, IT'S BEAUTIFUL</span>
        </div>
      </div>
      <div className="v5_13">
        <div className="donat">
          <span>YOU'RE BORN WITH THE ABILITY TO CHANGE SOMEONE'S LIFE</span>
        </div>
      </div>
      <div className='virtualjan'>
  <div className='rightjan'>
      <div className='wrapperjan'>
      <ReactCompareImage leftImage={before} rightImage={after}/>
      </div>
  </div>
  </div>
  </div>
</>
)
}
export default Background;