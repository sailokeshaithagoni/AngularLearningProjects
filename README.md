# AngularLearningProjects

This repository I am using for learning angular!

--> To create an application
	Syntax: ng new project_name

--> To run the application
	Syntax: ng serve (In the project_name directory)

Root module--> app.module.ts  --->		Combination(HTML) of Component and Services

Root component--> app.component.ts

--> To create a component
	Syntax: ng g c component_name -->	It will create a folder with component_name and with four files.

	component_name.component.html 	(Template)
	component_name.component.ts		(Service)
	component_name.component.css	(Style sheet)

Every component does have  3 elements--> selector,templateUrl, styleUrls

	selector--		To be used in html where the respective component required

		Syntax: 	selector:	'.app-component_name' (component_name.component.ts)
		Example:	<div class="app-component_name"></div>	(app.component.html)
	
	templateUrl-- 	Should be the respective html

		Syntax:		templateUrl: './component_name.component.html',
		Example:	templateUrl: './login.component.html'

	styleUrls--		Should be the respective css

		Syntax:		'./component_name.component.css'
		Example:	styleUrls: ['./login.component.css']

