const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.set("view engine", "ejs");


app.get("/", function (req, res) {
    var today = new Date();

    // oloder option for date
    // var currentDay = today.getDay();
    // var day = "";

    // switch (currentDay) {
    //     case 0:
    //         day = "sunday";
    //         break;
    //     case 1:
    //         day = "monday";
    //         break;
    //     case 2:
    //         day = "tuesday";
    //         break;
    //     case 3:
    //         day = "wednesday";
    //         break;
    //     case 4:
    //         day = "thrusday";
    //         break;
    //     case 5:
    //         day = "friday";
    //         break;
    //     case 6:
    //         day = "saturday";
    //         break;
    //     default:
    //         console.log("Error: current day is equal to:" + currentDay);
}
    res.render("list", { kindOfDay: day });
});








app.listen(3000, function () {
    console.log("server started at port 3000");
})