import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { PizzasContext } from "../context/PizzaProvider";
import { useNavigate } from "react-router-dom";

const CardHome = () => {
  const { formatToCLP, pizzas, addToCart } = useContext(PizzasContext);

  const navigate = useNavigate();

  //ir al detalle de la pizza
  // const handlePizzaDetail = (idPizza) => {
  //     navigate(`/pizza/${idPizza}`);
  // };

  return (
    <>
      <div className="container text-center my-5">
        <div className="flex flex-wrap justify-between">
          {pizzas.map((pizza) => (
            <div className="col-lg-4 col-xl-3 col-md-6 mb-5 d-flex justify-content-center" key={pizza.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
                <Card.Body>
                  <h4 className="text-capitalize">Pizza {pizza.name}</h4>
                  <hr></hr>

                  <div>
                    <h5>
                      <strong>Ingredientes:</strong>
                    </h5>
                    <ul>
                      {pizza.ingredients.map((ingredient, i) => (
                        <li key={i} className="text-capitalize">{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                </Card.Body>
                <Card.Footer className="text-center">
                  <div className="p-2">
                    <h3>{formatToCLP(pizza.price)}</h3>
                  </div>

                  <div className="relative flex gap-10 flex-col justify-center items-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                    <button onClick={() => navigate(`/pizza/${pizza.id}`)} className="btn overflow-hidden relative w-64 bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-full before:bg-red-300 before:left-0 before:top-0 before:-translate-y-full hover:before:translate-y-0 before:transition-transform">
                      <span className="relative">Ver Más 👀</span>
                    </button>
                    <button onClick={() => addToCart(pizza)} className="btn overflow-hidden relative w-64 bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-orange-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-orange-200 hover:before:animate-ping transition-all duration-300">
                      <span className="relative">Añadir 🛒</span>
                    </button>

                  </div>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardHome;