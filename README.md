# Stock-App With React + Vite

## Libraries
- `@reduxjs/toolkit`
- `react-redux`
- `axios`
- `formik`
- `react-router-dom`
- `@mui/material-ui`
- `@emotion/react`
- `@emotion/styled`
- `@formspree/react`
- `@mui/icons-material`
- `react-toastify`
- `redux-persist`
- `yup`

## To Run The Program
-`open project in vscode`
-`open in integreted terminal`
-`pnpm`
-`pnpm dev`

## API
<h4>Django API was used in project</h4>

## Live Link
<a href="https://redux-stock-app.vercel.app" target="_blank">Stock App Live Link</a>


## Project Skeleton

```
Stock App
|
├── public
│     └── favicon.png
├── src
│    ├── app
│    │     └── store.jsx
│    ├── assets
│    │     └── favicon.png
│    │     └── loading.gif
│    ├── components
│    │     ├── BrandCard.jsx
│    │     └── BrandModal.jsx
|    |     └── Charts.jsx
|    |     └── FirmCard.jsx
|    |     └── FirmModal.jsx
|    |     └── KpiCards.jsx
|    |     └── MunuListItem.jsx
|    |     └── ProductModal.jsx
|    |     └── ProductTable.jsx
|    |     └── RegisterForm.jsx
|    |     └── SaleModal.jsx
|    |     └── SaleTable.jsx
│    ├── features
│    │     └── autSlice.jsx
|          └── stockSlice.jsx
│    ├── helper
|    |     └── ToastNotify.js
│    ├── hooks
│    │     └── useAuthCall.jsx
|    |     └── useAxios.jsx
|    |     └── useStockCall.jsx
│    ├── pages
│    │     └── Brands.jsx
|    |     └── Dashboard.jsx
|    |     └── Firms.jsx
|    |     └── Home.jsx
|    |     └── Login.jsx
|    |     └── Products.jsx
|    |     └── Purchases.jsx
|    |     └── Register.jsx
|    |     └── Sales.jsx
│    ├── router
│    │     └── AppRouter.jsx
|    |     └── PrivateRouter.jsx
│    ├── styles
|    |     └── globalStyles.js
│    ├── App.jsx
│    ├── App.css
│    ├── main.jsx
│    └── index.css
├── package.json
├── .env
└── pnpm-lock.yaml
└── index.html
└── postcss.config.js
└── tailwind.config.js
└── vite.config.js
```



















