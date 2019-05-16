var timeout = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('done'),5000)
    })
}
timeout().then(result => {
    console.log(result);
});