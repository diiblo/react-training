/**
 *
 * @param product
 * @returns {React.JSX.Element}
 * @constructor
 */
export function ProductRow({product}) {

    const style = product.stocked ? undefined : "text-red-500";

    return <tr>
        <td className={style}>{product.name}</td>
        <td className={style}>${product.price}</td>
    </tr>
}