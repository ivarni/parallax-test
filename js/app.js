const ScrollMagic = require('scrollmagic');
require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators')

const bodyHeight = () => {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
    );
}

document.addEventListener('DOMContentLoaded', () => {
    const controller = new ScrollMagic.Controller();

    const footer = document.getElementById('footer');
    const footerHeight = footer.clientHeight;

    const scene = new ScrollMagic.Scene({
        reverse: true,
        triggerElement: '#footer',
        triggerHook: 'onEnter',
    })
    .setPin('#body')
    .on('update', event => {
        const heightChange = Math.max(0, event.scrollPos - event.startPos);
        const newHeight = Math.min(
            footerHeight + heightChange,
            footerHeight * 2
        );
        footer.style.height = `${newHeight}px`;
    })
    .addIndicators();
    controller.addScene(scene);
});

