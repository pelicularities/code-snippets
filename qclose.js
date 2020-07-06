var variant = Math.floor(Math.random() * 3); // choose random number from 0 to 2
var shouldif = ["should", "if"]; // not in use
var further = ["", "other ", "further "]; // trailing space required
var queries = ["questions", "queries", "enquiries"];
var please = ["", "please"]; // not in use
var hesitate = ["", "do not hesitate to ", "feel free to "]; // trailing space required
var reachout = ["contact us", "reach out", "get in touch"];
var happy = ["be glad to", "be happy to", "gladly"];
var help = ["assist you", "help", "help you"];

// choose random value from shouldif array, NOT IN USE
var rand_shouldif = shouldif[Math.floor(Math.random() * shouldif.length)];

// choose random value from further array
var rand_further = further[Math.floor(Math.random() * further.length)];

// choose random value from queries array
var rand_queries = queries[Math.floor(Math.random() * queries.length)];

// choose random value from please array, NOT IN USE
var rand_please = please[Math.floor(Math.random() * please.length)];

// choose random value from hesitate array
var rand_hesitate = hesitate[Math.floor(Math.random() * hesitate.length)];

// choose random value from reachout array
var rand_reachout = reachout[Math.floor(Math.random() * reachout.length)];

// choose random value from happy array
var rand_happy = happy[Math.floor(Math.random() * happy.length)];

// choose random value from help array
var rand_help = help[Math.floor(Math.random() * help.length)];


var qclosestring = ""; // variable containing email closing sentence

switch (variant) {
  case 0:
    // if clause
    // if you have any other queries, please contact us and we will be glad to assist you
    qclosestring = "If you have any " + rand_further + rand_queries + ", please "
    + rand_hesitate + rand_reachout + " and we will " + rand_happy + " " + rand_help + ".";
    break;
  case 1:
    // please clause first
    // please contact us if you have any other queries and we will be glad to assist you
    qclosestring = "Please " + rand_hesitate + rand_reachout + " if you have any " + rand_further
    + rand_queries +  " and we will " + rand_happy + " " + rand_help + ".";
    break;
  case 2:
    // happy to help clause first
    // we will be glad to assist you if you have any other queries
    qclosestring = "We will " + rand_happy + " " + rand_help + " if you have any "
    + rand_further + rand_queries + ".";
    break;
}
qclosestring;
