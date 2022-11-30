import { Box, Button, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Display } from "../../Components/Modal/Display";
import { getCapsulesData } from "../../Redux/DataReducer/action";

export const Capsules = () => {
  const data = useSelector((store) => store.DataReducer.data);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setVlaue] = useState();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  console.log("page",page)
  useEffect(() => {
    dispatch(getCapsulesData(page));
  }, [dispatch,page]);

  console.log("data",data)
  return (
    <>
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      // marginTop= "500px"
      spacing={6} 
      m={0}
    >
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
            <Image
              w="100%"
              h="60%"
              src="https://th-thumbnailer.cdn-si-edu.com/j2EFfThImc8HQ_Idhy-DrLG8g5s=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/c7/b9/c7b9e461-84fb-47b7-8d59-48442e20bb8a/34i_dj2019_spacexdragonart_live.jpg"
              alt="error_image"
            />
            <p>{e.capsule_id}</p>
            <p>{e.details}</p>
            <p>{e.status}</p>
            <Button
              onClick={() => {
                setIsOpen(true);
                // console.log("id", e);
                setVlaue(e);
              }}
            >
              Details
            </Button>
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
   
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      m={0}
    >
      <Button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          prev
        </Button>

        <Button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </Button>
    </Flex>
    </>
  );
};
