// =============================================================
//  EDIT THIS FILE to add / remove / reorder your visualizations.
//
//  Each entry:
//    id       - unique slug, used for the sidebar anchor link
//    title    - heading shown above the figure
//    src      - path to the GIF (place files in the gifs/ folder)
//    caption  - description shown under the title
//    meta     - optional small italic note (e.g. dataset, lead time)
// =============================================================

const FIGURES = [
  {
    id: "era5-ensemble",
    title: "ERA5 Ensemble",
    src: "animation/era5_ensemble.gif",
    caption:
      "Ensemble forecast on ERA5, showing the spread of members over the forecast horizon.",
    meta: "ERA5 · ensemble",
  },
  {
    id: "era5-intermediate",
    title: "ERA5: 15 min Steps Intermediate Predictions",
    src: "animation/era5_intermediate.gif",
    caption:
      "Intermediate predictions of the model at 15-minute time steps.",
    meta: "ERA5 · 15 min intermediate steps",
  },
  {
    id: "era5-15days",
    title: "ERA5: 15 Days Rollout",
    src: "animation/era5_15days.gif",
    caption:
      "Autoregressive rollout on ERA5 over a 15-day forecast horizon.",
    meta: "ERA5 · 15-day rollout",
  },
  {
    id: "era5-artifacts",
    title: "ERA5: Artifacts of 2 Hour Model",
    src: "animation/era5_failure.gif",
    caption:
      "Failure case illustrating artifacts produced by the 2-hour model.",
    meta: "ERA5 · 2-hour model artifacts",
  },
  // Add more entries here ...
];
