import React, { useEffect, useState } from "react";
import styles from "./product.module.scss";
import { getAllProducts } from "../../services/productService";
import { Flex, Button, useDisclosure } from "@chakra-ui/react";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductAddModal from "../../components/ProductAddModal/ProductAddModal";

export default function Product() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      let resp = await getAllProducts();
      setProducts(resp.data);
    } catch (error) {
      console.log(error);
      setProducts([]);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.container}>
      <Flex>
        <Button
          onClick={onOpen}
          colorScheme="green"
        >
          Add
        </Button>
        {isOpen && (
          <ProductAddModal
            getProducts={getProducts}
            isOpen={isOpen}
            onClose={onClose}
          />
        )}
      </Flex>
      <Flex marginTop={"15px"} gap={"15px"}>
        {products?.map((x) => {
          return (
            <ProductCard
              key={x.id}
              id={x.id}
              name={x.name}
              categoryName={x.categoryName}
              getProducts={getProducts}
            />
          );
        })}
      </Flex>
    </div>
  );
}
