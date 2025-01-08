****22: Tailwind CSS in React v19: Installing and Using Tailwind CSS to Style Your React App🔥
*****
------------------------------------------------
# Applying Padding in Tailwind

Here are both approaches:

## Extended Spacing Scale:

If you've extended the spacing scale, you can use the custom classes:

<div class="py-32 px-12">Content</div>

## Arbitrary Values:

You can use arbitrary values directly:

## <div class="py-[3.2rem] px-[1.2rem]">Content</div>


step invave to add tailwind css in react with

step -1 create react project with vite
npm create vite@latest my-project -- --template react
cd my-project


step 2 install tailwind css in the project filder--package json check dependency
npm install -D tailwindcss postcss autoprefixer

step 3 install tailwind config file
npx tailwindcss init -p


step 4 in tailwind.cnfig replace this line
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


step 5 in index.css copy this and paste on top of file code
  @tailwind base;
@tailwind components;
@tailwind utilities;


step 6 resart start project
npm run dev


step 7 use tailwind class in components
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}


  <div className="flex flex-col gap-6 py-6 px-6 ">