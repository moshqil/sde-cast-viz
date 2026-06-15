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
    id: "rollout-sqg",
    title: "Forecast Rollout — SQG",
    src: "gifs/rollout_sqg.gif",
    caption:
      "Autoregressive rollout of the SDE-Cast forecast on the Surface Quasi-Geostrophic system, compared against the ground-truth trajectory.",
    meta: "SQG · 48-step rollout",
  },
  {
    id: "ensemble-spread",
    title: "Ensemble Spread",
    src: "gifs/ensemble_spread.gif",
    caption:
      "Evolution of ensemble members over the forecast horizon, illustrating how spread grows with lead time.",
    meta: "16-member ensemble",
  },
  {
    id: "energy-spectrum",
    title: "Energy Spectrum Evolution",
    src: "gifs/energy_spectrum.gif",
    caption:
      "Radial power spectrum of the forecast over time, compared to the reference spectrum to assess spectral fidelity.",
    meta: "Radial power spectrum",
  },
  // Add more entries here ...
];
