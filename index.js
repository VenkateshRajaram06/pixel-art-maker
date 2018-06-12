document.body.innerHTML = "Hello world!";
//const element = document.createElement('div');
// let top=0;
// let left=0;
// for (let i=0;i<1 ;i++)
// {
//
//     let outerdiv=document.createElement('div');
// outerdiv.id="outerDiv";
//     document.body.appendChild(outerdiv);
//
//     let outerDivId=document.getElementById(outerDiv);
//
//
//     for (let j = 0; i < 2024; i++) {
//         const elem = document.createElement('div');
//     elem.className = 'rowclass';
//     //elem.innerText="div"+i;
//
//         //top = top + 20;
//         //left = left + 20;
//         //elem.style.cssText = 'top:' + top + ';left:' + left + ';width:20px;height:20px;opacity:0.3;z-index:100;background:#000';
// elem.addEventListener('click',()=>{
//     elem.style.background='red';
// })
//
//         outerDiv.appendChild(elem);
//     }

let color='';
    for(let y=0;y<5;y++){
        let row=document.createElement('div');
        row.className='row';
        for (let x=0;x<5;x++)
        {
            const col=document.createElement('div');
            col.className='column';
            col.addEventListener('click',()=>{
                col.style.background=color;
            })
            row.appendChild(col);
        }
        document.body.appendChild(row);
    }
    let arr =['red','green','blue','yellow','cyan','violet','black'];
let round;
for(let x=0; x<arr.length; x++) {
     round = document.createElement('div');
    round.className = "dot";
    //alert(arr[x]);
    round.style.cssText = "background-color: "+arr[x];
    round.addEventListener('click', () => {
        color = arr[x];
    })

    document.body.appendChild(round);
}

