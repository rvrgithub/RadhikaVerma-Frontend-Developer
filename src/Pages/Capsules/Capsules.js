import { Box, Button, Image, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Display } from "../../Components/Modal/Display";
import { getCapsulesData } from "../../Redux/DataReducer/action";

export const Capsules = () => {
  const data = useSelector((store) => store.DataReducer.data);
  const [isOpen, setIsOpen] = useState(false);
  const [value ,setVlaue] =useState()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCapsulesData());
  }, []);
//   console.log("data", data);
  return (
    // <Container.Wrapper>

    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
      {/* {imgs.map((img, index) => <Card key={index} img={img}/>)} */}
      {data?.length > 0 &&
        data.map((e) => (
          <Box
            key={e.id}
            w="380px"
            h="400px"
            m={"auto"}
            borderRadius="10px"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          >
            <Image  w="100%"
            h="60%"
              src="https://th-thumbnailer.cdn-si-edu.com/j2EFfThImc8HQ_Idhy-DrLG8g5s=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/c7/b9/c7b9e461-84fb-47b7-8d59-48442e20bb8a/34i_dj2019_spacexdragonart_live.jpg"
              alt="error_image"
            />
            <p>{e.capsule_id}</p>
            <p>{e.details}</p>
            <p>{e.status}</p>
            <Button onClick={() => {
                  setIsOpen(true);
                  console.log("id", e);
            setVlaue(e)
                }}>Details</Button>
                <Display
              data={value}
                open={isOpen}
                onClose={() => {
                  setIsOpen(false);
                }} 
              />
          </Box>
        ))}
    </SimpleGrid>
    // </Container.Wrapper>
  );
};

// const Container = {
//   Wrapper: styled.div`
//     width: 100%;
//     border: 10px solid red;
//   `,
// };
