

async function delay(){
    return new Promise((resolve, reject) =>{
        setTimeout( e => {
            console.log('timeout')
            resolve()
        }  , 3000);
    } ) // end of Promise
} //end of delay()

//promise
// delay()
// .then(() => console.log('call'))
// .catch(() => console.log('error'))


async function execDelay(){
    await delay();
    console.log("call")
}

execDelay();