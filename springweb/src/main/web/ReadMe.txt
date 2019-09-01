command to install any plugin: npm install -g @angular/cli, npm install @angular/http
create a angular app: ng new my-first-app
build app: npm run run build 
start the angular: npm start
url to access: http://localhost:4200/   
command to create compoent: ng g component <comp_name>
                            ng g service sharedInfoContainer
                            ng generate directive highlight
-------------- Reading Link ----------
-> https://printjs.crabbly.com/
-> https://www.dynamsoft.com/Products/barcode-recognition-javascript.aspx
   https://stackoverflow.com/questions/10879808/how-hid-devices-work-when-programming

================== Node and Angular command =================

-> npm install: By default, npm install will install all modules listed as dependencies in package.json in node_modules/.
             -> it installs the current package context (ie, the current working directory) as a global package if we append -g in
                the command.
-> npm build: "npm run build" is an alias for npm build.
             -> it will look for build tag in the package.json file which will generally be "ng build". it build the project and put
                the generated file in the /dist folder
             -> it does nothing unless you specify what "build" does in your package.json file.
-> npm start: it will look for start tag in the package.json file which will generally be "ng serve". 
              -> it will be like build followed by deploying the angular application.
-> ng serve --open and ng build: 
              Both commands ng build and ng serve will clear the output folder before they build the project.
            -> ng serve --port 4401    
              
------------------- Note -----------------------------------
-> Angular bootstrap proces consists of the two major stages:
  1. constructing components tree
  2. running change detection
-> Angular component lifecycle: There are 8 different stages in the component lifecycle.
    -> Every stage is called as lifecycle hook event.
    -> The constructor of the component class executes, first, before the execution of any other lifecycle hook events.
    -> ngOnChanges() -> ngOnInit() -> ngDoCheck() -> ... -> ngOnDestroy()
    1. ngOnChanges(): Invoked every time there is a change in one of th input properties of the component.
                    NOTE: ngDoCheck and ngOnChanges should not be implemented together on the same component.
    2. ngOnInit(): Invoked when given component has been initialized.
                -> This hook is only called once after the first ngOnChanges.
    3. ngDoCheck(): You can see that ngDoCheck is called on the child component when the parent component is being checked. 
                -> it’s triggered after ngOnChanges and ngOnInit.
    3. ngOnDestroy(): This method will be invoked just before Angular destroys the component.
                -> Use this hook to unsubscribe observables and detach event handlers to avoid memory leaks.

-> Data Sharing: There are four different methods for sharing data between Angular components.
      1. Parent to Child: Sharing Data via Input:  It works by using the @Input() decorator to allow data to be passed via the template.
                    -> in parent DOM component used child componet is:
                          <app-parent>
                              <app-child [childMessage]="parentMessage"></app-child>
                          </app-parent>
                    -> in child component ts file: 
                           @Input() childMessage: string;
                    -> we use @Input decorator for reading data from DOM to the custom directives. 
                           <p appHighlight [highlightColor]="color"></p>   // in html file
                           @Input() highlightColor:string;                  //in directive ts file appHighlight
                       where appHighlight is our custom directive which read value from parent component using variable 
      2. Child to Parent: Sharing Data via ViewChild: ViewChild allows a one component to be injected into another, giving the parent 
                         access to its attributes and functions. 
                      -> One caveat, however, is that child won’t be available until after the view has been initialized. 
                      -> This means we need to implement the AfterViewInit lifecycle hook to receive the data from the child.
                      -> in parent component ts file:
                           @ViewChild(ChildComponent) child;   // on class level
                           ngAfterViewInit() {
                              this.message = this.child.message
                            }
                      -> in child component ts file:
                           export class ChildComponent {
                            message = 'Hola Mundo!';
                          }
    3. Unrelated Components: Sharing Data with a Service: Here we can use the service component to share the data between unrelated component.
                        https://jasonwatmore.com/post/2019/02/07/angular-7-communicating-between-components-with-observable-subject
-> Observable: https://jasonwatmore.com/post/2019/02/07/angular-7-communicating-between-components-with-observable-subject
           -> The way to communicate between components is to use an Observable and a Subject (which is a type of observable).
           -> in a nutshell there are two methods that we're interested in: Subject.next(), this.subject.asObservable() and Observable.subscribe().

-> (): used for event binding
   [()]: used for two way data binding.
   []: it is used in many cases:
       1. property binding:  the trick is to put the property onto the element wrapped in brackets: [property]
                          Example: <img [src]="srcURL" />
       2. Pass data from parent component to the child component. 
                          Example:  <people [person]="title"></people>

====================== Error ===========
Q) core.es5.js:158 Could not find Angular Material core theme. Most Material components may not work as expected.
Ans:  Please insert below code into your style.css which is located in your src folder.
       @import "../node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css";
Q) While accessing backend api, it was throwing error 403 because of CORS prblm.
Ans: add below annotation on the resource api which need be access by other domain than where backend is deployed.
     @CrossOrigin(origins = "*", allowedHeaders = "*") // provided by spring mvc
Q) code changes to implement autocomplete functionality.
Ans: https://www.tutorialspoint.com/angular_material7/angular_material7_autocomplete
Q) Difference between Constructor and ngOnInit
Ans: The Constructor is a default method of the class that is executed when the class is instantiated
  -> ngOnInit is a life cycle hook called by Angular2 to indicate that Angular is done creating the component.
Q) (change) vs (ngModelChange) in angular.

Q) difference between [ngModel], (ngModel) and [(ngModel)]?
Ans: [ngModel]="currentHero.name" is the syntax for one-way binding.
     [(ngModel)]="currentHero.name" is for two-way binding
     [ngModel]="currentHero.name" and (ngModelChange)="currentHero.name = $event": If you only need to pass model, use the first one. 
                If your model needs to listen change events (e.g. when input field value changes), use the second one
Q) How to disable print preview window in chrome?
Ans: chrome shortcut -> properties -> edit target to: "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-print-preview
Q) How to include javascript file in angular ts file. or access js function in angular ts file.
Ans: add js file in the angular.json file under "scripts". 


Q) what is the use of questionmark in  below expression angular?
      product?.price 
Ans; above statement is equal to "product !== null ? product.price : null" ...

Q) How to load data before rendering the component?                      VVI
Ans: https://www.callibrity.com/blog/angular-2-route-resolves
     https://www.techiediaries.com/angular-router-resolve/


     difference between template driven form and reactive forms in angular 7