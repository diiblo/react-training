/**
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void} onChange
 * @returns {React.JSX.Element}
 * @constructor
 */

export function Input({placeholder, value, onChange}) {
    return <div>
        <input
            className="border-2 p-2 border-gray-400 focus:border-blue-500"
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
}