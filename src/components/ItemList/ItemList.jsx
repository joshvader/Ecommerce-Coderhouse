import {Item} from "../Item/Item"
export const ItemList = ({items}) => {
  return (
    <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {
            items.map(producto=>(
                <Item key={producto.id} item={producto}/>
            ))
        }
    </div>
  )
}

  