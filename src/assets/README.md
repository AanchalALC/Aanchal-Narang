# Assets

Drop your real image files here, then import them in components/pages.

Suggested structure:

```
assets/
├── aanchal.jpg          # profile photo (used in Home + About intro cards)
├── intro-video.mp4      # 32s intro clip (Home page)
├── press/               # media-outlet logos
│   ├── gq-india.png
│   ├── hindustan-times.png
│   └── ...
└── gallery/             # event photos + topic illustrations
    ├── workshop-1.jpg
    └── ...
```

Example import:

```jsx
import aanchal from '../assets/aanchal.jpg'
<img src={aanchal} alt="Aanchal Narang" className="w-48 h-48 rounded-full object-cover" />
```

Until you add real files, the site renders tasteful icon/gradient placeholders
in their place, so it looks complete out of the box.
