const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="shimmer-card">
                    <div className="big-card"></div>
                    <div style = {{display: "flex" ,gap: "10px"}}>
                        <div className="small-card"></div>
                        <div className="small-card"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;
