import React, { useEffect, useState } from "react";
import styles from "./categoryAddModal.module.scss";
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
import { postCategory } from "../../services/categoryService";

export default function CategoryAddModal({ isOpen, onClose, getCategories }) {
  const [input, setInput] = useState("");
  const toast = useToast();

  const handleSaveBtnClick = async () => {
    if (input.length < 3) return;
    const body = {
      name: input,
    };

    try {
      let resp = await postCategory(body)
     
      if (resp.status == 200) {
        toast({
          title: "Category created.",
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

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create category</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Category name</FormLabel>
              <Input
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
