{
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    let planetsArray = planetsString.split("|"); //you can use the white space between strings as the delimiter to split a sentence.
    console.log(planetsArray);

    /*
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
    */

     let columnPlanetsString = planetsArray.join("<br>");
     console.log(columnPlanetsString);
     /*
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    //use .unshift & .push to add <ul> tags to ends of the array.
    planetsArray.unshift("<ul>");
    planetsArray.push("</ul>");            //Do not have to redeclare the variable in order to assign or change it.
    let arrangePlanets = planetsArray.slice(); //creates a copy of planetsArray, so that I can mutate the copy arrangePlanets.

    console.log(arrangePlanets);
    console.log(planetsArray);


    console.log(arrangePlanets.splice(arrangePlanets.indexOf("Mercury"), 8, "<li>Mercury</li>",  "<li>Venus</li>", "<li>Earth</li>",
        "<li>Mars</li>", "<li>Jupiter</li>", "<li>Saturn</li>", "<li>Uranus</li>", "<li>Neptune</li>" ))


    console.log( arrangePlanets.join(""));
    // console.log("This is listOfPlanets joined : " + listOfPlanets.join());

}