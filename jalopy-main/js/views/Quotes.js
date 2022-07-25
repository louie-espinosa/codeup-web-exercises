const quotes = [
    {
        quote: 'The educated differ from the uneducated as much as the living differ from the dead.',
        author: 'Aristotle'
    },
    {
        quote: 'Suffering is the father of all things',
        author: 'Friedrich Nietzsche'
    },
    {
        quote: 'To live is to suffer, to survive is to find some meaning in the suffering.',
        author: 'Friedrich Nietzsche'
    },
    {
        quote: "The trouble with America is that when the dollar only earns 6 percent over here, then it gets restless and goes overseas to get 100 percent. Then the flag follows the dollar and the soldiers follow the flag.",
        author: "Smedley Butler"
    },
    {
        quote: "Follow sound business trends, not fashion trends.",
        author: "Janice Dickinson"
    },
    {
        quote: "I'm sure we, the American people, are the butt of jokes by those in power.",
        author: "Alice Walker"
    },
    {
        quote: "If the security forces continue to be dominated as they are now by political groups or sects, then the people won't trust in them - and the result will be civil war or fragmentation of the country.",
        author: "Adnan Pachachi"
    },
    {
        quote: "We prefer world law in the age of self-determination to world war in the age of mass extermination.",
        author: "John F. Kennedy"
    },
    {
        quote: "I got a lovely check today from being a writer that I earned by sitting at home. That's rewarding.",
        author: "Harvey Fierstein"
    },
    {
        quote: "Military men are just dumb, stupid animals to be used as pawns in foreign policy.",
        author: "Henry Kissinger"
    },
    {
        quote: "For it is mutual trust, even more than mutual interest that holds human associations together. Our friends seldom profit us but they make us feel safe. Marriage is a scheme to accomplish exactly that same end.",
        author: "H. L. Mencken"
    },
    {
        quote: "Dont steal, the government hates competition",
        author: "Ron Paul"
    },
    {
        quote: "Men, when they fight in movies, it's a very different style. Harrison Ford was so cool when he had the whip, and Bruce Lee was such an artist that you couldn't take your eyes off of him.",
        author: "Lucy Liu"
    },
]

export default function quotesView (props) {


    return `<br><br>
<h1 class="fancy-header">QUOTES FOR THE BRAIN TICKLING!</h1>
 
<!-- calling the addQuotes function in here -->
    <div id"my-quotes">
    ${addQuotes(props.quotes)}
    </div>
    <div>
     <a class="my-nav" href="/addQuote" data-link>Add Your fave quote</a>
    </div>
   
    `;
}



//accessing the objects properties requires we use dot notation!
let html = ""
function addQuotes(quotes) {
    for (let i = 0; i < quotes.length; i++) {
         html += `
<!-- quote box w/tail-->
    <div class="quote-bbl tail">
        <p>"${quotes[i].quote}"</p>
    </div>
        <p class="q-text">-
        <i class="fa-solid fa-face-grin-tongue-squint"></i>
        ${quotes[i].author}
        
        </p>
        `

    }
    return html;
}


// use JavaScript to dynamically add

// Format your quotes however you wish (e.g., striped table rows,
// Bootstrap cards, etc.). Encapsulate all of the functionality for
// adding a single quote to my-quotes in its own function called addQuote.
// This function can call other functions, if you wish.
//     increment the version # to 0.0005. You earned it!