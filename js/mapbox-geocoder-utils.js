"use strict";

// /***
//  * geocode is a method to search for coordinates based on a physical address and return
//  * @param {string} search is the address to search for the geocoded coordinates
//  * @param {string} token is your API token for MapBox
//  * @returns {Promise} a promise containing the latitude and longitude as a two element array
//  *
//  * EXAMPLE:
//  *
//  *  geocode("San Antonio", API_TOKEN_HERE).then(function(results) {
//  *      // do something with results
//  *  })
//  *
//  */
function geocode(address, token = MAPBOX_API_KEY) {
    let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    return fetch(`${url}${encodeURIComponent(address)}.json?access_token=${token}`)
        .then( async function(res) {
            const data = await res.json();
            console.log(data);
            return data;
        });

}

