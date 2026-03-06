import type { Point } from "../types/polygon.ts";
import baseball from "../assets/baseball.png";

interface CanvasProps {
    points: Point[];
    setPoints: (points: Point[]) => void;
    isClosed: boolean;
    setIsClosed: (value: boolean) => void;
}

const AnnotationCanvas = ({
    points,
    setPoints,
    isClosed,
    setIsClosed,
}: CanvasProps) => {
    const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
        if (isClosed) return;

        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (points.length > 2) {
            const first = points[0];

            const distance = Math.hypot(first.x - x, first.y - y);

            if (distance < 10) {
                setIsClosed(true);
                return;
            }
        }

        setPoints([...points, { x, y }]);
    };

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            <img
                src={baseball}
                alt="baseball"
                style={{ display: "block", width: "600px" }}
            />

            <svg
                width="600"
                height="400"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
                onClick={handleClick}
            >
                {points.map((point, index) => (
                    <circle key={index} cx={point.x} cy={point.y} r={5} fill="blue" />
                ))}

                {points.map((point, index) => {
                    if (index === 0) return null;

                    return (
                        <line
                            key={index}
                            x1={points[index - 1].x}
                            y1={points[index - 1].y}
                            x2={point.x}
                            y2={point.y}
                            stroke="red"
                        />
                    );
                })}

                {isClosed && (
                    <polygon
                        points={points.map((p) => `${p.x},${p.y}`).join(" ")}
                        fill="rgba(255,0,0,0.2)"
                        stroke="red"
                    />
                )}
            </svg>
        </div>
    );
};

export default AnnotationCanvas;