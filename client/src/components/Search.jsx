import React, { useState } from 'react';
import {
  VStack,
  Heading,
  Input,
  HStack,
  Button,
  Spinner,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';

const Search = () => {
  const [scrapedArr, setScrapedArr] = useState([]);
  const [value, setValue] = useState('');
  const [displaytable, setDisplaytable] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = e => {
    setDisplaytable(false);
    setValue(e.target.value);
  };
  const submitProductName = () => {
    setLoading(true);
    fetch('https://sanskarmodi.python/result', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productName: value }),
    })
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setDisplaytable(true);
        setScrapedArr(data);
        console.log(data);
      })

      .catch(error => {
        console.log(error);
      });
  };

  return (
    <VStack
      bgGradient="linear(to-r, darkcyan 50%, mediumpurple 50%)"
      opacity={loading ? '0.7' : '1'}
      w={'100vw'}
      minH={'100vh'}
      display={'flex'}
    >
      {loading ? (
        <Spinner mt={'50vh'} color="white" size="xl" />
      ) : (
        <>
          <Heading
            py={'100px'}
            h={'fit-content'}
            fontSize={'4xl'}
            display={'flex'}
          >
            Flipkart Product Reviews Web Scraper
          </Heading>

          <HStack display={'flex'} pb={'100px'}>
            <Input
              type="text"
              name="content"
              id="content"
              value={value}
              onChange={handleChange}
              color={'white'}
              focusBorderColor="white"
              _placeholder={{ opacity: 0.5, color: 'inherit' }}
              display={'flex'}
              w={'fit-content'}
              fontWeight={'semibold'}
              placeholder="Search your product"
            />

            <Button
              onClick={submitProductName}
              type="submit"
              opacity={'0.9'}
              _hover={{ bgColor: 'darkcyan', color: 'white' }}
              variant={'solid'}
              bgColor={'white'}
              color={'darkcyan'}
              fontWeight={'bold'}
            >
              Go
            </Button>
          </HStack>
          <TableContainer
            bgColor={'mediumpurple'}
            mb={'100px'}
            borderRadius={'64px'}
            p={'50px'}
            display={displaytable ? 'inherit' : 'none'}
            w={'80vw'}
            h={'fit-content'}
          >
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th color={'white'} fontWeight={'semibold'} fontSize={'18px'}>
                    Product
                  </Th>
                  <Th color={'white'} fontWeight={'semibold'} fontSize={'18px'}>
                    Customer Name
                  </Th>
                  <Th color={'white'} fontWeight={'semibold'} fontSize={'18px'}>
                    Rating
                  </Th>
                  <Th color={'white'} fontWeight={'semibold'} fontSize={'18px'}>
                    Comment Heading
                  </Th>
                  <Th color={'white'} fontWeight={'semibold'} fontSize={'18px'}>
                    Comment Message
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {scrapedArr.map((review, index) => (
                  <Tr>
                    <Td borderRadius={'10px 0 0 10px'}>{`${value}`}</Td>
                    <Td>{review['Customer Name']}</Td>
                    <Td>{review['Rating']}</Td>
                    <Td>{review['Comment Heading']}</Td>
                    <Td borderRadius={'0 10px 10px 0'}>
                      {review['Comment Message']}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </>
      )}
    </VStack>
  );
};

export default Search;
