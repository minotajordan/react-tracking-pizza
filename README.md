## Descripción es Español.
Problemas a resolver:
 - 1 Como logro persistir los datos ?
        - Como solo era mas front que back entonces decibi usar usar redux persist
 
 - 2 Pregunta de negocio: Puedo agregar mas de un ingrediente del mismo tipo a la pizza ?
        - La respuesta despues de un breve analisis es un: Sí, claro que se puede añadir mas de (un) ingrediente del mismo tipo a una pizza nueva
 
 - 3 Como uso la Api ?
        - Nunca habia usado esta Api de modo que me horiente a usar el ejemplo de nodeJs en el controlador de la Api pero como no es asyn entonces tenia que modificar cosas del callback y en preferi usar el ejemplo de Jquery y ponerlo en modo fetch, ademas de que allí era mas claro que atributos pasaba en el Objet (body)
 
 - 4 Hago un agradable panel admin o un simple admin board ?
        - Pues me di a la tarea de tirar estilo para modificar la template basic de SB Admin 2 y agregarle un estilo minimalista para que los modulos fueran mas agradables visualmente a mi estilo
 
 - 5 Hago modulos de cada proceso ? 
        - La idea era hacerlo, pero creo que el tiempo es vital, logro poner components y omiti los container dado que prefiri cambiar todo a modo de ladding page para agilizar la entrega no es lo ideal, pero vamos que si alguien mira este code luego y no ve esto tan super organizado es por que me queda como deuda tecnica :) 


## Getting Started project nextJs demo basic

## Install 
```bash
npm i
```

## Run project dev
First, run the development server:
```bash
npm run dev
```

## Rutes
/board      = board basic template html admin 2 to jsx admin 2 react nextjs
/newPizza   = implementation screen new pizza
/           = example basic actions redux in nextJs

## Info More

Persist data implement
redux-persist
https://www.npmjs.com/package/redux-persist

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
