var n=prompt("Enter number");
f1=0;
f2=1;
console.log(f1 + "\n" + f2);
document.write("The fibonacci series upto " +n+ " is: <br />");
document.write(f1 + "<br />" + f2 +"<br />" );
for(i=3; i<=n;i++)
{
    f3=f1+f2;
    document.write(f3 + "<br />" );
    f1=f2;
    f2=f3;
}



// if(n>0)
// {
//     n3=n1+n2;
//     n1=n2;
//     n2=n3;
// }
// alert("fibonacci numbers are =" +n3)