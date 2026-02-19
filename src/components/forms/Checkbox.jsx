/**
 *
 * @param checked
 * @param onChange
 * @param label
 * @param id
 * @returns {React.JSX.Element}
 * @constructor
 */

export function Checkbox({checked, onChange, label, id}) {
    return <>
        <div className="flex space-x-4 p-2">
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    </>
}