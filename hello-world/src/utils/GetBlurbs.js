import blurbsStr from '../assets/blurbs.md';

// Gets an array of GitHub markdown blurbs from the network
// TODO: Actually get it from the network?????
export default function() {
    return JSON.parse(blurbsStr);
}