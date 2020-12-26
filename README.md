# AngularLearningProjects

This repository I am using for learning angular!

-> To create an application
	Syntax: ng new project_name

-> To run the application
	Syntax: ng serve (In the project_name directory)

Root module--> app.module.ts  ---> Combination(HTML) of Component and Services

Root component--> app.component.ts

-> To create a component
	Syntax: ng g c component_name --It will create a folder with component_name and with four files.
	component_name.component.html 	(Template)
	component_name.component.ts		(Service)
	component_name.component.css	(Style sheet)

Every ---- does have   selector,templateUrl, styleUrls

	selector--		to be used in html where the respective component required
		Syntax: selector: '.app-login' (login.component.ts) --<div class="app-login"></div>	(app.component.html)
	
	templateUrl-- 	should be the respective html
		Syntax:	templateUrl: './login.component.html',
