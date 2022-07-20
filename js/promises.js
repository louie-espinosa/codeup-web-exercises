(async function () {
    "use strict";

    const options = {
        //GET is default
        headers: {
            "authorization": GITHUB_API_KEY
        }
    }


// Create a function that accepts a GitHub username, and returns a promise that resolves returning
// just the date of the last commit that user made. Reference the github api documentation to achieve this.

    function userLastPushEvent(username) {
        return fetch(`https://api.github.com/users/${username}/events/public`, options)

            .then(response => response.json()).then(events => {
                //do something with it, like this:
                //1. (easy): return events[0].created_at, or this:
                //2. )(moderate)
                for (let event of events) {
                    if (event.type === 'PushEvent') {
                        return event.created_at
                    }

                }

            })
            .catch(error => console.log("error " + error));
    }
    //data[0].created_at is where my last commit is.
    const lastEventDate = await userLastPushEvent("louie-espinosa"); //
    console.log(lastEventDate);


    //----------------BONUS----------------------------------------------------------------------------
    const bonus = {
        //GET is default
        headers: {
            "authorization": GITHUB_API_KEY
        }
    }
    function wait() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.1) {
                    resolve('Here is your data: ...');
                } else {
                    reject('Network Connection Error!');
                }
            }, 1500);
        });
    }


    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));




})();













