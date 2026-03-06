# Polygon Annotation UI

## Overview

This project is a small web application that allows users to annotate a baseball image by creating a polygon on top of it.
Users can place vertices by clicking on the image, and the system automatically connects the points with lines. When the first point is clicked again, the polygon closes and forms a complete shape.

The goal of this project is to demonstrate frontend engineering skills using **React, TypeScript, and SVG** to implement interactive graphics.

---

## Features

### Image Display

* A baseball image is displayed in the center of the page.
* An SVG layer is placed above the image to enable annotation.

### Polygon Annotation

* Clicking on the image places a vertex (dot).
* Each new vertex automatically connects to the previous one using a line.
* Clicking near the first vertex closes the polygon.

### Reset

* The **Reset** button clears all points and allows the user to start over.

### Export Annotation

* The **Export** button downloads the polygon data as a JSON file.

Example output:

```json
{
  "points": [
    { "x": 120, "y": 340 },
    { "x": 180, "y": 360 },
    { "x": 200, "y": 400 }
  ],
  "closed": true
}
```

---

## Tech Stack

* **React**
* **TypeScript**
* **Vite**
* **SVG** for drawing the polygon overlay

SVG was chosen instead of Canvas because it simplifies rendering and managing vector-based elements like points, lines, and polygons.

---

## Project Structure

```
src
│
├── assets
│   └── baseball.png
│
├── components
│   ├── AnnotationCanvas.tsx
│   └── Toolbar.tsx
│
├── types
│   └── polygon.ts
│
├── utils
│   └── exportJson.ts
│
├── App.tsx
└── main.tsx
```

### Components

**AnnotationCanvas**

* Displays the baseball image
* Handles click events
* Draws vertices, lines, and polygon using SVG

**Toolbar**

* Contains Reset and Export buttons

---

## Installation

Clone the repository:

```
git clone <repository-url>
cd polygon-annotation
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

Open the application:

```
http://localhost:5173
```

---

## How It Works

1. The image is rendered with an SVG overlay.
2. Mouse clicks on the SVG capture the coordinates.
3. Each coordinate is stored as a vertex.
4. Lines are drawn between vertices using SVG `<line>` elements.
5. When the first point is clicked again, the polygon is closed using an SVG `<polygon>` element.
6. The Export button converts the polygon data to JSON and downloads it.

---

## Possible Improvements

* Highlight the first vertex when hovering to indicate polygon closure.
* Add undo functionality.
* Allow editing or moving vertices.
* Support multiple polygon annotations.

---

## AI Usage

AI tools were used during development for guidance on implementation details, debugging TypeScript issues, and structuring the project.

---

## Author

Sweety Mitra
