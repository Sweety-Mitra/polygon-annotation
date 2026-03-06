interface ToolbarProps {
  onReset: () => void;
  onExport: () => void;
}

const Toolbar = ({ onReset, onExport }: ToolbarProps) => {
  return (
    <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <button onClick={onReset}>Reset</button>
      <button onClick={onExport}>Export</button>
    </div>
  );
};

export default Toolbar;