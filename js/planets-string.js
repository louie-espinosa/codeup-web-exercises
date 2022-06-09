(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    let planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /*
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
    */

     let columnPlanets = planetsArray.join("<br>");
     console.log(columnPlanets);
     /*
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    //use .unshift & .push to add <ul> tags to ends of the array. Then use indexof
    planetsArray.unshift("<ul>");
    planetsArray.push("</ul>");            //Do not have to redeclare the variable in order to assign or change it.
    let arrangePlanets = planetsArray.slice(); //creates a copy of planetsArray, so that I can mutate the copy arrangePlanets.

    console.log(arrangePlanets);
    console.log(planetsArray);

    let listOfPlanets = arrangePlanets.splice(arrangePlanets.indexOf("Mercury"), 8, "<li>Mercury</li>",  "<li>Venus</li>", "<li>Earth</li>",
        "<li>Mars</li>", "<li>Jupiter</li>", "<li>Saturn</li>", "<li>Uranus</li>", "<li>Neptune</li>" )
    console.log(listOfPlanets.join());

})();