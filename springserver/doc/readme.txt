----------------- How to run it -----------------------
Way 1: deploy the springserver war file on the wildfly 10 server and angular app seprately if both are in the same machine.. this will work fine as this
       application is configured using localhost changes.
    -> deploying the war file on the widlfly server is easy just like any other application. no much changes.
    -> open the web folder of springweb submodule in the visual basic studio and run below command as per need:
      command to install any plugin: #npm install @angular/http
	  build app:                     #npm run build 
	  start the angular:             #npm start
	  url to access: http://localhost:4200/               // open the homepage of GUI.
	  command to create compoent: ng g component <comp_name>
way 2: on maven build itself it will embedd GUI in springserver war file using pom.xml. it has been implemented but not yet tested. once it is tested
     then i will put steps here too.
	  
---------------------
<script type="text/javascript" src="springserver/runtime.js"></script>
	<script type="text/javascript" src="springserver/polyfills.js"></script>
	<script type="text/javascript" src="springserver/styles.js"></script>
	<script type="text/javascript" src="springserver/vendor.js"></script>
	<script type="text/javascript" src="springserver/main.js"></script>
	
	
======== bootstrap ============
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>


========================== Error =============
Q)  org.springframework.web.HttpMediaTypeNotSupportedException: Content type 'text/plain' not supported