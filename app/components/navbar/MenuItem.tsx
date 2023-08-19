"use client";

const MenuItem = ({
    onClick,
    label,
}: {
    onClick: () => void;
    label: string;
}) => {
    return (
        <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
            {label}
        </div>
    );
};

export default MenuItem;
