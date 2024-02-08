import React, { useEffect, useState } from "react";
import styles from './ProductEditModal.module.scss'
import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  FormLabel,
  ModalFooter,
  useToast,
  Select,
} from "@chakra-ui/react";
import { getAllCategories } from "../../services/categoryService";
import { getProductById, editProduct } from "../../services/productService";

export default function ProductEditModal({ id, isOpen, onClose, getProducts }) {
  const [input, setInput] = useState({});
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState(null);
  const toast = useToast();

  useEffect(() => {
    getAllCategories()
      .then((res) => setCategories(res.data))
      .catch((e) => console.log(e));

    if (isOpen) {
      getProductById(id)
        .then((res) => setProduct(res.data))
        .catch((e) => console.log(e));
    }
  }, [id, isOpen]);

  useEffect(() => {
    if (product) {
      setInput({ name: product.name, categoryId: product.categoryId });
    }
  }, [product]);

  const handleSaveBtnClick = async () => {
    if (!(input.name && input.categoryId)) return;
    editProduct(id, input)
      .then((res) => {
        if (res.status !== 200) throw new Error();
        toast({
          title: "Product edited.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        getProducts();
        onClose();
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Product name</FormLabel>
              <Input
                onChange={(e) =>
                  setInput({ ...input, name: e.target.value.trim() })
                }
                value={input.name || ''}
                placeholder="Enter name"
              />
            </FormControl>
            <FormControl marginTop={"15px"}>
              <FormLabel>Category</FormLabel>
              <Select
                onChange={(e) =>
                  setInput({ ...input, categoryId: e.target.value })
                }
                value={input.categoryId || ''}
              >
                <option disabled>Select category</option>
                {categories?.map((x) => (
                  <option key={x.id} value={x.id}>
                    {x.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSaveBtnClick} colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
