import { useState } from "react";
import { MdClose, MdLocationOn } from "react-icons/md";

const ProductCard = ({ product }: any) => {
  const truncatedDescription =
    product.description.length > 200
      ? product.description.slice(0, 200) + "..."
      : product.description;

  return (
    <div className="max-w-sm h-[650px] bg-white border border-gray-200 rounded-lg shadow relative">
      <img className="rounded-t-lg" src={product.image} alt="Product" />
      <div className="p-5 pb-12">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {product.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700">{truncatedDescription}</p>
        <span className="flex mb-3 items-center">
          <MdLocationOn size={20} className="me-2" />
          <p className="font-normal text-gray-700">{product.location}</p>
        </span>
        <div className="absolute bottom-5 left-0 right-0 px-3">
          <button
            type="button"
            className="w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
          >
            Comprar por {product.price} cUSD
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [products, setProducts] = useState([
    {
      name: "Giant BBQ",
      image: "https://i.imgur.com/yPreV19.png",
      description: `Grilled chicken, beef, fish, sausages, bacon, 
        vegetables served with chips.`,
      location: "Kimironko Market",
      owner: "0x32Be343B94f860124dC4fEe278FDCBD38C102D88",
      price: 3,
      sold: 27,
      index: 0,
    },
    {
      name: "BBQ Chicken",
      image: "https://i.imgur.com/NMEzoYb.png",
      description: `French fries and grilled chicken served with gacumbari 
        and avocados with cheese.`,
      location: "Afrika Fresh KG 541 St",
      owner: "0x3275B7F400cCdeBeDaf0D8A9a7C8C1aBE2d747Ea",
      price: 4,
      sold: 12,
      index: 1,
    },
    {
      name: "Beef burrito",
      image: "https://i.imgur.com/RNlv3S6.png",
      description: `Homemade tortilla with your choice of filling, cheese, guacamole salsa with Mexican refried beans and rice.Homemad beans and rice.Homemad beans ad beans and rice.Homemad beans and rice.Homemand rice.Homemad beans and rice.Homemad beans and rice.Homemade tortilla with your choice of filling, cheese, guacamole salsa with Mexican of filling, cheese, guacamole salsa with Mexican.`,
      location: "Asili - KN 4 St",
      owner: "0x2EF48F32eB0AEB90778A2170a0558A941b72BFFb",
      price: 2,
      sold: 35,
      index: 2,
    },
    {
      name: "Barbecue Pizza",
      image: "https://i.imgur.com/fpiDeFd.png",
      description: `Barbecue Chicken Pizza: Chicken, gouda, pineapple, onions 
        and house-made BBQ sauce.`,
      location: "Kigali Hut KG 7 Ave",
      owner: "0x2EF48F32eB0AEB90778A2170a0558A941b72BFFb",
      price: 1,
      sold: 2,
      index: 3,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    image: "",
    description: "",
    location: "",
    price: 0,
    sold: 0,
    owner: "",
    index: products.length,
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewProduct({
      name: "",
      image: "",
      description: "",
      location: "",
      price: 0,
      sold: 0,
      owner: "",
      index: products.length + 1,
    });
  };

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setNewProduct({
      ...newProduct,
      [id]: value,
    });
  };

  const addProduct = () => {
    setProducts([...products, newProduct]);
    closeModal();
  };

  return (
    <div className="w-full h-full">
      <nav className="bg-white p-5 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Street Food Kigali</h1>
        </div>
        <div>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={openModal}
          >
            Adicionar produto
          </button>
        </div>
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="modal-dialog">
            <div className="bg-white rounded-lg px-8 pt-6 pb-2 w-96">
              <div className="flex justify-between items-center mb-4">
                <h5 className="font-bold" id="newProductModalLabel">
                  Novo produto
                </h5>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <MdClose size={20} />
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="py-3 grid grid-cols-1 gap-2">
                    <input
                      type="text"
                      id="name"
                      value={newProduct.name}
                      onChange={handleInputChange}
                      className="form-control mb-2 p-2 border"
                      placeholder="Insira o nome do produto"
                    />
                    <input
                      type="text"
                      id="image"
                      value={newProduct.image}
                      onChange={handleInputChange}
                      className="form-control mb-2 p-2 border"
                      placeholder="Insira a URL da imagem do produto"
                    />
                    <input
                      type="text"
                      id="description"
                      value={newProduct.description}
                      onChange={handleInputChange}
                      className="form-control mb-2 p-2 border"
                      placeholder="Insira a descrição do produto"
                    />
                    <input
                      type="text"
                      id="location"
                      value={newProduct.location}
                      onChange={handleInputChange}
                      className="form-control mb-2 p-2 border"
                      placeholder="Insira a localização"
                    />
                    <input
                      type="number"
                      id="price"
                      value={newProduct.price}
                      onChange={handleInputChange}
                      className="form-control mb-2 p-2 border"
                      placeholder="Insira o preço"
                    />
                  </div>
                </form>
              </div>
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                  onClick={closeModal}
                >
                  Fechar
                </button>
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                  onClick={addProduct}
                >
                  Adicionar produto
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-full h-full flex justify-center">
        <div className="mx-auto md:px-20 lg:px-40 px-4 mt-8 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} openModal={openModal} />
          ))}
        </div>
      </div>
    </div>
  );
}
