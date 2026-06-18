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
    id: "sqg-ensemble",
    title: "SQG Ensemble",
    src: "animation/sqg_ensemble.mp4",
    caption:
      "Ensemble forecast on the Surface Quasi-Geostrophic system, showing the spread of members over the forecast horizon.",
    meta: "SQG · ensemble",
  },
  {
    id: "sqg-600h",
    title: "SQG: 600 Hour Rollout",
    src: "animation/sqg_600h.mp4",
    caption:
      "Autoregressive rollout on the Surface Quasi-Geostrophic system over a 600-hour forecast horizon.",
    meta: "SQG · 600-hour rollout",
  },
  {
    id: "sqg-residual",
    title: "SQG: Residual",
    src: "animation/sqg_residual.mp4",
    caption:
      "Residual between the SDE-Cast forecast and the ground-truth trajectory on the Surface Quasi-Geostrophic system.",
    meta: "SQG · residual",
  },
  {
    id: "era5-ensemble",
    title: "ERA5 Ensemble",
    src: "animation/era5_ensemble.mp4",
    caption:
      "Ensemble forecast on ERA5, showing the spread of members over the forecast horizon.",
    meta: "ERA5 · ensemble",
  },
  {
    id: "era5-intermediate",
    title: "ERA5: 15 min Steps Intermediate Predictions",
    src: "animation/era5_intermediate.mp4",
    caption:
      "Intermediate predictions of the model at 15-minute time steps.",
    meta: "ERA5 · 15 min intermediate steps",
  },
  {
    id: "era5-15days",
    title: "ERA5: 15 Days Rollout",
    src: "animation/era5_15days.mp4",
    caption:
      "Autoregressive rollout on ERA5 over a 15-day forecast horizon.",
    meta: "ERA5 · 15-day rollout",
  },
  {
    id: "era5-artifacts",
    title: "ERA5: Artifacts of 2 Hour Model",
    src: "animation/era5_failure.mp4",
    caption:
      "Failure case illustrating artifacts produced by the 2-hour model.",
    meta: "ERA5 · 2-hour model artifacts",
  },
  // Add more entries here ...
];
