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

export const NorthEastIcon = (props: TIcon) => {
    const { size = 24, fill = "#FFFFFF", className = "" } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${size}px`} viewBox="0 -960 960 960" width={`${size}px`} fill={fill} className={className}>
            <path d="M680-624 244-188q-11 11-28 11t-28-11q-11-11-11-28t11-28l436-436H400q-17 0-28.5-11.5T360-720q0-17 11.5-28.5T400-760h320q17 0 28.5 11.5T760-720v320q0 17-11.5 28.5T720-360q-17 0-28.5-11.5T680-400v-224Z" />
        </svg>
    );
}