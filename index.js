import axios from 'axios';
function GetQuote() {
    axios.get("https://zenquotes.io/api/random").then((response) => {
        // console.log(response.status);
        if (response.status == 200) {
            var quote = response.data;
            console.log("Here is a fun quote for you!");
            console.log(quote[0].q + " - " + quote[0].a);

        } else {
            console.log("Could not Fetch Quote, Try again later");
            console.log(response.statusText);
        }
    });
}

GetQuote();