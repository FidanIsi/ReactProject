import React, { useEffect, useState } from "react";
import styles from "./categoryDeleteModal.module.scss";
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
  Heading,
} from "@chakra-ui/react";
import { deleteCategory } from "../../services/categoryService";

export default function CategoryDeleteModal({
  isOpen,
  onClose,
  getCategories,
  id,
}) {
  const toast = useToast();

  const handleDeleteBtnClick = async () => {
    let resp = await deleteCategory(id);
    if (resp.status == 200) {
      toast({
        title: "Category deleted.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      getCategories();
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
            <Heading>Are you sure?</Heading>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleDeleteBtnClick} colorScheme="red" mr={3}>
              Yes
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
