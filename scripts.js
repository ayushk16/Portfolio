function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");



function files(index) {
    var data = `
    ./images/av2.png
    ./images/av1.png
    ./images/av3.png
    ./images/av1.png
    ./images/av2.png
    ./images/av3.png
    `;
    return data.split("\n")[index];
  }

  const frameCount = 6;

  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `840% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  canvas.width = Math.min(window.innerHeight,window.innerWidth);
  canvas.height = Math.min(window.innerHeight,window.innerWidth);
// canvas.width = window.innerWidth/1.2;
// canvas.height = window.innerHeight/1.2;

window.addEventListener("resize", function(){
canvas.width = Math.min(window.innerHeight,window.innerWidth);
  canvas.height = Math.min(window.innerHeight,window.innerWidth);
  // canvas.width = window.innerWidth/1.2;
  // canvas.height = window.innerHeight/1.2;
  render();
})
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      -100,
      img.width,
      img.height+100,
      centerShift_x,
      centerShift_y,
      img.width *ratio ,
      img.height *ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `850% top`,
  });





gsap.to("#page1",{
    scrollTrigger:{
        trigger:"#page1",
        start:`top top`,
        end:`bottom top`,
        // markers:true,
        pin:true,
        scroller:`#main`
    }
})
gsap.to("#page2",{
    scrollTrigger:{
        trigger:"#page2",
        start:`top top`,
        end:`bottom top`,
        // markers:true,
        pin:true,
        scroller:`#main`
    }
})
gsap.to("#page3",{
    scrollTrigger:{
        trigger:"#page3",
        start:`top top`,
        end:`bottom top`,
        // markers:true,
        pin:true,
        scroller:`#main`
    }
})
gsap.to("#page4",{
  scrollTrigger:{
      trigger:"#page4",
      start:`top top`,
      end:`top top`,
      // markers:true,
      pin:true,
      scroller:`#main`
  }
})

// about section ki animation ke liye code

function ani() {
  var over = document.getElementById("aboutcontent");
  over.classList.toggle("scrollani");
  // over.classList.add("scrl");
}

// document.getElementById("aboutcontent").addEventListener("onclick", ani());