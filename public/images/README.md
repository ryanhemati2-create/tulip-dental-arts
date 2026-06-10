# Image assets

Drop real brand and lab photography here, then update the references in code.

## Replace these placeholders

| Placeholder | Where it's used | What to add |
| --- | --- | --- |
| `logo.png` | `components/TulipLogo.tsx` (`REPLACE WITH ACTUAL LOGO`) | The official Tulip Dental Arts logo. Until added, an SVG placeholder renders automatically. |
| `gallery/` | `components/GalleryGrid.tsx` / `GalleryCard.tsx` (`REPLACE: insert real lab photos`) | 12+ photos of finished cases (crowns, bridges, veneers, dentures, implants). |
| Open Graph image | `app/layout.tsx` metadata | A 1200×630 social share image (optional). |

## Suggested gallery structure

```
public/images/
├── logo.png
└── gallery/
    ├── crowns-01.jpg
    ├── veneers-01.jpg
    ├── bridges-01.jpg
    └── …
```

When you wire up real photos, swap the placeholder `<TulipMark />` watermark blocks
in `GalleryGrid.tsx` for Next.js `<Image>` components.
