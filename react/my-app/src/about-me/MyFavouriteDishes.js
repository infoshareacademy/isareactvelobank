export const MyFavouriteDishes = ({ dishes }) => {
    return (
        <ul>
            {dishes.map(dish => 
                <li key={dish.id}>{dish.name}</li>)}
        </ul>
    )
}