import {showNotification} from "../messaging.js";
import {getUser} from "../auth.js";


export default function home(props) {
    return `
        <header>
            <h1 class="home-title">Pimp my Jalopy!</h1>
        </header>
        <main class="bg-img">
            <div>
                <img id="jalopy-img" class="img" src="assets/jalopy1.jpeg">
<!--                <img id="toggle" class="img toggle" src="../assets/jalopy2.jpeg">-->
<!--                <img id="toggle" class="img toggle" src="../assets/jalopy3.jpeg">-->
                <p>
                    Welcome to my Jalopy application.
                </p>    
                <button id="img-btn">Click 4 moar Jalopy</button>
            </div>
        </main>
    `;
}

export function homeEvents() {
    const toggleJalopyBtn = document.getElementById('img-btn')
    let images = document.querySelector("#jalopy-img")
    console.log(images.src);
    toggleJalopyBtn.addEventListener("click", function() {
        if (images.src === "http://localhost:9000/assets/jalopy1.jpeg") {
            images.src = "http://localhost:9000/assets/jalopy2.jpeg"
        } else if (images.src === "http://localhost:9000/assets/jalopy2.jpeg") {
            images.src = "http://localhost:9000/assets/jalopy3.jpeg";
        } else {
            images.src = "http://localhost:9000/assets/jalopy1.jpeg"
        }
        //optionally:
        //above export default function home():
        //const imagePaths = [
        // "assets/jalopy1.jpeg..., ...jalopy3.jpeg"
        //]
        //let currentImageIndex = 1;
        //then inside the function homeEvents():
        // img.setAttribute("src", imagePaths[currentImageIndex]);
        //currentImageIndex++;
        //if (currentImageIndex === 3) {

        //}


    });
}