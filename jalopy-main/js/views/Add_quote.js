import createView from "../createView.js";
import {showNotification} from "../messaging.js";

export default function addQuoteView (props) {

    return `
<form class="container">
    <h1>Add Your New Quote Below</h1>
    <form>
        <label for="quoteInput" class="form-label">Add New Quote</label>
        <input class="form-control" list="datalistOptions" id="quoteInput" placeholder="Enter a new quote">
        
        <label for="authorInput" class="form-label">Add New Author</label>
        <input class="form-control" list="datalistOptions" id="authorInput" placeholder="Enter the authors name">
        
        <button class="form-control" id="insert-btn">Submit New</button>
    </form>
</div>
`;

}

//     Create an AddQuote screen with a skeleton HTML function and JS function. You should also import createView at the top, like we did in the dog facts example.

//     Update router.js to route /addQuote to the AddQuote screen.

//     Build out the rest of the AddQuote screen, providing inputs for the quote AND the author.

//     In your event listener for adding a quote, you will need to create a JavaScript object representing the new quote. Prior to stringification, the new quote object should look similar to this:

export function addQuoteEvent() {
    const insertBtn = document.querySelector("#insert-btn");
    insertBtn.addEventListener("click", function(event) {
        const quoteText = document.querySelector("#quoteInput").value;
        const authorText = document.querySelector("#authorInput").value;

        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': QUOTE_API_KEY
            },
            body: JSON.stringify([quoteText])
        }
        fetch("https://quotes.fulgentcorp.com:12250/v1/facts", requestOptions)
            .then(function(response) {
                if(!response.ok) {
                    alert("add quote fact error: " + response.status); //Cannot use console.log, must use some other method to notify user of results
                } else {
                    alert("add quote success"); //Cannot use console.log, must use some other method to notify user of results
                    createView("/Add_quote");
                }
            });
    })

}
function insertQuote() {
    //1. validate the data (quote and author)
    const quoteInput = document.querySelector("#quoteInput");
    const quoteText = quoteInput.value.trim();

    let authorInput = document.getElementById("authorInput");
    let authorText = authorInput.value.trim();


    if(quoteText.length < 1) {
        window.alert("Hey there enter a quote!!")
    }
    if(authorText.length < 1) {
        authorText = "anonymous";
    }

}
// 2. If we get here, we can insert a new quote
//console.log()