let request = new XMLHttpRequest;

request.open('GET',"https://restcountries.com/v2/all")

request.send();

request.onload = function(){
    let result = JSON.parse(request.response)
    console.log(result);


    //A.Get all the countries from the Asia continent /region using the Filter function
    let res = result.filter((ele) =>ele.region==="Asia").map((ele) =>ele.name);
    console.log(res)

    //B.Get all the countries with a population of less than 2 lakhs using Filter function
    let res1 = result.filter((ele) => ele.population<200000).map((ele) => ele.name);
    console.log(res1); 

    //C.Print the following details name, capital, flag using forEach function
    result.forEach(element => {
        console.log(element.name);
        console.log(element.capital);
        console.log(element.flag);
    });

    //D.Print the total population of countries using reduce function
    let total = result.reduce((pop,ele) => pop+ele.population,0);
    console.log(total);

    //E.Print the country which uses US Dollars as currency.
    let answer = result.filter((ele) => (ele.currencies !== undefined))
    // console.log(answer.length)
     let realanswer = answer.filter((ele) =>  {
     for (let i=0;i<ele.currencies.length;i++) {
         if(ele.currencies[i].code === 'USD'){
            return ele
        }
     }
     })
     console.log(realanswer)

}