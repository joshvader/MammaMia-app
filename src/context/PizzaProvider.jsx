import { createContext, useEffect, useState } from "react";

export const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    fetchPizzas();
  }, []);

  // Obtener las pizzas
  const fetchPizzas = async () => {
    try {
      const response = await fetch("./pizzas.json");
      const res = await response.json();
      const newData = res.map((pizza) => ({ ...pizza, count: 0 }));
      setPizzas(newData);
      console.log(newData);
    } catch (error) {
      console.error("Error fetching pizzas:", error);
    }
  };

  const addToCart = ({ id, price, name, img }) => {
    const productoEcontradoIndex = carrito.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    if (productoEcontradoIndex >= 0) {
      carrito[productoEcontradoIndex].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const total = carrito.reduce((a, { count, price }) => a + price * count, 0);

  const increment = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };

  const decrement = (i) => {
    const { count } = carrito[i];
    if (count === 1) {
      carrito.splice(i, 1); // Cambié 2 a 1 aquí para eliminar solo un elemento
    } else {
      carrito[i].count--;
    }
    setCarrito([...carrito]);
  };

  const formatToCLP = (price) => {
    return price?.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
    });
  };

  return (
    <PizzasContext.Provider
      value={{
        pizzas,
        carrito,
        setCarrito,
        addToCart,
        total,
        increment,
        decrement,
        formatToCLP,
      }}
    >
      {children}
    </PizzasContext.Provider>
  );
};

export default PizzasProvider;