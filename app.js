var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
  autoStart: true,
  cursor: '█',
  strings: ['My name is Isaac, and I am a developer.']
});

typewriter
  .deleteAll(1)
  .pauseFor(50)
  // .typeString('My name is Isaac, and I am a developer.')
  .deleteAll(1)
  .typeString('I worked for <strong>[Duponta]</strong> as a developer, and I code, write and play chess')
  .pauseFor(300)
  .deleteAll(1)
  .typeString('Find me online: <br />')
  .pauseFor(300)
  
  .typeString('<a href="https://github.com/1saac-dev?tab=repositories">Portfolio</a> <br />')
  .typeString('<a href="https://linkedin.com/in/selmandesdemir">Resume</a> <br />')
  .typeString('<a href="https://linkedin.com/in/selmandesdemir">LinkedIn</a> <br />')
  .typeString('<a href="https://twitter.com/">Twitter</a> <br />')
  .typeString('<a href="https://github.com/1saac-dev">GitHub</a> <br />')
  .pauseFor(1000)
