const template = /*html*/ `
<style>
  :host{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .pink-blob{
    position: absolute;
    top: 50%;
    margin-top: -25%;
    animation: anim1 20s both infinite cubic-bezier(.5, 0, .5, 1);
  }

  .blue-blob{
    position: absolute;
    top: 50%;
    margin-top: -25%;
    mix-blend-mode: multiply;
    animation: anim2 15s both infinite cubic-bezier(.5, 0, .5, 1);
  }

  @keyframes anim1{
    0%   { transform: scale(1)   translate(-110px, -30px); }
    38%  { transform: scale(0.7, 1) translate(-20vw, 30vh) rotate(60deg); }
    40%  { transform: scale(0.7, 1) translate(-20vw, 30vh) rotate(60deg); }
    78%  { transform: scale(1.3) translate(-30vw, -20vh) rotate(-20deg); }
    80%  { transform: scale(1.3) translate(-30vw, -20vh) rotate(-20deg); }
    100% { transform: scale(1)   translate(-110px, -30px); }
  }

  @keyframes anim2{
    0%   { transform: scale(1)   translate(200px, -100px); }
    38%  { transform: scale(1.3, 1) translate(20vw, -30vh) rotate(50deg); }
    40%  { transform: scale(1.3, 1) translate(20vw, -30vh) rotate(50deg); }
    78%  { transform: scale(.7) translate(40vw, -10vh) rotate(-30deg); }
    80%  { transform: scale(.7) translate(40vw, -10vh) rotate(-30deg); }
    100% { transform: scale(1)   translate(200px, -100px); }
  }
</style>
<img class="pink-blob" src="../../assets/blob1.svg">
<img class="blue-blob" src="../../assets/blob2.svg">
`

class BgAnim extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = template
  }
}

customElements.define('bg-anim', BgAnim)
