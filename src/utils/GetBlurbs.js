import axios from 'axios';

// Gets an array of GitHub markdown blurbs from the network
// TODO: Actually get it from the network?????
export default function() {
    axios.get(publicPath + '/assets/blurbs.json').then(response => {
        console.log(response);
    });
}