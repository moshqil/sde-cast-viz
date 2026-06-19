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

// Short blurb shown at the top of the page (rendered by app.js).
const PAGE_DESCRIPTION =
  "This page collects animated visualisations to the thesis SDE Matching with Highly Informative Observations for Weather Forecasting.";

const FIGURES = [
  {
    id: "sqg-ensemble",
    title: "1. SQG Ensemble",
    src: "animation/sqg_ensemble.mp4",
    caption:
      "SQG ensemble rollout — spread of members from a shared initial state.",
    meta: "SQG · ensemble",
  },
  {
    id: "sqg-600h",
    title: "2. SQG: 600 Hour Rollout",
    src: "animation/sqg_600h.mp4",
    caption:
      "Long-range SQG rollout over 600 hours. As the model is trained on 6-hour lead time, this visualisation shows the stability and consistency of the learned dynamics.",
    meta: "SQG · 600-hour rollout",
  },
  {
    id: "sqg-residual",
    title: "3. SQG: Residual",
    src: "animation/sqg_residual.mp4",
    caption:
      "Residual of forecast and ground truth on SQG, showing the difference between ground truth/prediction at time t and starting point.",
    meta: "SQG · residual",
  },
  {
    id: "sqg-posterior",
    title: "4. SQG: Posterior",
    src: "animation/sqg_posterior.mp4",
    caption:
      "SQG learnable interpolation. The learned interpolation is represented by it's components: linear interpolation and a learnable correction of Gaussian form with learnable mean and std. The figure shows how interpolant is constrained to match observation at 0 hours and 6 hours (endpoints) and in the middle the learnable correction matches the difference between ground truth and linear interpolation (bottom row). This shows that the model is behaving as intended and learnable correction learnt non-linear dynamics.",
    meta: "SQG · posterior",
  },
  {
    id: "sqg-blurring",
    title: "5. SQG: Blurring",
    src: "animation/sqg_blurring.mp4",
    caption:
      "SQG sparse-data failure mode. SDE-Cast is trained on 12-hour lead time but inferenced more frequently. The model removes the high-frequency details (blur at 6 hours) and then restores them. Spectral loss is partially fixing this issue, but as a byproduct adds some high-frequency unrealistic features.",
    meta: "SQG · blurring",
  },
  {
    id: "era5-ensemble",
    title: "6. ERA5 Ensemble",
    src: "animation/era5_ensemble.mp4",
    caption:
      "Ensemble rollouts (2 days). Several ERA5 ensemble members rolled out over 48 hours from a shared initial state.",
    meta: "ERA5 · ensemble",
  },
  {
    id: "era5-intermediate",
    title: "7. ERA5: 15 min Steps Intermediate Predictions",
    src: "animation/era5_intermediate.mp4",
    caption:
      "Animation illustrating continuous intermediate predictions without any visible artifacts. SDE-Cast is trained at 1 hour lead time, but inferenced every 15 minutes. As there is no ground truth for intermediate predictions, the ground truth animation is slower.",
    meta: "ERA5 · 15 min intermediate steps",
  },
  {
    id: "era5-15days",
    title: "8. ERA5: 15 Days Rollout",
    src: "animation/era5_15days.mp4",
    caption:
      "Animation illustrating long-range stability of SDE-Cast. A rollout of 15 days is produced by the model trained on 1 hour lead time.",
    meta: "ERA5 · 15-day rollout",
  },
  {
    id: "era5-artifacts",
    title: "9. ERA5: Artifacts of 2 Hour Model",
    src: "animation/era5_failure.mp4",
    caption:
      "Sparse-data failure mode (2-hour ERA5 model). The intermediate flashing artifacts are similar to the artifacts visible on SQG.",
    meta: "ERA5 · 2-hour model artifacts",
  },
  // Add more entries here ...
];
