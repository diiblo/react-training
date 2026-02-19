export function InputRange({onChange, min, max}) {
    return <div>
        <input
            className="w-full"
            type="range"
            min={min}
            max={max}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
}