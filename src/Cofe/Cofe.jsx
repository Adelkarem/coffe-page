import React from 'react'
import './Cofe.css'
const Cofe = () => {
    function resize() {
        if (window.innerWidth <=800) {
          console.log('set to 4');
          document.getElementById('blurFilter').setAttribute('stdDeviation', 4);
        }else{
          console.log('set to 10');
          document.getElementById('blurFilter').setAttribute('stdDeviation', 8);
        }
      }
    
      window.addEventListener("resize", resize);
      document.addEventListener("DOMContentLoaded", resize);
    
  return (
    <div>
      <section className='cofeup1'>
  <div id="plate">
    <div id="cup">
        <div id="cupInner"></div>
      <div id="coffeBg">
        <div id="foamWrapper">
          <div id="foam1" class="foam"></div>
          <div id="foam2" class="foam"></div>
          <div id="foam3" class="foam"></div>
          <div id="foam4" class="foam"></div>
          <div id="foam5" class="foam"></div>
          <div id="foam6" class="foam"></div>
          <div id="foam7" class="foam"></div>
          <div id="foam8" class="foam"></div>
          <div id="foam9" class="foam"></div>
          <div id="foam10" class="foam"></div>
          <div id="foam11" class="foam"></div>
          <div id="foam12" class="foam"></div>
          <div id="foam13" class="foam"></div>

          <div id="foamMiddleWrapper">
            <div id="foamMiddleContainer">
            <div id="foamMiddle1" class="foamMiddle"></div>
            <div id="foamMiddle2" class="foamMiddle"></div>
              <div id="bubbleMiddle1" class="bubble"></div>
              <div id="bubbleMiddle2" class="bubble"></div>
              <div id="bubbleMiddle3" class="bubble"></div>
              <div id="bubbleMiddle4" class="bubble"></div>
            </div>
          </div>

          <div id="bubble1" class="bubble"></div>
          <div id="bubble2" class="bubble"></div>
          <div id="bubble3" class="bubble"></div>
          <div id="bubble4" class="bubble"></div>
          <div id="bubble5" class="bubble"></div>
          <div id="bubble6" class="bubble"></div>
          <div id="bubble7" class="bubble"></div>
          <div id="bubble8" class="bubble"></div>
          <div id="bubble9" class="bubble"></div>
          <div id="bubble10" class="bubble"></div>
          <div id="bubble11" class="bubble"></div>
          <div id="bubble12" class="bubble"></div>
          <div id="bubble13" class="bubble"></div>
          <div id="bubble14" class="bubble"></div>
          <div id="bubble15" class="bubble"></div>

          <div id="bubbleSmall1" class="bubbleSmall"></div>
          <div id="bubbleSmall2" class="bubbleSmall"></div>
          <div id="bubbleSmall3" class="bubbleSmall"></div>
          <div id="bubbleSmall4" class="bubbleSmall"></div>
          <div id="bubbleSmall5" class="bubbleSmall"></div>
          <div id="bubbleSmall6" class="bubbleSmall"></div>
          <div id="bubbleSmall7" class="bubbleSmall"></div>
          <div id="bubbleSmall8" class="bubbleSmall"></div>

        </div>
        <div id="innerShadow"></div>
        <div id="glow"></div>
      </div>
    </div>
    <div id="handle"></div>
  </div>
<div id="steamWrapper">
  <div id="steam"></div>
</div>

  <svg width="0" height="0" >
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" id="blurFilter"/>
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -5" result="goo" />
        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
      </filter>
    </defs>
  </svg>

  <svg width="0" height="0" >
    <defs>
      <filter id="scatter">
        <feTurbulence baseFrequency="10.9" type="fractalNoise" numOctaves="1"/>
        <feDisplacementMap in="SourceGraphic" xChannelSelector="G" yChannelSelector="B" scale="20"/>
        <feComposite operator="in" in2="finalMask"/>
      </filter>
    </defs>
  </svg>

  <svg width="0" height="0" >
    <filter id="fog">
      <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="10" />
      <feDisplacementMap in="SourceGraphic" scale="180" />
    </filter>
  </svg>
</section>
    </div>
  )
}

export default Cofe
