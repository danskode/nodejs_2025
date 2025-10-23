// Problem: I JavaScript er single-threaded = alt i en tråd

// Eksempler på asynkrone situationer:
// netværk: vi ved ikke hvornår og om vi får et svar = async
// bruger-input: vi kan gøre flere ting samtidig (callback-funktioner)
// filsystem-behandling (fs) og databaser

// Løsning 1: callback-funktioner (alt i node er callback-funktioner)
// problemet ved dem er deres syntaks: callback hell / pyramide of doom

// Løsning 2: Promises (syntactic suger of callback functions = det er stadig callback, det ser bare enklere ud)
// Kan være i to stadier: pending => fulfilled
// resolved ellerrejected
// Problem ved Promise(s): Kan ende i en masse nestede promises

// Løsning 3: Asyn/Await (igen syntaktisk sukker = det er lige så godt som de ovenstående ...)


// et new Promise ...

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         try {
//             throw "Oh no!";
//             resolve("Everything went well");
//         } catch (error) {
//             reject(error);
//         }
//     }, 2000);
// })
//     .then((message) => console.log(message))
//     .catch((errorMessage) => console.log(errorMessage));

// Som en funktion ...

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         try {
//             throw "Oh no!";
//             resolve("Everything went well");
//         } catch (error) {
//             reject(error);
//         }
//     }, 2000);
// })
// .then((message) => console.log(message))
// .catch((errorMessage) => console.log(errorMessage));


/* Assignment: Create a promisified function (called myPromise) 
that is a function that returns a promise
Make it resolve as "Something Good" and/or reject as "Something Bad"
create a 3 second delay to simulate asynchronous behavior
*/

function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error("Something Bad");
                resolve("Something Good");
            } catch (error) {
                reject(error);
            }
        }, 3000)
    });
}

/* myPromise()
.then((successMessage) => console.log(successMessage))
.catch((errorMessage) => console.log(errorMessage));
 */


// try {
//     const successMessage = await myPromise();
//     console.log(successMessage);
// } catch (error) {
//     console.log(error);
// }

/* assignment
    try to simulate the fetch function
    call it myFetch
    it should return the promise json() after 2.5 seconds
    so that you can call response.json() on it
    as much as possible try to imagine how fetch works and simulate the underlying code
*/
function myFetch(URL, options) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                json: () => new Promise((resolve, reject) => resolve("Data from the server"))
            });
        }, 2500);
    });
}

// myFetch("somewebsite.com")
// .then((result) => result.json())
// .then((response) => console.log(response));

// IIFE
(async function () {
    const result = await myFetch("somewebsite.com");
    const response = await result.json();
    console.log(response);
})()