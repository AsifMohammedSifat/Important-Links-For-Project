link of particle.js website documentation:
                                           1) https://github.com/matteobruni/tsparticles/blob/main/components/react/README.md  
                                            2)best-documentation-link:https://javascript.plainenglish.io/creating-an-interactive-background-in-react-with-particles-js-263c2dec30df
                                            3)particle.js code site: https://vincentgarreau.com/particles.js/




How to add particles in website?
  
  step:1=>
            follow-their-documentation:   https://javascript.plainenglish.io/creating-an-interactive-background-in-react-with-particles-js-263c2dec30df
            best-documentation-link:      https://javascript.plainenglish.io/creating-an-interactive-background-in-react-with-particles-js-263c2dec30df
  step:2=>
             create a [folder] under src named-> ParticleConfig
             create a js file named-> particleConfig.js  

            src/ParticleConfig/particleConfig.js/
                                                 const particlesConfig={
                                                  /* this is [snow] dropping style code 
                                                   you can get many king of features here->
                                                     1)https://vincentgarreau.com/particles.js/ + select particles style + click download
                                                     2)convert your code json -> java-stript format
                                                                                          follow link:  https://csvjson.com/json_beautifier */
                                                   
                                                                                                              particles: {
                                                                                                                number: {
                                                                                                                  value: 100,
                                                                                                                  density: {
                                                                                                                    enable: true,
                                                                                                                    value_area: 1000
                                                                                                                  }
                                                                                                                },
                                                                                                                color: {
                                                                                                                  value: "#fff"
                                                                                                                },
                                                                                                                shape: {
                                                                                                                  type: "circle",
                                                                                                                  stroke: {
                                                                                                                    width: 0,
                                                                                                                    color: "#000000"
                                                                                                                  },
                                                                                                                  polygon: {
                                                                                                                    nb_sides: 5
                                                                                                                  },
                                                                                                                  image: {
                                                                                                                    src: "img/github.svg",
                                                                                                                    width: 100,
                                                                                                                    height: 100
                                                                                                                  }
                                                                                                                },
                                                                                                                opacity: {
                                                                                                                  value: 0.5,
                                                                                                                  random: true,
                                                                                                                  anim: {
                                                                                                                    enable: false,
                                                                                                                    speed: 1,
                                                                                                                    opacity_min: 0.1,
                                                                                                                    sync: false
                                                                                                                  }
                                                                                                                },
                                                                                                                size: {
                                                                                                                  value: 10,
                                                                                                                  random: true,
                                                                                                                  anim: {
                                                                                                                    enable: false,
                                                                                                                    speed: 40,
                                                                                                                    size_min: 0.1,
                                                                                                                    sync: false
                                                                                                                  }
                                                                                                                },
                                                                                                                line_linked: {
                                                                                                                  enable: false,
                                                                                                                  distance: 500,
                                                                                                                  color: "#ffffff",
                                                                                                                  opacity: 0.4,
                                                                                                                  width: 2
                                                                                                                },
                                                                                                                move: {
                                                                                                                  enable: true,
                                                                                                                  speed: 6,
                                                                                                                  direction: "bottom",
                                                                                                                  random: false,
                                                                                                                  straight: false,
                                                                                                                  out_mode: "out",
                                                                                                                  bounce: false,
                                                                                                                  attract: {
                                                                                                                    enable: false,
                                                                                                                    rotateX: 600,
                                                                                                                    rotateY: 1200
                                                                                                                  }
                                                                                                                }
                                                                                                              },
                                                                                                              interactivity: {
                                                                                                                detect_on: "canvas",
                                                                                                                events: {
                                                                                                                  onhover: {
                                                                                                                    enable: true,
                                                                                                                    mode: "bubble"
                                                                                                                  },
                                                                                                                  onclick: {
                                                                                                                    enable: true,
                                                                                                                    mode: "repulse"
                                                                                                                  },
                                                                                                                  resize: true
                                                                                                                },
                                                                                                                modes: {
                                                                                                                  grab: {
                                                                                                                    distance: 400,
                                                                                                                    line_linked: {
                                                                                                                      opacity: 0.5
                                                                                                                    }
                                                                                                                  },
                                                                                                                  bubble: {
                                                                                                                    distance: 400,
                                                                                                                    size: 4,
                                                                                                                    duration: 0.3,
                                                                                                                    opacity: 0.5,
                                                                                                                    speed: 3
                                                                                                                  },
                                                                                                                  repulse: {
                                                                                                                    distance: 200,
                                                                                                                    duration: 0.4
                                                                                                                  },
                                                                                                                  push: {
                                                                                                                    particles_nb: 4
                                                                                                                  },
                                                                                                                  remove: {
                                                                                                                    particles_nb: 2
                                                                                                                  }
                                                                                                                }
                                                                                                              },
                                                                                                              retina_detect: true,

                                                                                                            };

                                                                                                          export default particlesConfig;
       step:3=>
            //        drop that page in which you want to apply partcile.js feature
            //        import files 
                              import particlesConfig from './ParticleConfig/ParticleConfig';
                              import Particles from 'react-tsparticles';
            // partcile.js div 
                               <div style={{ position: 'absolute'}}>
                                <Particles height="100vh" width="100vw" params={particlesConfig} />
                              </div>                    

                    
            
            
