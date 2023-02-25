import React from "react";
import error404 from "../../assets/images/error.png";

const styles: React.CSSProperties | undefined = {
    textAlign: "center",
};

export const ErrorPage = () => {
    return (
        <div className="error" style={styles}>
            <img width={645} src={error404} />
        </div>
    );
};
