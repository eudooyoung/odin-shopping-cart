# Odin Shopping Cart Project

## pupose

Get to know how to use React Router, Vitest and Typescript if possible.

## directory structure design

```
.
└── src
    ├── components
    │   └── SomeComponent
    │       ├── SomeComponent.tsx
    │       ├── SomeComponent.test.tsx
    │       └── SomeComponent.module.css
    ├── routes
    │   └── SomeRoute
    │       ├── SomeRoute.tsx
    │       ├── SomeRoute.test.tsx
    │       └── SomeRoute.module.css
    ├── utils
    │   └── setup.ts
    ├── assets
    │   └── SomeAssets....
    ├── App.tsx
    ├── App.test.tsx
    ├── App.module.css
    └── main.tsx

```

## actual result

```
.
├── components
│   ├── footer
│   │   ├── Footer.module.css
│   │   └── Footer.tsx
│   ├── header
│   │   ├── Header.module.css
│   │   ├── Header.test.tsx
│   │   └── Header.tsx
│   ├── main
│   │   ├── Main.css
│   │   ├── Main.test.tsx
│   │   └── Main.tsx
│   ├── navbar
│   │   ├── NavBar.module.css
│   │   ├── NavBar.test.tsx
│   │   └── NavBar.tsx
│   ├── order-card
│   │   ├── OrderCard.module.css
│   │   ├── OrderCard.test.tsx
│   │   └── OrderCard.tsx
│   └── product-card
│       ├── ProductCard.module.css
│       ├── ProductCard.test.tsx
│       └── ProductCard.tsx
├── routes
│   ├── cart
│   │   ├── Cart.module.css
│   │   └── Cart.tsx
│   ├── home
│   │   ├── Home.module.css
│   │   └── Home.tsx
│   └── shop
│       ├── Shop.module.css
│       └── Shop.tsx
├── utils
│   ├── routes.tsx
│   ├── setupTest.ts
│   └── types.ts
├── App.css
├── App.tsx
├── main.css
└── main.tsx
```

## references

- favicon: From <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EA%B2%80%EC%9D%80-%EB%B0%B0%EA%B2%BD%EC%97%90-%EC%88%98%EC%9D%80-71W3CWeZF7A?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> By <a href="https://unsplash.com/ko/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a>
- font: [Google Sans Flex](https://fonts.google.com/specimen/Google+Sans+Flex/license?categoryFilters=Feeling:%2FExpressive%2FRugged&preview.script=Latn) from [Google Fonts](https://fonts.google.com/?preview.script=Latn)
- mdi Icons: Plus, Minus, Cart Plus and TrashCan icons from [Pictogrammers](https://pictogrammers.com/)
- github icon: From [Devicon](https://devicon.dev/)
- product data: From [Fake Store API](https://fakestoreapi.com/)
