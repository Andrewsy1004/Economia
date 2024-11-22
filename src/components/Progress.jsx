
export function Progress({ value }) {
    return (
        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
            <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${value}%` }}
            ></div>
        </div>
    )
}
