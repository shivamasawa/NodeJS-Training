var display1 = (name) => {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(name),1000);
    })
}
var display2 = () => {
    return new Promise(resolve => {
        resolve('TFT');
        //console.log('Asawa');
    })
}
// var display3 = () => {
//     return new Promise(resolve=>{
//         console.log('TFT');
//     })
//     //console.log("TFT");
// }

// By using 'then' keyword
// display1('Shivam').then(result =>{
//     console.log(result);
//     return display1('Asawa');
// }).then(result => {
//     console.log(result);
//     return display2();
// }).then(result=>{
//     console.log(result);
//     console.log('All Set');
// }).catch(err=>{
//     console.log("Error Caught");
// })

// By using Async Await
var fun = async() => {
    let result = await display1('Shivam');
    console.log(result);
    result = await display2();
    console.log(result);
}
fun();

// for (var i =0; i<100; i++){
//     console.log('Sorry');
// }