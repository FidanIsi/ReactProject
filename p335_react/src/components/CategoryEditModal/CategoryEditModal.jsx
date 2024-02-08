import React, { useEffect, useState } from "react";
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
} from "@chakra-ui/react";
import { editCategory } from "../../services/categoryService";

export default function CategoryEditModal({
  id,
  isOpen,
  onClose,
  getCategories,
}) {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState(null);
  const toast = useToast();

  const handleSaveBtnClick = async () => {
    if (input.length < 3) return;
    const body = {
      name: input,
    };

    try {
      let resp = await editCategory(id, body)
      if (resp.status == 200) {
        toast({
          title: "Category updated.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        getCategories();
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async () => {
    try {
      let resp = await fetch(`https://localhost:7126/api/category/${id}`);
      let data = await resp.json();
      setCategory(data);
    } catch (error) {
      console.log(error);
      setCategory(null);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit category</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Category name</FormLabel>
              <Input
                defaultValue={category?.name}
                onChange={(e) => setInput(e.target.value.trim())}
                placeholder="Enter name"
              />
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
