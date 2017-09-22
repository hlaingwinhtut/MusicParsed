import "bootstrap/dist/css/bootstrap.min.css";
import "../css/about.css";
import {renderChordSvg} from "./render.js";

console.log("TEST");

$(document).ready(function() {
    renderChordSvg('ukulele', ['Am', 'F', 'C', 'G']);
})
