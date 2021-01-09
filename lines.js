navs = document.querySelectorAll('.nav');

function setOrderProperty(element)
{
    for(i=0;i<element.length;i++)
    {
        element[i].order=i;
    }
}

function drawLines()
{
    lines = document.querySelectorAll('.line');
    size = document.querySelector('.nav').offsetWidth;

    MainY = navs[2].offsetTop + size/2 ;
    MainX = navs[2].offsetLeft + size/2;
    
    lines.forEach(line => {
    
        line.setAttribute('x1',String(MainX));
        line.setAttribute('y1',String(MainY));
    });
    
    for(i=0;i<navs.length; i++)
    {
        lines[i].setAttribute('x2', String(navs[i].offsetLeft + size/2));
        lines[i].setAttribute('y2', String(navs[i].offsetTop + size/2));
    }
}

drawLines();
window.addEventListener("resize", drawLines);
setOrderProperty(navs);



//zrobić, żeby cień kierował się w stronę myszki (tak jak w edytorze)
//zeby na hovera przelatywalo coś po liniach



ContentChilds = document.querySelectorAll('.contentChild');
//on nav click scroll to offeset of ContentChild 
navs.forEach(   nav => nav.addEventListener(   'click' , () => {
    console.log(ContentChilds[nav.order].offsetTop);  
    window.scroll(0,ContentChilds[nav.order].offsetTop )
}));


navs.forEach(nav => nav.addEventListener('mouseover',NavHovered));

function NavHovered(e)
{
    hoveredNavOrderNumber = e.path[0].order;
    hoveredNav=e.path[0];

    console.log(hoveredNav);

    
}
