import { useState } from "react";
import type { Point } from "./types/polygon";
import Toolbar from "./components/Toolbar";
import AnnotationCanvas from "./components/AnnotationCanvas";
import { exportAnnotation } from "./utils/exportJson";

function App() {
  const [points, setPoints] = useState<Point[]>([]);
  const [isClosed, setIsClosed] = useState(false);

  const handleReset = () => {
    setPoints([]);
    setIsClosed(false);
  };

  const handleExport = () => {
    exportAnnotation(points, isClosed);
  };

  return (
    <div>
      <Toolbar onReset={handleReset} onExport={handleExport} />

      <div style={{ padding: "20px" }}>
        <AnnotationCanvas
          points={points}
          setPoints={setPoints}
          isClosed={isClosed}
          setIsClosed={setIsClosed}
        />
      </div>
    </div>
  );
}

export default App;