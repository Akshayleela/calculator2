function dis(val)
{
    document.getElementById("inpt1").value+=val;
}

function solve()
{
    let x=document.getElementById("inpt1").value;
    let y=eval(x);
    document.getElementById("inpt1").value=y;
}

{
    

}
function clr()
{
    document.getElementById("inpt1").value=null;
}
