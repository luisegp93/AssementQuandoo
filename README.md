# QuandooAssestment
Technical test application

* The selected technology stack was Cypress.
* The reason behind using Cypress would be the fact that it can handle both UI Automation & API Automation out of the box. The possibility to mix API & UI automation on a same test script gives amazing possibilies to us as automators. Also setup is pretty simple and community support is growing and a really fast rate for this tool. 

In order to run the test cases please first install all dependencies running "npm install" from command line on root folder.

* For running test cases using Cypress UI please run "npx cypress open" from command line on root folder; This will open the Cypress UI and you can select the test cases you want to run and see all steps running on real time from a headed mode.

![image](https://user-images.githubusercontent.com/72770333/169706311-daad4176-ee1e-4ea9-bbc1-dc438e4bfa3d.png)

![image](https://user-images.githubusercontent.com/72770333/169706340-7a89a9e9-7f95-4219-96b1-8db863428984.png)


* For running test cases on a headless mode please run "npx cypress run" from command line on root folder; Test cases will start running headless and you can track the results on the terminal. Also I added a HTML report that will be generated after running this command for better visualization of the results. This report will be generated on the following path /cypress/report/index.html ; This report can be open on any browser and will show the specs that were run along with the results and running time:
![image](https://user-images.githubusercontent.com/72770333/169706258-0727cc50-107c-4d35-979d-ed6ebfdac7a3.png)

This report will also show captures of failing test cases, you can try changing one of the assertions to make one test case fail a see this result.

* To improve Cypress could easily be integrated on a CI/CD pipeline to have the test suit scheduled to run all days and make the proper setup for the HTML report to be sent to the corresponding stakeholders to always have an idea of the current healthiness status of the application. Other way would be to have deployments on certain environment to work as trigger for the Jenkins/Cypress job and also get results sent via email after each deployment.
