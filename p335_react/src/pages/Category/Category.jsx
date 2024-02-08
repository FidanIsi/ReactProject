import React, { useEffect, useState } from "react";
import styles from "./category.module.scss";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import CategoryAddModal from "../../components/CategoryAddModal/CategoryAddModal";
import { getAllCategories } from "../../services/categoryService";

export default function Category() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      let resp = await getAllCategories();
      setCategories(resp.data);
    } catch (error) {
      console.log(error);
      setCategories([]);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className={styles.container}>
      <Flex>
        <Button onClick={onOpen} colorScheme="green">
          Add
        </Button>
        {isOpen && (
          <CategoryAddModal
            getCategories={getCategories}
            isOpen={isOpen}
            onClose={onClose}
          />
        )}
      </Flex>
      <Flex marginTop={"15px"} gap={"15px"}>
        {categories?.map((x) => {
          return <CategoryCard getCategories={getCategories} key={x.id} id={x.id} name={x.name} />;
        })}
      </Flex>
    </div>
  );
}
