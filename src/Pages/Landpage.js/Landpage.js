import { Box, Button, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {getRocketData } from "../../Redux/DataReducer/action";

export const Landpage = () => {
const data = useSelector((store)=>store.DataReducer.data);
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketData())
  }, []);
  console.log("data",data);
  return (
     <Container.Weapper >
       {data.map((e,index) => (
         <Box key={index} >
           <Image
           w="100%" h="100%"
             src={e.flickr_images[0]}
             alt="image_error"
           />
 <Button>See More</Button>
         </Box>
       ))}
     </Container.Weapper>
  );
};

const Container ={
  Weapper:styled.div`
  background-image: url("https:www.egypttoday.com/siteimages/Larg/40217.jpg");
  position: relative;
  `
}
