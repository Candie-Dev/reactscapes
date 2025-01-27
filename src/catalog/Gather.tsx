import React from "react";

const Gather = () => {
    const wrapperStyle: React.CSSProperties = {
        position: "relative",
        display: "inline-block",
        border: "2px solid #d3d3d3",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        background: "#f9f9f9",
    };

    const imgStyle: React.CSSProperties = {
        display: "block",
        maxWidth: "150px", // Adjusted size
        height: "auto", // Keeps the aspect ratio
        borderRadius: "5px",
    };

    const deleteButtonStyle: React.CSSProperties = {
        position: "absolute",
        top: "10px",
        right: "10px",
        fontSize: "20px",
        color: "#333",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        zIndex: 10,
        transition: "transform 0.2s ease",
    };

    const deleteButtonHoverStyle: React.CSSProperties = {
        transform: "scale(1.2)",
        color: "#ff0000",
    };

    return (
        <div style={{ display: "flex", gap: "20px" }}>
            <div style={wrapperStyle}>
                <img src="/images/image20.png" alt="" style={imgStyle} />
                <button
                    style={deleteButtonStyle}
                    onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.transform = deleteButtonHoverStyle.transform!;
                        (e.target as HTMLElement).style.color = deleteButtonHoverStyle.color!;
                    }}
                    onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.transform = "none";
                        (e.target as HTMLElement).style.color = "#333";
                    }}
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default Gather;
