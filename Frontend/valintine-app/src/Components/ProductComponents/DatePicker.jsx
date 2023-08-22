import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./DatePicker.css"
import "react-datepicker/dist/react-datepicker.css";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Box, Select, Text, Radio, useDisclosure, Image } from "@chakra-ui/react";
import AddonsCard from "./AddonsCard";
export const DatePickerComp = ({ isDatePickerEnabled, product }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isSlotModalOpen, setIsSlotModalOpen] = useState(false);
  const [selectedSlotText, setSelectedSlotText] = useState("");
  // const [selectedSlot, setSelectedSlot] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const handledate = (date) => {
  //   setStartDate(date);
  //   setIsModalOpen(true);
  // }
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  const closeSlotModal = () => {
    setIsSlotModalOpen(false);
  };

  const openSlotModal = () => {
    setIsSlotModalOpen(true);
  };
  const handleSlotSelection = () => {
    setSelectedSlotText();
    openSlotModal();
  };

  const formatTimeSlot = (slot) => {
    const startTimeComponents = slot.starttime.split(":");
    const startHour = startTimeComponents[0].padStart(2, "0");
    const startMinutes = startTimeComponents[1] || "00";
    const startTime = `${startHour}:${startMinutes} ${slot.starttime_words}`;

    const endTimeComponents = slot.endtime.split(":");
    const endHour = endTimeComponents[0].padStart(2, "0");
    const endMinutes = endTimeComponents[1] || "00";
    const endTime = `${endHour}:${endMinutes} ${slot.endtime_words}`;

    return `${startTime} to ${endTime}`;
  };

  return (
    <>
      <DatePicker
        selected={startDate}
        // onChange={(date) => handledate(date)}
        onChange={onOpen}
        dateFormat="dd/MM/yyyy"
        withPortal
        minDate={Date.now()}
        disabled={!isDatePickerEnabled}
        className={isDatePickerEnabled ? "" : "disabled-date-picker"}
      />
      {/* <Modal isOpen={isModalOpen} onClose={closeModal} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Slot</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="modal-scrollable-content">
           
            <Box >
              {
                product[0]?.slots?.map((slot,index)=>(
                  <Box key={index} className="slotBox">
                    <Text fontSize='lg'>{formatTimeSlot(slot)}</Text>
                    <Radio size='md'></Radio>
                  </Box>
                ))
              }
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal> */}
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Slot</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box >
              {
                product[0]?.slots?.map((slot, index) => (
                  <Box key={index} className="slotBox" onClick={(e) => handleSlotSelection()}>
                    <Text fontSize='lg'>{formatTimeSlot(slot)}</Text>
                    <Radio size='md'></Radio>
                  </Box>
                ))
              }
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isSlotModalOpen} onClose={closeSlotModal} isCentered>
        <ModalOverlay />
        <ModalContent maxW="500px">
          <ModalHeader>Select customizations</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <div className="addons-singleproduct" style={{display:"flex",flexDirection:"column",border:"none"}}>
              {product[0]?.addons?.map((el) => {
                return <AddonsCard img={el.img} name={el.name} price={el.price} desc={el.desc} />
              })}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closeSlotModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};