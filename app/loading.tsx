export default function Loading() {
    return (
        <div className="fixed left-0 top-0 h-screen w-screen flex justify-center items-center bg-peach-puff z-[100]">
            <div>
                <div className="loader mb-2"></div>
                <p className="text-center animate-pulse text-lg">Loading...</p>
            </div>
        </div>
    );
}