console.log("Hello World!")

function add(...num)
{
    let l = num.length;
    var sum=0;
    for(let i=0;i<l;i++)
    {
        sum=sum+num[i]
    }
    return sum
}


console.log(add(10,20,30))