//import axios for use
import axios from 'axios';

function GetQuote() {
    //use axios to connect to api and pull data on a random quote
    axios.get("https://zenquotes.io/api/random").then((response) => {
        // console.log(response.status);
        //check the status of the API request. If good, continue with the application if not print an error
        if (response.status == 200) {
            //save the specific quote data in a variable
            var quote = response.data;
            //print the data to the console in a pretty way
            console.log("Here is a fun quote for you!");
            console.log(quote[0].q + " - " + quote[0].a);

        } else {
            //error handling and printing the specific error text from the api response
            console.log("Could not Fetch Quote, Try again later");
            console.log(response.statusText);
        }
    });
}

GetQuote();