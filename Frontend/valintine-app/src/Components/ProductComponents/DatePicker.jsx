import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "./DatePicker.css"
import "react-datepicker/dist/react-datepicker.css";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Box, Select, Text, Radio, useDisclosure, Image } from "@chakra-ui/react";
import AddonsCard from "./AddonsCard";
import { useNavigate } from "react-router-dom";
export const DatePickerComp = ({ isDatePickerEnabled, product, showDatePicker, handleByNow,update,handleaddtocart }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isSlotModalOpen, setIsSlotModalOpen] = useState(false);
  const navigate = useNavigate()
  const [selectedSlotText, setSelectedSlotText] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure()
  let selectDate=`${startDate.getDate()}-${startDate.getMonth()+1}-${startDate.getFullYear()}`
  let obj={
    date:selectDate,
  }
  const closeSlotModal = () => {
    setIsSlotModalOpen(false);
  };
  const openSlotModal = () => {
    setIsSlotModalOpen(true);
  };
  const handleSlotSelection = (slot) => {
    obj.slot=slot
    setSelectedSlot(slot)
    sessionStorage.setItem("slotedate",JSON.stringify(obj))
  };

  const formatTimeSlot = (slot) => {
    if (!slot || !slot.starttime || !slot.endtime) {
      return "Invalid time slot";
    }

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
  
  const handleAddToCart=()=>{
   
  }
  useEffect(() => {
    if (showDatePicker) {
      onOpen()
    }
    console.log(showDatePicker)
    obj.date=selectDate
  }, [update])

  const handleDateChange = (date) => {
    setStartDate(date);
    handleByNow()
  };
  return (
    <>
      <DatePicker
        selected={startDate}
        // onChange={(date) => handledate(date)}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        withPortal
        minDate={Date.now()}
        disabled={product[0]?.category !== "candlelight dinner" && !isDatePickerEnabled}
        className={product[0]?.category !== "candlelight dinner" && !isDatePickerEnabled ? "disabled-date-picker" : ""}
      />
      {showDatePicker && <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Slot</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box >
              {
                product[0]?.slots?.map((slot, index) => (
                  <Box key={index} className={`${selectedSlot === slot?"radiobgcolor":""} slotBox`} onClick={() => handleSlotSelection(slot)}>
                    <Radio  
                     size='md' 
                     isChecked={selectedSlot === slot}
                     colorScheme="rgb(255, 65, 139)"
                     >
                    <Text ml={"20px"}>{formatTimeSlot(slot)}</Text>
                    </Radio>
                  </Box>
                ))
              }
            </Box>
          </ModalBody>
          <ModalFooter>
            
            <Button colorScheme="blue" onClick={()=>{
              onClose();
              handleaddtocart()
              navigate("/cart")
            }}>Book Now</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>}

      {/* <Modal isOpen={isSlotModalOpen} onClose={closeSlotModal} isCentered>
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
      </Modal> */}
    </>
  );
};