/* easy_fill.js version 0.0.2 */
(function () {
    // Adds jQuery if not present in the page.
    if (typeof jQuery === "undefined") {
        var script = document.createElement("SCRIPT");
        script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
        script.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    // Adds faker.js to head content scripts.
    var faker_script = document.createElement("SCRIPT");
    faker_script.src = "https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js";
    faker_script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(faker_script);

    // Creates link at the top left corner of the page.
    var a = document.createElement("a");
    var linkText = document.createTextNode("Easy Fill");
    a.appendChild(linkText);
    a.title = "Easy Fill";
    a.href = "javascript:void(0)";
    a.className = "fill-form-link";
    a.style.top = 0;
    a.style.left = 0;
    a.style.position = "absolute";

    var checkJQ = function (callback) {
        if (window.jQuery) {
            callback(jQuery);
        } else {
            window.setTimeout(function () { checkJQ(callback);}, 100);
        }
    };

    checkJQ(function ($) {
        document.getElementsByTagName("body")[0].appendChild(a);

        // Method to format date as per the input format of HTML5 input date field.
        $.formattedDate = function (dateObject) {
            var today = new Date(dateObject);
            var day = today.getDate();
            var month = today.getMonth() + 1;
            var year = today.getFullYear();
            if (day < 10) {
                day = "0" + day;
            }
            if (month < 10) {
                month = "0" + month;
            }
            var formatted_date = year + "-" + month + "-" + day;
            return formatted_date;
        };

        // Gets all the form elements in the page and adds placeholder content to them.
        function easy_fill() {
          var random_date = faker.date.recent();
          var random_time = random_date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
          var form_collection = $(".fill-form").length > 0 ? $(".fill-form, .skip-data-overwrite") : $("form");

          form_collection.each(function () {
            if ( !$(this).hasClass("skip-form-fill") )  {
              var skip_data_overwrite = $(this).hasClass("skip-data-overwrite");
              $(this).find("input, select, textarea").each(function () {
                var input = $(this);
                var fill_input =  skip_data_overwrite && input.val() != "" ? false : true;
                if ( fill_input ) {
                  if (input.prop("tagName") === "TEXTAREA") {
                      input.val(faker.lorem.paragraph());
                  } else if (input.prop("tagName") === "SELECT") {
                      var $options = input.find("option");
                      var random = ~~(Math.random() * $options.length);
                      $options.eq(random).prop("selected", true);
                  } else {
                      switch (input.attr("type")) {
                      case "search":
                      case "text":
                          input.val(faker.lorem.word());
                          break;
                      case "password":
                          input.val(faker.internet.password());
                          break;
                      case "number":
                          input.val(faker.random.number());
                          break;
                      case "date":
                          input.val($.formattedDate(random_date));
                          break;
                      case "time":
                          input.val(random_time);
                          break;
                      case "email":
                          input.val(faker.internet.email());
                          break;
                      case "tel":
                          input.val(faker.phone.phoneNumberFormat());
                          break;
                      case "url":
                          input.val(faker.internet.url());
                          break;
                      }
                  }
                }
              });
              var groups = [];
              $(this).find(":radio, :checkbox").each(function () {
                if ($.inArray(this.name, groups) === -1) {
                  groups.push(this.name);
                }
              });
              group_options(groups,skip_data_overwrite,this);
            }
          });
        }

        function group_options(group_set,skip_data_overwrite,ref) {
          $.each(group_set, function (index, elem) {
            var selections = $(ref).find("input[name=" + elem + "]");
            var check_input = skip_data_overwrite && $("input[name=" + elem + "]", ref).is(":checked") ? false : true;
            if (selections.length > 0 && check_input) {
              var randomnumber = Math.floor(Math.random() * selections.length);
              selections[randomnumber].checked = true;
            }
          });
        }

        // Event handler for Easy Fill link click event.
        $(".fill-form-link").on("click", function () {
          easy_fill();
        });
    });
}());
