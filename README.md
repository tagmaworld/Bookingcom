# Bookingcom
Please do a git clone  for - git clone https://github.com/gratra/Bookingcom.git  to start the project
Then do a npm install
Test: To verify new filters (Ratings and Sauna) working as expected.
Command to run the test=      (npm run e2e-test -- --env chrome) 
To run the test in different environment just change the settings under test to desired browser

Verifying rating and saun filter : This is written in a quick simple BDD format for clear understanding of every team member.
Similarly more features/scenarios can be creates quicky to verify other tests.
We get the requirements and AC and convert them into feature files ( eradicating the need for writing scripts)
Same feature files bdd format also used as test cases for manual work and like here converted into snippets and code
to interact with browser.
This particular framework is simple using javascript/npm/node/nightwatch/cucumber - feature files (which are basically AC,reqmnts and test cases)
Step definitions= which are the actions turned into code
Assertions= Are taken from nightwatch framework itself to verify the results.


Note javascript: I have created this with javascript using nightwatch framework and cucumber (BDD ).
This can be expanded and made more robust with bit more time using =
Page object ,keeping every element seperate to reuse and commit easy chnages in code and running scripts
Also create n  number of feature files and tagging them to run specifically.
We need to just add .feature file under features folder and write are BDD (scripts that we need to verify)
for every corresponding feature create a .js file and code actions there.


Note java: The same can also be  easily achieved by simple JAVA / Testng and cucumber
creating page object model and pagefactory (creating framework with driver manager class,seperate utility ,identifiers,property.confg and running with annotations.
Also using date class and date format class in code to give tester options to test any date and pick it up with string.



