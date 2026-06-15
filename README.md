# SDE-Cast — Thesis Visualizations

A static site for displaying GIF visualizations from the thesis. No build step, no dependencies.

## Structure

```
thesis-viz/
├── index.html      # page shell
├── style.css       # dark-academic styling
├── figures.js      # ← EDIT THIS to register your GIFs
├── app.js          # renders the gallery (no need to touch)
├── gifs/           # ← DROP YOUR GIFS HERE
└── README.md
```

## Adding your GIFs

1. Put your `.gif` files in the `gifs/` folder.
2. Open `figures.js` and add/edit entries. Each one needs an `id`, `title`,
   `src` (path to the gif), and an optional `caption` and `meta`. The sidebar
   and gallery update automatically.

The three placeholder gifs currently in `gifs/` can be overwritten or deleted.

## Running locally

Because the site loads `.gif` files, opening `index.html` directly via
`file://` works in most browsers, but a local server avoids any path issues:

```bash
cd thesis-viz
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `sde-cast-viz`).
2. From inside this folder:

   ```bash
   git init
   git add .
   git commit -m "Thesis visualization site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/sde-cast-viz.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment**.
   Set **Source** to `Deploy from a branch`, **Branch** to `main`, folder `/ (root)`.
4. Wait ~1 minute. Your site will be live at
   `https://<your-username>.github.io/sde-cast-viz/`.

### Note on GIF file size

GitHub has a soft limit of 100 MB per file and recommends repos stay under
1 GB. Forecast-rollout GIFs can get large — if a GIF is over ~25 MB, consider
reducing frames or dimensions, or converting to an MP4/WebM `<video>` instead.
