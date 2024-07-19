const button=document.querySelector('article');
const input=document.querySelector('input');


button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='C')
    {
        input.value=" ";
    }
    if(e.target.innerHTML=="bs")
    {
        if(input.value!="")
        {
            let res =input.value.split("");
            res.pop();
            input.value=res.join("");

        }
    }
    else if(e.target.innerHTML==='=')
    {
            try
            {
            input.value=eval(input.value);
            }
            catch(e)
            {
                input.value="Invalid!";
            }
    }
    else
    {
        input.value+=e.target.innerHTML;
    }

})