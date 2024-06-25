import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PizzasContext } from "../context/PizzaProvider";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PizzaCard = () => {
  let { id } = useParams();
  const [singlePizza, setSinglePizza] = useState({});
  const { formatToCLP, pizzas, addToCart } = useContext(PizzasContext);
  

  const getPizza = () => {
    const dataPizza = pizzas.find((pizza) => pizza.id === id);
    setSinglePizza(dataPizza || {});
  };

  useEffect(() => {
    getPizza();
  }, [pizzas, id]);

  return (
    <Card className="flex flex-col rounded-3xl p-8 ring-1 xl:p-10 mt-5 items-center justify-center ring-yellow-400">
      <Card.Img src={singlePizza.img} className=" w-96 justify-center "/>
      <Card.Body>
        <Card.Title className="font-semibold text-capitalize text-center">
          Pizza {singlePizza.name}
        </Card.Title>
        <hr></hr>
        <Card.Text className="text-capitalize text-center">{singlePizza.desc}</Card.Text>
        <h5 className="font-bold text-center mt-3">Ingredientes:</h5>
        <ul className="text-left">
          <Card.Text className=" text-capitalize text-center ">
            {singlePizza.ingredients?.map((ingredient, i) => (
              <li key={i} className="text-capitalize">
                {ingredient}
              </li>
            ))}
          </Card.Text>
        </ul>
        <div className="d-flex justify-content-between p-2">

          {/* <h3>{formatToCLP(singlePizza.price)}</h3> */}
          <div className="text-center">
            <h3>Precio: {formatToCLP(singlePizza.price)}</h3>
          </div>
          <div className="text-center">
            <button 
            className="bg-green-500 mt-4  hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => addToCart(singlePizza)}>Añadir 🛒</button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
export default PizzaCard;