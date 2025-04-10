type TIcon = {
    size?: number,
    fill?: string,
    className?: string,
}

export const BackArrow = (props: TIcon) => {
    const { size = 24, fill = "#FFFFFF", className = "" } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${size}px`} viewBox="0 -960 960 960" width={`${size}px`} fill={fill} className={className}>
            <path d="m142-480 294 294q15 15 14.5 35T435-116q-15 15-35 15t-35-15L57-423q-12-12-18-27t-6-30q0-15 6-30t18-27l308-308q15-15 35.5-14.5T436-844q15 15 15 35t-15 35L142-480Z" />
        </svg>
    );
}