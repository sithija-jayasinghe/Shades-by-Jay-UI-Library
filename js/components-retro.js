/* ============================================
   Retro Components
   ============================================ */

const retroComponents = [
    {
        id: 201,
        name: "Retro TV 404",
        category: "retro",
        tags: ["retro", "tv", "404", "animated", "css-art"],
        html: `<div class="retro-tv-wrapper">
    <div class="main_wrapper">
      <div class="main">
        <div class="antenna">
          <div class="antenna_shadow"></div>
          <div class="a1"></div>
          <div class="a1d"></div>
          <div class="a2"></div>
          <div class="a2d"></div>
          <div class="a_base"></div>
        </div>
        <div class="tv">
          <div class="cruve">
            <svg
              class="curve_svg"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 189.929 189.929"
              xml:space="preserve"
            >
              <path
                d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
            C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
              ></path>
            </svg>
          </div>
          <div class="display_div">
            <div class="screen_out">
              <div class="screen_out1">
                <div class="screen">
                  <span class="notfound_text"> NOT FOUND</span>
                </div>
                <div class="screenM">
                  <span class="notfound_text"> NOT FOUND</span>
                </div>
              </div>
            </div>
          </div>
          <div class="lines">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
          <div class="buttons_div">
            <div class="b1"><div></div></div>
            <div class="b2"></div>
            <div class="speakers">
              <div class="g1">
                <div class="g11"></div>
                <div class="g12"></div>
                <div class="g13"></div>
              </div>
              <div class="g"></div>
              <div class="g"></div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="base1"></div>
          <div class="base2"></div>
          <div class="base3"></div>
        </div>
      </div>
      <div class="text_404">
        <div class="text_4041">4</div>
        <div class="text_4042">0</div>
        <div class="text_4043">4</div>
      </div>
    </div>
</div>`,
        css: `.retro-tv-wrapper {
  font-size: 5px; /* Scale down for preview */
}

.main_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30em;
  height: 30em;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5em;
}

.antenna {
  width: 5em;
  height: 5em;
  border-radius: 50%;
  border: 2px solid black;
  background-color: #f27405;
  margin-bottom: -6em;
  margin-left: 0em;
  z-index: -1;
}
.antenna_shadow {
  position: absolute;
  background-color: transparent;
  width: 50px;
  height: 56px;
  margin-left: 1.68em;
  border-radius: 45%;
  transform: rotate(140deg);
  border: 4px solid transparent;
  box-shadow:
    inset 0px 16px #a85103,
    inset 0px 16px 1px 1px #a85103;
  -moz-box-shadow:
    inset 0px 16px #a85103,
    inset 0px 16px 1px 1px #a85103;
}
.antenna::after {
  content: "";
  position: absolute;
  margin-top: -9.4em;
  margin-left: 0.4em;
  transform: rotate(-25deg);
  width: 1em;
  height: 0.5em;
  border-radius: 50%;
  background-color: #f69e50;
}
.antenna::before {
  content: "";
  position: absolute;
  margin-top: 0.2em;
  margin-left: 1.25em;
  transform: rotate(-20deg);
  width: 1.5em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #f69e50;
}
.a1 {
  position: relative;
  top: -102%;
  left: -130%;
  width: 12em;
  height: 5.5em;
  border-radius: 50px;
  background-image: linear-gradient(
    #171717,
    #171717,
    #353535,
    #353535,
    #171717
  );
  transform: rotate(-29deg);
  clip-path: polygon(50% 0%, 49% 100%, 52% 100%);
}
.a1d {
  position: relative;
  top: -211%;
  left: -35%;
  transform: rotate(45deg);
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  border: 2px solid black;
  background-color: #979797;
  z-index: 99;
}
.a2 {
  position: relative;
  top: -210%;
  left: -10%;
  width: 12em;
  height: 4em;
  border-radius: 50px;
  background-color: #171717;
  background-image: linear-gradient(
    #171717,
    #171717,
    #353535,
    #353535,
    #171717
  );
  margin-right: 5em;
  clip-path: polygon(
    47% 0,
    47% 0,
    34% 34%,
    54% 25%,
    32% 100%,
    29% 96%,
    49% 32%,
    30% 38%
  );
  transform: rotate(-8deg);
}
.a2d {
  position: relative;
  top: -294%;
  left: 94%;
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  border: 2px solid black;
  background-color: #979797;
  z-index: 99;
}

.notfound_text {
  background-color: black;
  padding-left: 0.3em;
  padding-right: 0.3em;
  font-size: 0.75em;
  color: white;
  letter-spacing: 0;
  border-radius: 5px;
  z-index: 10;
}
.tv {
  width: 17em;
  height: 9em;
  margin-top: 3em;
  border-radius: 15px;
  background-color: #d36604;
  display: flex;
  justify-content: center;
  border: 2px solid #1d0e01;
  box-shadow: inset 0.2em 0.2em #e69635;
}
.tv::after {
  content: "";
  position: absolute;
  width: 17em;
  height: 9em;
  border-radius: 15px;
  background:
    repeating-radial-gradient(#d36604 0 0.0001%, #00000070 0 0.0002%) 50% 0/2500px
      2500px,
    repeating-conic-gradient(#d36604 0 0.0001%, #00000070 0 0.0002%) 60% 60%/2500px
      2500px;
  background-blend-mode: difference;
  opacity: 0.09;
}
.curve_svg {
  position: absolute;
  margin-top: 0.25em;
  margin-left: -0.25em;
  height: 12px;
  width: 12px;
}
.display_div {
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 3.5px 3.5px 0px #e69635;
}
.screen_out {
  width: auto;
  height: auto;

  border-radius: 10px;
}
.screen_out1 {
  width: 11em;
  height: 7.75em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.screen {
  width: 13em;
  height: 7.85em;
  font-family: Montserrat;
  border: 2px solid #1d0e01;
  background:
    repeating-radial-gradient(#000 0 0.0001%, #ffffff 0 0.0002%) 50% 0/2500px
      2500px,
    repeating-conic-gradient(#000 0 0.0001%, #ffffff 0 0.0002%) 60% 60%/2500px
      2500px;
  background-blend-mode: difference;
  animation: b 0.2s infinite alternate;
  border-radius: 10px;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #252525;
  letter-spacing: 0.15em;
  text-align: center;
}

.screenM {
  width: 13em;
  height: 7.85em;
  position: relative;
  font-family: Montserrat;
  background: linear-gradient(
    to right,
    #002fc6 0%,
    #002bb2 14.2857142857%,
    #3a3a3a 14.2857142857%,
    #303030 28.5714285714%,
    #ff0afe 28.5714285714%,
    #f500f4 42.8571428571%,
    #6c6c6c 42.8571428571%,
    #626262 57.1428571429%,
    #0affd9 57.1428571429%,
    #00f5ce 71.4285714286%,
    #3a3a3a 71.4285714286%,
    #303030 85.7142857143%,
    white 85.7142857143%,
    #fafafa 100%
  );
  border-radius: 10px;
  border: 2px solid black;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #252525;
  letter-spacing: 0.15em;
  text-align: center;
  overflow: hidden;
}
.screenM:before,
.screenM:after {
  content: "";
  position: absolute;
  left: 0;
  z-index: 1;
  width: 100%;
}
.screenM:before {
  top: 0;
  height: 68.4782608696%;
  background: linear-gradient(
    to right,
    white 0%,
    #fafafa 14.2857142857%,
    #ffe60a 14.2857142857%,
    #f5dc00 28.5714285714%,
    #0affd9 28.5714285714%,
    #00f5ce 42.8571428571%,
    #10ea00 42.8571428571%,
    #0ed600 57.1428571429%,
    #ff0afe 57.1428571429%,
    #f500f4 71.4285714286%,
    #ed0014 71.4285714286%,
    #d90012 85.7142857143%,
    #002fc6 85.7142857143%,
    #002bb2 100%
  );
}
.screenM:after {
  bottom: 0;
  height: 21.7391304348%;
  background: linear-gradient(
    to right,
    #006c6b 0%,
    #005857 16.6666666667%,
    white 16.6666666667%,
    #fafafa 33.3333333333%,
    #001b75 33.3333333333%,
    #001761 50%,
    #6c6c6c 50%,
    #626262 66.6666666667%,
    #929292 66.6666666667%,
    #888888 83.3333333333%,
    #3a3a3a 83.3333333333%,
    #303030 100%
  );
}

@keyframes b {
  100% {
    background-position:
      50% 0,
      60% 50%;
  }
}

.lines {
  display: flex;
  column-gap: 0.1em;
  align-self: flex-end;
}
.line1,
.line3 {
  width: 2px;
  height: 0.5em;
  background-color: black;
  border-radius: 25px 25px 0px 0px;
  margin-top: 0.5em;
}
.line2 {
  flex-grow: 1;
  width: 2px;
  height: 1em;
  background-color: black;
  border-radius: 25px 25px 0px 0px;
}

.buttons_div {
  width: 4.25em;
  align-self: center;
  height: 8em;
  background-color: #e69635;
  border: 2px solid #1d0e01;
  padding: 0.6em;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 0.75em;
  box-shadow: 3px 3px 0px #e69635;
}
.b1 {
  width: 1.65em;
  height: 1.65em;
  border-radius: 50%;
  background-color: #7f5934;
  border: 2px solid black;
  box-shadow:
    inset 2px 2px 1px #b49577,
    -2px 0px #513721,
    -2px 0px 0px 1px black;
}
.b1::before {
  content: "";
  position: absolute;
  margin-top: 1em;
  margin-left: 0.5em;
  transform: rotate(47deg);
  border-radius: 5px;
  width: 0.1em;
  height: 0.4em;
  background-color: #000000;
}
.b1::after {
  content: "";
  position: absolute;
  margin-top: 0.9em;
  margin-left: 0.8em;
  transform: rotate(47deg);
  border-radius: 5px;
  width: 0.1em;
  height: 0.55em;
  background-color: #000000;
}
.b1 div {
  content: "";
  position: absolute;
  margin-top: -0.1em;
  margin-left: 0.65em;
  transform: rotate(45deg);
  width: 0.15em;
  height: 1.5em;
  background-color: #000000;
}
.b2 {
  width: 1.65em;
  height: 1.65em;
  border-radius: 50%;
  background-color: #7f5934;
  border: 2px solid black;
  box-shadow:
    inset 2px 2px 1px #b49577,
    -2px 0px #513721,
    -2px 0px 0px 1px black;
}
.b2::before {
  content: "";
  position: absolute;
  margin-top: 1.05em;
  margin-left: 0.8em;
  transform: rotate(-45deg);
  border-radius: 5px;
  width: 0.15em;
  height: 0.4em;
  background-color: #000000;
}
.b2::after {
  content: "";
  position: absolute;
  margin-top: -0.1em;
  margin-left: 0.65em;
  transform: rotate(-45deg);
  width: 0.15em;
  height: 1.5em;
  background-color: #000000;
}
.speakers {
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;
}
.speakers .g1 {
  display: flex;
  column-gap: 0.25em;
}
.speakers .g1 .g11,
.g12,
.g13 {
  width: 0.65em;
  height: 0.65em;
  border-radius: 50%;
  background-color: #7f5934;
  border: 2px solid black;
  box-shadow: inset 1.25px 1.25px 1px #b49577;
}
.speakers .g {
  width: auto;
  height: 2px;
  background-color: #171717;
}

.bottom {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8.7em;
}
.base1 {
  height: 1em;
  width: 2em;
  border: 2px solid #171717;
  background-color: #4d4d4d;
  margin-top: -0.15em;
  z-index: -1;
}
.base2 {
  height: 1em;
  width: 2em;
  border: 2px solid #171717;
  background-color: #4d4d4d;
  margin-top: -0.15em;
  z-index: -1;
}
.base3 {
  position: absolute;
  height: 0.15em;
  width: 17.5em;
  background-color: #171717;
  margin-top: 0.8em;
}

.text_404 {
  position: absolute;
  display: flex;
  flex-direction: row;
  column-gap: 6em;
  z-index: -5;
  margin-bottom: 2em;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  font-family: Montserrat;
}
.text_4041 {
  transform: scaleY(24.5) scaleX(9);
}
.text_4042 {
  transform: scaleY(24.5) scaleX(9);
}
.text_4043 {
  transform: scaleY(24.5) scaleX(9);
}

@media only screen and (max-width: 495px) {
  .text_404 {
    column-gap: 6em;
  }
}
@media only screen and (max-width: 395px) {
  .text_404 {
    column-gap: 4em;
  }
  .text_4041 {
    transform: scaleY(25) scaleX(8);
  }
  .text_4042 {
    transform: scaleY(25) scaleX(8);
  }
  .text_4043 {
    transform: scaleY(25) scaleX(8);
  }
}

@media (max-width: 275px), (max-height: 520px) {
  .main {
    position: relative;
  }
}

@media only screen and (max-width: 1024px) {
  .screenM {
    display: flex;
  }
  .screen {
    display: none;
  }
}
@media only screen and (min-width: 1025px) {
  .screen {
    display: flex;
  }
  .screenM {
    display: none;
  }
}`
    },
    {
        id: 202,
        name: "Retro Cassette Tape",
        category: "retro",
        tags: ["retro", "music", "cassette", "css-art"],
        html: `<div class="cassette-wrapper">
    <div class="cassette">
        <div class="cassette-label">
            <div class="label-top">
                <span>A</span>
                <span class="title">AWESOME MIX VOL. 1</span>
                <span>60</span>
            </div>
            <div class="window">
                <div class="reel left"></div>
                <div class="reel right"></div>
                <div class="tape-connector"></div>
            </div>
        </div>
        <div class="cassette-bottom">
            <div class="screw"></div>
            <div class="screw"></div>
            <div class="screw"></div>
            <div class="screw"></div>
        </div>
    </div>
</div>`,
        css: `.cassette-wrapper {
    font-size: 10px;
}

.cassette {
    width: 30em;
    height: 19em;
    background: #333;
    border-radius: 1em;
    position: relative;
    padding: 1em;
    box-shadow: 
        inset 0 0 2em rgba(0,0,0,0.5),
        0 1em 2em rgba(0,0,0,0.3);
    border: 0.2em solid #222;
}

.cassette-label {
    width: 100%;
    height: 13em;
    background: #f4d03f;
    border-radius: 0.5em;
    position: relative;
    padding: 1em;
    box-shadow: inset 0 0 1em rgba(0,0,0,0.1);
}

.label-top {
    display: flex;
    justify-content: space-between;
    font-family: 'Courier New', monospace;
    font-weight: bold;
    color: #333;
    margin-bottom: 1em;
    font-size: 1.2em;
}

.title {
    text-decoration: underline;
    font-style: italic;
}

.window {
    width: 18em;
    height: 5em;
    background: rgba(0,0,0,0.2);
    margin: 0 auto;
    border-radius: 2.5em;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2em;
    border: 0.2em solid rgba(0,0,0,0.3);
}

.reel {
    width: 3.5em;
    height: 3.5em;
    background: white;
    border-radius: 50%;
    position: relative;
    border: 0.4em solid #fff;
    box-shadow: 0 0 0 0.2em #333;
}

.reel::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1em;
    height: 1em;
    background: #333;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

.reel.left::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8em;
    height: 8em;
    border-radius: 50%;
    border: 2em solid #333;
    z-index: -1;
}

.cassette-bottom {
    position: absolute;
    bottom: 1em;
    left: 1em;
    right: 1em;
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
}

.screw {
    width: 1em;
    height: 1em;
    background: #555;
    border-radius: 50%;
    position: relative;
    box-shadow: inset 0 0 0.2em rgba(0,0,0,0.5);
}

.screw::before, .screw::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #222;
}

.screw::before { width: 60%; height: 10%; }
.screw::after { width: 10%; height: 60%; }`
    },
    {
        id: 203,
        name: "Retro Gameboy",
        category: "retro",
        tags: ["retro", "game", "console", "css-art"],
        html: `<div class="gameboy-wrapper">
    <div class="gameboy">
        <div class="screen-area">
            <div class="power-led"></div>
            <div class="screen-glass">
                <div class="lcd">
                    <div class="pixel-art">
                        GAME<br>OVER
                    </div>
                </div>
            </div>
        </div>
        <div class="controls">
            <div class="d-pad">
                <div class="up"></div>
                <div class="right"></div>
                <div class="down"></div>
                <div class="left"></div>
                <div class="center"></div>
            </div>
            <div class="action-btns">
                <div class="btn-b"></div>
                <div class="btn-a"></div>
            </div>
        </div>
        <div class="start-select">
            <div class="btn-select"></div>
            <div class="btn-start"></div>
        </div>
        <div class="speaker-grill">
            <span></span><span></span><span></span><span></span><span></span>
        </div>
    </div>
</div>`,
        css: `.gameboy-wrapper {
    font-size: 6px;
}

.gameboy {
    width: 30em;
    height: 50em;
    background: #c0c0c0;
    border-radius: 2em 2em 4em 2em;
    position: relative;
    box-shadow: 
        inset -1em -1em 2em rgba(0,0,0,0.1),
        1em 1em 2em rgba(0,0,0,0.2);
    padding: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.screen-area {
    width: 24em;
    height: 20em;
    background: #777;
    border-radius: 1em 1em 3em 1em;
    position: relative;
    padding: 2em 3em;
    margin-bottom: 4em;
    box-shadow: inset 0 0 1em rgba(0,0,0,0.3);
}

.power-led {
    width: 0.8em;
    height: 0.8em;
    background: #f00;
    border-radius: 50%;
    position: absolute;
    top: 8em;
    left: 1em;
    box-shadow: 0 0 0.5em #f00;
}

.screen-glass {
    width: 100%;
    height: 100%;
    background: #9ca04c;
    box-shadow: inset 0.2em 0.2em 0.5em rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
}

.lcd {
    font-family: 'Courier New', monospace;
    font-weight: bold;
    color: #0f380f;
    text-align: center;
    font-size: 2em;
    line-height: 1.2;
    opacity: 0.8;
}

.controls {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3em;
}

.d-pad {
    width: 8em;
    height: 8em;
    position: relative;
}

.d-pad div {
    background: #333;
    position: absolute;
    border-radius: 0.2em;
}

.d-pad .center { width: 2.6em; height: 2.6em; top: 2.7em; left: 2.7em; }
.d-pad .up { width: 2.6em; height: 3em; top: 0; left: 2.7em; }
.d-pad .down { width: 2.6em; height: 3em; bottom: 0; left: 2.7em; }
.d-pad .left { width: 3em; height: 2.6em; top: 2.7em; left: 0; }
.d-pad .right { width: 3em; height: 2.6em; top: 2.7em; right: 0; }

.action-btns {
    width: 8em;
    height: 4em;
    position: relative;
    transform: rotate(-25deg);
}

.btn-a, .btn-b {
    width: 3em;
    height: 3em;
    background: #a93671;
    border-radius: 50%;
    position: absolute;
    box-shadow: 0.2em 0.2em 0 rgba(0,0,0,0.2);
}

.btn-a { right: 0; top: -1em; }
.btn-b { left: 0; bottom: -1em; }

.start-select {
    display: flex;
    gap: 1em;
    margin-bottom: 3em;
}

.btn-start, .btn-select {
    width: 4em;
    height: 1em;
    background: #999;
    border-radius: 1em;
    transform: rotate(-25deg);
    box-shadow: 0.1em 0.1em 0 rgba(0,0,0,0.2);
}

.speaker-grill {
    display: flex;
    gap: 0.5em;
    transform: rotate(-25deg);
    margin-left: 10em;
}

.speaker-grill span {
    width: 0.5em;
    height: 4em;
    background: rgba(0,0,0,0.1);
    border-radius: 0.5em;
}`
    }
];
