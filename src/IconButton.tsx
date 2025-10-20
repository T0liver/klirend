import React from "react";
import "./IconButton.css";

interface IconButtonProps {
    icon: string;
    label: string;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
    icon,
    label,
    onClick,
    type = "button",
    disabled = false,
}) => {
    return (
        <button className="icon-button" type={type} onClick={onClick} disabled={disabled}>
            <span className="material-symbols-outlined">{icon}</span>
            <span className="icon-button-label">{label}</span>
        </button>
    );
};

export default IconButton;