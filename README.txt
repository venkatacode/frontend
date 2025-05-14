I have used Vite+React
--------Project Creation-----
npm create vite@latest extension-manager

------------------------------------
After Creation install node modules:
npm install

------------------------------------
To run the Project: 
redirect to the path where your project is located and run the command
npm run dev


Create Two Components 
1.Extensions
   |->ExtensionCard.jsx
2.ThemeSelector
   |->ThemeSelector.jsx

extensionCard Component is used to display the Cards
themeSelector Component is used to change the theme of the web page

we have data.json file where we have the data the displayed in the extension cards
to run the backend file 
install--->npm i json-server
to run---->json-server --watch data.json --port 4000

--------- url where the frontend runs:"http://localhost:5173/"---------
--------- url where the backend runs:"http://localhost:4000/extensions"---------

used Bootstrap,inline and external css for styling

------install bootstrap:npm i bootstrap---------

