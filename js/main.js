$(function(){$
    console.log("MAIN SCRIPT IS RUNNING");

    webFunctions();
});

function webFunctions(){
    $('#accessSafeBtn').click(function(){
        self.location.href = "dashboard.html";
    });

    $('.walksafeBtn').click(function() {
        self.location.replace("walksafe.html");
    });

    $('.reportIncidentBtn').click(function() {
        localStorage.setItem("page", "report");
        self.location.replace("login.html");
    });

    $('.reportedIncidentBtn').click(function() {
        localStorage.setItem("page", "viewReports");
        self.location.replace("login.html");
    });

    $('.listViewBtn').click(function() {
        self.location.replace("listView.html");
    });

    $('.walksafeBtn').click(function() {
        self.location.replace("walksafe.html");
    });

    $('.reportIncidentBtn').click(function() {
        self.location.replace("login.html");
    });
    $('.listViewBtn').click(function() {
        self.location.replace("listView.html");
    });

};