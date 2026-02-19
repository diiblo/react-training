/**
 *
 * @param name
 * @returns {React.JSX.Element}
 * @constructor
 */
export function ProductCategoryRow({name}) {
    return <tr>
        <th colSpan={2} className="font-bold">{name}</th>
    </tr>
}