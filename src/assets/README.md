# Image assets

Store site photography in these folders:

```text
assets/
├── aanchal/   # Aanchal's portraits and public-speaking photos
└── gallery/   # Photos displayed on the Gallery page
```

Import an Aanchal portrait from a page component like this:

```jsx
import portrait from '../assets/aanchal/AanchalNarang.jpeg'

<img src={portrait} alt="Aanchal Narang" />
```

The Gallery page loads supported image files directly from `assets/gallery`.
