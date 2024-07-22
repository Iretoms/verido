import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

export interface DeleteAlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  headerText: string;
  bodyText: string;
}
export const DeleteAlertDialog = (props: DeleteAlertDialogProps) => {
  const cancelRef = React.useRef(null);

  const { isOpen, onClose, onDelete, headerText, bodyText } = props;
  return (
    <>
      <AlertDialog
        isCentered
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {headerText}
            </AlertDialogHeader>

            <AlertDialogBody>{bodyText}</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
