const form=document.getElementById("otp-form");
const btn=document.getElementById("verify-btn");
const h2=document.getElementById("errmsg");

btn.addEventListener("click",()=>{
    h2.innerText=null;
    let otp="";
    otp+=form.num1.value;
    otp+=form.num2.value;
    otp+=form.num3.value;
    otp+=form.num4.value;
    otp+=form.num5.value;
    otp+=form.num6.value;
    // alert(otp);
    let plan=localStorage.getItem("plan");
    let price=localStorage.getItem("amount");
    let obj={otp,plan,price};
    fetch("https://pink-eagle-coat.cyclic.app/user/verify",{
        //  mode: 'no-cors',
        method:"POST",
        headers:{
            "Content-type":"application/json"
            
        },
        body:JSON.stringify(obj)
        
    })
    .then((res)=>{
        console.log(res);
       return res.json();
    })
    .then((data)=>{
        alert(data.msg);
        if(data.msg){
            window.location.href="/Client/dashboard.html"
        }else{
            h2.innerText="WRONG OTP";
        }
    });
    })