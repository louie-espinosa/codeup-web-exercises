import createView from "../createView.js";
import {showNotification} from "../messaging.js";

export default function addQuoteView (props) {

    return `
<form class="container">
    <h1 class="home-title">Add Your New Quote Below</h1>
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
//     In your event listener for adding a quote, you will need to create a JavaScript object representing
//     the new quote. Prior to stringification, the new quote object should look similar to this:

export function addQuoteEvent() {
    const insertBtn = document.querySelector("#insert-btn");
    insertBtn.addEventListener("click", function(event) {

        const quoteInput = document.querySelector("#quoteInput");
        const quoteText = quoteInput.value.trim();

        let authorInput = document.getElementById("authorInput");
        let authorText = authorInput.value.trim();


        if(quoteText.length < 1) {
            window.alert("Hey there enter a quote!!")
        }
        if(authorText.length < 1) {
            authorText = "Anonymous";
        }
        const newQuote = {
            quote: quoteText,
            author: authorText
        }

        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': QUOTE_API_KEY
            },
            body: JSON.stringify([newQuote])
        }
        fetch("https://quotes.fulgentcorp.com:12250/v1/quotes", requestOptions)
            .then(function(response) {
                if(!response.ok) {
                    alert("add quote fact error: " + response.status); //Cannot use console.log, must use some other method to notify user of results
                } else {
                    alert("add quote success"); //Cannot use console.log, must use some other method to notify user of results
                    createView("/addQuote");
                }
            });
    })

}
// 2. If we get here, we can insert a new quote
//console.log()