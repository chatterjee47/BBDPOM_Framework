$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Testing login page",
  "description": "",
  "id": "login-functionality;testing-login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@BookStore"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters Username\"\u003cUserName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters Password \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicked on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify title of the page",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-functionality;testing-login-page;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 13,
      "id": "login-functionality;testing-login-page;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 14,
      "id": "login-functionality;testing-login-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 721301,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Testing login page",
  "description": "",
  "id": "login-functionality;testing-login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@BookStore"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters Username\"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters Password \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicked on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify title of the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.user_is_on_login_page()"
});
formatter.result({
  "duration": 11861379000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 21
    }
  ],
  "location": "LoginPageTest.user_enters_Username(String)"
});
formatter.result({
  "duration": 10097202800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 22
    }
  ],
  "location": "LoginPageTest.user_enters_Password(String)"
});
formatter.result({
  "duration": 76156600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.user_clicked_on_login_button()"
});
formatter.result({
  "duration": 4410379399,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.verify_title_of_the_page()"
});
formatter.result({
  "duration": 133625500,
  "status": "passed"
});
});