import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getCapsulesData } from "../../Redux/DataReducer/action";

export const Capsules = () => {
  const data = useSelector((store) => store.DataReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCapsulesData());
  }, []);
  console.log("data", data);
  console.log("data", data);
  return (
    // <Container.Wrapper>

    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
      {/* {imgs.map((img, index) => <Card key={index} img={img}/>)} */}
      {data?.length > 0 &&
        data.map((e) => (
          <Box key={e.id} w="400px" h="400px" m={"auto"} border="1px solid red">
          <Image src="https://th-thumbnailer.cdn-si-edu.com/j2EFfThImc8HQ_Idhy-DrLG8g5s=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/c7/b9/c7b9e461-84fb-47b7-8d59-48442e20bb8a/34i_dj2019_spacexdragonart_live.jpg" alt="error_image"/>
            <p>{e.capsule_id}</p>
            <p>{e.details}</p>
            <p>{e.capsule_id}</p>
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
