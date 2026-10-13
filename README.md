# Signa — Hand sign studio

A browser-based ASL digit recognition studio built with HTML, CSS, and JavaScript. It includes live webcam hand tracking, the bundled 2,062-image Sign Language Digits Dataset, a nearest-image baseline, ten digit practice cards, a session history, and a Dataset Lab for collecting or importing labeled 21-point hand landmark samples.

## Run

Double-click `run.bat` (requires Node.js), or run `node server.mjs` in this folder. Open `http://localhost:8000` if it does not open automatically. Allow webcam access and use **Add training data → Load dataset**. A secure camera origin and browser WebAssembly support are required for MediaPipe; the browser loads its camera tracking code/model from public CDNs. Dataset assets are served from this project folder.

## Recognition notes

The bundled dataset uses a simple nearest-image baseline for the demo. Captured landmark examples personalize predictions using k-nearest neighbors. The initial finger-position heuristic is used until the bundled image set finishes loading. This is a static pose demo for digits 0–9; it does not recognize motion signs, sentences, or full sign languages. Predictions are uncalibrated and are not a validated ASL interpreter. See `data/README.md` for dataset attribution and format details.

## Files

- `index.html` — app shell and UI
- `styles.css` — responsive visual system
- `app.js` — camera, landmark detection, dataset classifier, and capture tools
- `data/X.npy`, `data/Y.npy` — bundled labeled image dataset
- `data/README.md` — attribution and dataset details
- `server.mjs` / `run.bat` — local development server and launcher

