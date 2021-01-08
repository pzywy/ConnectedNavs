
function drawLines()
{
    navs = document.querySelectorAll('.nav');
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
