var a = 18;
console.log(a);

function sayMyName() {
    console.log("Govind");
}

sayMyName();


let ips = new XMLHttpRequest();
console.log(ips);
ips.open("GET", "https://restcountries.com/v3.1/all");
ips.send();
ips.onload = function () {
    const data = JSON.parse(ips.response);
    console.log(data);
    console.log(ips.status);
    
     /// for (let i=0; i<data.length; i++){
    ///     console.log("Name :", data[i].name.common);
    ///     console.log("Population :", data[i].population);
    ///     console.log("Flag :", data[i].flags.png);
    /// } /// instead of above code, we can write code as below for same result
for (let i=0; i < data.length; i++) {
    console.log(`
    Country Name : ${data[i].name.common}
    Total Population : ${data[i].population}
    Flag : ${data[i].flags.png}
    Region :${data[i].region}
    Sub Region :${data[i].subregion}
    Capital :${data[i].capital}
    
    `);
}

};