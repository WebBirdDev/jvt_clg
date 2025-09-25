
const Marquee = () => {
  const latest = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: "New Batch Opening !",
  }));
  return (
    <div className="marquee-wrapper backdrop-blur-sm border-[1px] border-ternary">
      <div className="label">Announcements</div>
      <div className="marquee">
        <div className="marquee-content text-overlay">
          {latest.map(({ id, name }) => (
            <span key={id} className="marquee-item">
              {name}
            </span>
          ))}
          {/* Duplicate the items for smooth looping */}
          {latest.map(({ id, name }) => (
            <span key={`dup-${id}`} className="marquee-item">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
