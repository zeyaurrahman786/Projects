var tl = gsap.timeline();

tl.from("#nav",{
    y:-200,
    duration:1.5,
    delay:0.5,
})
 
.from("#text",{
    opacity:0,
    delay:0.5,
})

.from("#text h1",{
    opacity:0,
    delay:0.5,
    duration:0.5,
})

.from("#text a",{
    opacity:0,
    delay:0.5,
    duration:0.5,
})

.from("#right",{
    opacity:0,
    delay:0.5,
})
