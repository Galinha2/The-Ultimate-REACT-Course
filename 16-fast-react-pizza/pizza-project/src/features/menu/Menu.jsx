import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />      
        ))}
    </ul>
  )
}

export async function loader() {
  console.log("🔄 A carregar menu...");
  const menu = await getMenu();
  console.log("✅ Menu carregado:", menu);
  return menu;
}
export default Menu;
