$(document).ready(function() {
    var token = localStorage.getItem("token");
    //console.log(token);

    var start = "https://app.sycamoreeducation.com/api/v1";
    var end = "?access_token=" + token;

    var url = start + "/Me" + end;

    $.get(url, function(data) {
        //console.log(data);
        localStorage.setItem("me", JSON.stringify(data));




        fetchData();
    });

    function fetchData() {
        var me = JSON.parse(localStorage.getItem("me"));

        ////////////////////////////////////////////
        //STUDENT NAME
        ////////////////////////////////////////////
        $("#logo").text(me.FirstName + " " + me.LastName);

        /////////////////////////////////////////////
        // STUDENT GRADE/PHOTO
        /////////////////////////////////////////////
        var url = start + "/Student/" + me.StudentID + end;

        $.get(url, function(data) {
            //console.log(data);
            $("#studentGrade").text(data.Grade);
            $("#studentPhoto").attr("src", "https://app.sycamoreeducation.com/Schools/" + me.SchoolID + "/Students/" + data.Picture);
        });

        ////////////////////////////////////////////
        // School Name
        ////////////////////////////////////////////
        var url = start + "/School/" + me.SchoolID + end;

        $.get(url, function(data) {
            //console.log(data);
            $("#schoolName").text(data.Name);
        });

        /////////////////////////////////////////////
        //LUNCH
        /////////////////////////////////////////////
        var url = start + "/School/" + me.SchoolID + "/Cafeteria" + end;

        $.get(url, function(data) {
            console.log(data);

            //get today's date
            var d = new Date();
            var day = ("0" + d.getDate()).slice(-2);
            var month = ("0" + (d.getMonth() + 1)).slice(-2);
            var year = d.getFullYear();
            var today = month + "/" + day + "/" + year;
            console.log("Checking for this date: " + today);

            var html = "";

            //for each object in the "data" variable, do something
            $.each(data, function(date, meals) {
                console.log("Date: " + date + " and today is " + today);
                if (date == today) {
                    console.log("We have lunch today");

                    $.each(meals, function(index, meal) {
                        console.log("Meal is :" + meal);

                        console.log("Meal " + index + " is " + meal.MealName);

                        html += "<h2>" + meal.MealName + "</h2><h5>" + meal.MealDesc + "</h5>";
                    });

                } else {
                    console.log("No food for you");
                }

            }); //end each date

            $("#lunch").html(html);

        }); //end cafeteria

        ///////////////////////////////////////////////
        //GRADES
        ///////////////////////////////////////////////
        var url = start + "/Student/" + me.StudentID + "/Grades" + end;

        $.get(url, function(data) {
            console.log(data);
            var html = "";
            $.each(data, function(index, grade) {
                localStorage.setItem(grade.ClassID, grade.ClassName);
                //console.log(grade.Number); 
                html += "<tr><td>" + grade.ClassName + "</td>";
                if (grade.SubjectName) html += "<td>" + grade.SubjectName + "</td>";
                else html += "<td></td>";
                html += "<td>" + grade.PDate + "</td>";
                html += "<td>" + grade.Number + "</td>";
                html += "<td><button class='btn btn-info assignmentBtn' id='gradebtn' data-toggle='modal' data-target='#myModal1'data-classID=" + grade.ClassID + ">" + grade.Letter + "  </button></td>";
            });
            $("#grade-table").html(html);
        });

        ///////////////////////////////////////////////
        //ASSIGNMENT GRADES
        ///////////////////////////////////////////////
        $(document).on("click", ".assignmentBtn", function() {
            var classID = $(this).attr("data-classID");
            console.log($(this));
            var url = start + "/Student/" + me.StudentID + "/Classes/" + classID + "/Grades" + end;
            var className = localStorage.getItem(classID);
            $("#modal-title").html(className);
            $.get(url, function(data) {
                console.log(data);
                var html = "";
                $.each(data, function(index, grade) {
                    //console.log(grade.Number); 
                    html += "<tr><td>" + grade.Title + "</td>";
                    html += "<td></td>";
                    html += "<td>" + grade.DueDate + "</td>";
                    html += "<td>" + grade.Possible + "</td>";
                    html += "<td>" + grade.Received + "</td>";
                });
                $("#assignments").html(html);
            });
        });
        $(document).on("click", ".close", function() {
            $("#assignments").empty();
        });

        ///////////////////////////////////////////////
        //NEWS
        ///////////////////////////////////////////////
        var url = start + "/School/" + me.SchoolID + "/News" + end + "&preview=1";

        $.get(url, function(data) {
            console.log(data);
            var html = "";

            $.each(data, function(index, news) {
                html += "<h3 id='articleTitle'>" + news.Title + "</h3>";
                html += "<p>" + news.Content;
                html += " <span class='readmore'>Read more...</span></p>";
            });

            $("#articleText").html(html);
        });

    };
});
