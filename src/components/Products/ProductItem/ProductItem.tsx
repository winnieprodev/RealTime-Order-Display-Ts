import { Order } from "models";
import { library as iconLibrary } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface OwnProps {
  onClick: () => void;
  info: Order;
}

const ProductItem: React.FC<React.PropsWithChildren<OwnProps>> = ({
  onClick,
  info,
}) => {
  iconLibrary.add(faHeart);
  return (
    <tr key={info.id}>
      <td className="text-center" style={{color: '#ced4da'}}>{info.no}</td>
      <td className="text-center" style={{color: '#ced4da'}}>{info.customer}</td>
      <td className="text-center" style={{color: '#ced4da'}}>{info.cook}</td>
      <td className="text-center" style={{color: '#ced4da'}}>{info.destination}</td>
      <td className="text-center" style={{color: '#ced4da'}}>{info.price}</td>
      <td className="text-center" style={{color: '#ced4da'}} onClick={onClick}>{info.state}</td>
    </tr>
  );
};

export default ProductItem;
