>  Install the Tailwind framework
>>  npm install -D tailwindcss
>
>> npx tailwindcss init
>
> Create a folder in the root as `src`
> then within `src` create files `index.html` and `input.css`
>
> In the `input.css` file paste the below code:
>> @tailwind base;
>
>> @tailwind components;
>
>> @tailwind utilities;
>
> And the run the command:
>> npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
>
> Now link the `output.css` from the `dist` folder to the html file `index.html` present in the src folder.
>
> Done 👍