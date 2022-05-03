window.CLIPPY_CDN = "./agents/"
clippy.load("Clippy", agent => {
    agent.moveTo(1200, 500);
    agent.animate();
    agent.speak("When all else fails, bind some paper together. My name is Clippy.")
    agent.animate();
})
