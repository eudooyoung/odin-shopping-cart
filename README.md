# Odin Shopping Cart Project

## directory structure

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

## references

- Sun Image: From <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EC%BD%94%EB%A1%9C%EB%82%98-%EC%A7%88%EB%9F%89-%EB%B0%A9%EC%B6%9C%EC%9D%B4-%EC%9E%88%EB%8A%94-%ED%83%9C%EC%96%91-JHyiw_dpALk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> By <a href="https://unsplash.com/ko/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a>
- Uranus Image: From <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EC%B2%9C%EC%99%95%EC%84%B1-%ED%96%89%EC%84%B1-Li41RApUAQA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> By <a href="https://unsplash.com/ko/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a>
- Saturn Image: From <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%ED%86%A0%EC%84%B1%EA%B3%BC-%EA%B7%B8-%EA%B3%A0%EB%A6%AC-2W-QWAC0mzI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> By <a href="https://unsplash.com/ko/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a>
- Earth Image: From <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/earth-with-clouds-above-the-african-continent-vhSz50AaFAs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> By <a href="https://unsplash.com/ko/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a>
- Mars Photo: From <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EA%B2%80%EC%9D%80-%EB%B0%B0%EA%B2%BD%EC%97%90-%ED%99%94%EC%84%B1-N3BQHYOVq5E?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> By <a href="https://unsplash.com/ko/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a>
- Neptune Image: From <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EA%B2%80%EC%9D%80-%EB%B0%B0%EA%B2%BD%EC%97%90-%ED%99%94%EC%84%B1-N3BQHYOVq5E?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> By <a href="https://unsplash.com/ko/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a>
- Pluto Image: <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EA%B2%80%EC%9D%80-%EB%B0%B0%EA%B2%BD%EC%97%90-%EB%AA%85%EC%99%95%EC%84%B1--5V6VZxSQRo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> By <a href="https://unsplash.com/ko/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a>
- Jupiter Image: From <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EA%B5%AC%EB%A6%84%EC%9D%B4-%EB%A7%8E%EC%9D%80-%EB%A7%A4%EC%9A%B0-%ED%81%B0-%ED%96%89%EC%84%B1-mAW2LsHwXYY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> By <a href="https://unsplash.com/ko/@hubblespacetelescope?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA Hubble Space Telescope</a>
- Mercury Image: From <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EA%B2%80%EC%9D%80-%EB%B0%B0%EA%B2%BD%EC%97%90-%EC%88%98%EC%9D%80-71W3CWeZF7A?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> By <a href="https://unsplash.com/ko/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a>
- Moon Image: From <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EA%B2%80%EC%9D%80-%EB%B0%B0%EA%B2%BD%EC%97%90-%EC%88%98%EC%9D%80-71W3CWeZF7A?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> By <a href="https://unsplash.com/ko/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a>
- favicon: From <a href="https://unsplash.com/ko/%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> By <a href="https://unsplash.com/ko/@publicdomainvectors/%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Public domain vectors</a>
      
