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
                //do something with it
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

    //BONUS!!!!!!!!!
    const bonus = {
        //GET is default
        headers: {
            "authorization": GITHUB_API_KEY
        }
    }
function wait (num) {
    return fetch(`https://api.github.com/users`, bonus)

        .then(response => response.json()).then(seconds => {
            //do something with it
            for (let second of seconds) {
                if (second === 'fulfilled') {
                    return second
                }

            }

        }, 3000)
        .catch(error => console.log("error " + error));

}
    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));




})();













