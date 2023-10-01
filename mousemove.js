const containerM=document.querySelector(".container");
window.addEventListener("mousemove",(event)=>{
    containerM.innerHTML=`
    <p>Mouse X Prosition(px)</p>
    <div class="box">
    
    ${event.clientX}
        
        </div>

        <p>Mouse X Prosition(px)</p>
        <div class="box">
        
    ${event.clientY}
        
        </div>
    `
})