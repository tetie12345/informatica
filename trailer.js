function gettrailer(){
    const trailer = document.getElementById("trailer");

    if(trailer) {
        return;
    } else {
        setTimeout(() => {gettrailer()}, 200);
    }
}

const animatetrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
        transform: `translate(${x}px, ${y}px)
        scale(${interacting ? 2 : 1})`
    };

    trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards"
    });
}

window.onmousemove = e => {
    const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;

    animatetrailer(e, interacting);
}
gettrailer();
