command to install any plugin: npm install @angular/http
build app: npm run build 
start the angular: npm run
url to access: http://localhost:4200/   
command to create compoent: ng g component <comp_name>


====================== Error ===========
Q) core.es5.js:158 Could not find Angular Material core theme. Most Material components may not work as expected.
Ans:  Please insert below code into your style.css which is located in your src folder.
       @import "../node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css";
Q) While accessing backend api, it was throwing error 403 because of CORS prblm.
Ans: add below annotation on the resource api which need be access by other domain than where backend is deployed.
     @CrossOrigin(origins = "*", allowedHeaders = "*")
Q) code changes to implement autocomplete functionality.
Ans: https://www.tutorialspoint.com/angular_material7/angular_material7_autocomplete
Q) Difference between Constructor and ngOnInit
Ans: The Constructor is a default method of the class that is executed when the class is instantiated
  -> ngOnInit is a life cycle hook called by Angular2 to indicate that Angular is done creating the component.
Q) (change) vs (ngModelChange) in angular.