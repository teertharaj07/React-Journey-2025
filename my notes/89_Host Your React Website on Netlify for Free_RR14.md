****89:Host Your React Website on Netlify for Free RR14****
Learn how to host your React website for free on Netlify! This tutorial walks you through building your React app for production, deploying it on Netlify, and customizing your site's settings. Perfect for developers looking to launch their projects without spending a dime. Don't miss the tips and tricks along the way to ensure a smooth deployment. 💸 

React v19
React Router v6.4

step 1:- to deploay your project on internet 
    build prodiction your react applcation using this commaond
     ---- npm run build

outcomes :- one dist (folder) added in your project and that folder conain all production code so you can deploy your project with this dist folder

step 2:- version control system 
 in your project add git and push repostory on github

 step 3:- deploy on server in free of paid 
 free--netlify ,vercel and paid---hostinger


 code of commond prompt:-
 PS C:\Users\HP\OneDrive\Desktop\REACT COURCE\react_project\react_router> npm run build

> react_router@0.0.0 build
> vite build

vite v6.1.1 building for production...
transforming (5) node_modules\react\cjs\react-jsx-runtime.production.js
warn - The `content` option in your Tailwind CSS configuration is missing or empty.
warn - Configure your content sources or your generated CSS will be missing styles.
warn - https://tailwindcss.com/docs/content-configuration
✓ 56 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/index-BzR54CPI.css   13.29 kB │ gzip:  3.63 kB
dist/assets/index-Vylsix4Z.js   269.61 kB │ gzip: 86.99 kB
✓ built in 4.00s
PS C:\Users\HP\OneDrive\Desktop\REACT COURCE\react_project\react_router>




step 4:-getting error 
01. not securing Api : if you are using free hosing patform so it will be sure your api is sucure it means https  . if http have your api so what to do

http://www.example.com

so we can add https

https://www.example.com

02 .if your using the .env file for securing your applicatiom
so add envriont variable and thair value in  free hosing  platform


search environmet variable
and environmet variable name
environmet variable value
