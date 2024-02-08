import React from "react";
import styles from "./productCard.module.scss";
import { Card, CardBody, Flex, Text, Stack, useDisclosure, } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import ProductEditModal from "../ProductEditModal/ProductEditModal";
import ProductDeleteModal from "../ProductDeleteModal/ProductDeleteModal";

export default function ProductCard({ id, name, categoryName, getProducts }) {
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  return (
    <>
      {isEditOpen && (
        <ProductEditModal
          getProducts={getProducts}
          id={id}
          isOpen={isEditOpen}
          onClose={onEditClose}
        />
      )}
      {isDeleteOpen && (
        <ProductDeleteModal
          getProducts={getProducts}
          id={id}
          isOpen={isDeleteOpen}
          onClose={onDeleteClose}
        />
      )}
      <Card className={styles.card}>
        <CardBody>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Flex flexDirection={'column'}>
              <Text fontWeight={"bold"}>{name}</Text>
              <Text fontWeight={"bold"}>Category: {categoryName}</Text>
            </Flex>
            <Stack flexDirection={"row"}>
              <DeleteIcon
                onClick={onDeleteOpen}
                _hover={{ cursor: "pointer" }}
                color={"red"}
              />
              <EditIcon
                onClick={onEditOpen}
                _hover={{ cursor: "pointer" }}
                color={"yellow"}
              />
            </Stack>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
}
