const ScrollMagic = require('scrollmagic');

document.addEventListener('DOMContentLoaded', () => {
    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({
        reverse: true,
        triggerElement: '#footer',
        triggerHook: 'onEnter',
    })
    .setPin('#body');

    controller.addScene(scene);

    setTimeout(() => {
        window.scrollTo(0, scene.scrollOffset());
    },200)

});
