document.body.innerHTML = "Hello world!";
//const element = document.createElement('div');
let top=0;
let left=0;
for (let i=0;i<1 ;i++)
{

    var outerdiv=document.createElement('div');
outerdiv.id="outerDiv";
    document.body.appendChild(outerdiv);

    var outerDivId=document.getElementById(outerDiv);


    for (let j = 0; i < 2024; i++) {
        const elem = document.createElement('div');
    elem.className = 'rowclass';
    //elem.innerText="div"+i;

        //top = top + 20;
        //left = left + 20;
        //elem.style.cssText = 'top:' + top + ';left:' + left + ';width:20px;height:20px;opacity:0.3;z-index:100;background:#000';
elem.addEventListener('click',()=>{
    elem.style.background='red';
})

        outerDiv.appendChild(elem);
    }


    // for(var y=0;y<2;y++){
    //     var row=document.createElement('div');
    //     row.className='row';
    //     for (var x=0;x<2;x++)
    //     {
    //         const col=document.createElement('div');
    //         col.className='column';
    //         col.addEventListener('click',()=>{
    //             col.style.background='red';
    //         })
    //         row.appendChild(col);
    //     }
    //     document.body.appendChild(row);
    // }


}