import {
  Card,
  CardBody,
  Flex,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import styles from "./categoryCard.module.scss";
import React from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import CategoryEditModal from "../CategoryEditModal/CategoryEditModal";
import CategoryDeleteModal from "../CategoryDeleteModal/CategoryDeleteModal";

export default function CategoryCard({ id, name, getCategories }) {
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
        <CategoryEditModal
          getCategories={getCategories}
          id={id}
          isOpen={isEditOpen}
          onClose={onEditClose}
        />
      )}
      {isDeleteOpen && (
        <CategoryDeleteModal
          getCategories={getCategories}
          id={id}
          isOpen={isDeleteOpen}
          onClose={onDeleteClose}
        />
      )}
      <Card className={styles.card}>
        <CardBody>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Text fontWeight={"bold"}>{name}</Text>
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
