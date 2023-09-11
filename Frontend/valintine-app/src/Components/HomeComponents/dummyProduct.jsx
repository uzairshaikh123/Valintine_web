import React from 'react'
import './dummy.css'
const DummyProduct = ({id,image,name,price,ratings=0}) => {
  return (
    <div>
        <div class="react-multi-carousel-list  ">
    <ul class="react-multi-carousel-track  style-QzB8b" id="style-QzB8b">
      <li data-index="0" aria-hidden="false" class="react-multi-carousel-item react-multi-carousel-item--active  style-neOfX" id="style-neOfX">
        <a href={`/products/${id}`}>
          <div style={{minWidth:"300px",maxWidth:"300px"}} class="_product-card-small scale-on-hover material-shadow-card-light">
            <div class="square-image">
              <div id="style-Vo739" class="style-Vo739">
                <img alt={name} src={image} decoding="async" data-nimg="fill" id="style-yhDKw" class="style-yhDKw" />
                <noscript>
                </noscript>
              </div>
            </div>
            <div class="_product-card-small-footer">
              <p class="_product-card-small-name">
                {name}
              </p>
              <div class="_product-card-small-footer-price-review-container">
                <div>
                  <span class="_product-card-small-price-discount">
                    ₹{price}
                  </span>
                  <span class="_product-card-small-price">
                    ₹{price}
                  </span>
                </div>
                <span class="_rating-with-thumbs-up-component style-Gi6iP" id="style-Gi6iP">
                  <span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z">
                      </path>
                    </svg>
                  </span>
                  <span>
                    {ratings}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </a>
        <div class="_wishlist-icon-container false">
          <button>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="wishlist-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z">
              </path>
            </svg>
          </button>
        </div>
      </li>
      </ul>
            </div>
    </div>
  )
}

export default DummyProduct


// 'use client'

// import {
//   Flex,
//   Circle,
//   Box,
//   Image,
//   Badge,
//   useColorModeValue,
//   Icon,
//   chakra,
//   Tooltip,
// } from '@chakra-ui/react'
// import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
// import { FiShoppingCart } from 'react-icons/fi'

// const data = {
//   isNew: true,
//   imageURL:
//     'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
//   name: 'Wayfarer Classic',
//   price: 4.5,
//   rating: 4.2,
//   numReviews: 34,
// }


// function Rating({ rating, numReviews }) {
//   return (
//     <Box display="flex" alignItems="center">
//       {Array(5)
//         .fill('')
//         .map((_, i) => {
//           const roundedRating = Math.round(rating * 2) / 2
//           if (roundedRating - i >= 1) {
//             return (
//               <BsStarFill
//                 key={i}
//                 style={{ marginLeft: '1' }}
//                 color={i < rating ? 'teal.500' : 'gray.300'}
//               />
//             )
//           }
//           if (roundedRating - i === 0.5) {
//             return <BsStarHalf key={i} style={{ marginLeft: '1' }} />
//           }
//           return <BsStar key={i} style={{ marginLeft: '1' }} />
//         })}
//       <Box as="span" ml="2" color="gray.600" fontSize="sm">
//         {numReviews} review{numReviews > 1 && 's'}
//       </Box>
//     </Box>
//   )
// }

// function DummyProduct({id,image,name,price,ratings=0}) {
//   return (
//     <Flex p={50} w="full" alignItems="center" justifyContent="center">
//       <Box
//         bg={useColorModeValue('white', 'gray.800')}
//         maxW="sm"
//         borderWidth="1px"
//         rounded="lg"
//         key={id}
//         shadow="lg"
//         position="relative">
//         {data.isNew && (
//           <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
//         )}

//         <Image src={image} alt={`Picture of ${data.name}`} roundedTop="lg" />

//         <Box p="6">
//           <Box display="flex" alignItems="baseline">
//             {data.isNew && (
//               <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
//                 New
//               </Badge>
//             )}
//           </Box>
//           <Flex mt="1" justifyContent="space-between" alignContent="center">
//             <Box
//               fontSize="2xl"
//               fontWeight="semibold"
//               as="h4"
//               lineHeight="tight"
//               isTruncated>
//               {name}
//             </Box>
//             <Tooltip
//               label="Add to cart"
//               bg="white"
//               placement={'top'}
//               color={'gray.800'}
//               fontSize={'1.2em'}>
//               <chakra.a href={'#'} display={'flex'}>
//                 <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
//               </chakra.a>
//             </Tooltip>
//           </Flex>

//           <Flex justifyContent="space-between" alignContent="center">
//             <Rating rating={data.rating} numReviews={data.numReviews} />
//             <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
//               <Box as="span" color={'gray.600'} fontSize="lg">
               
//               </Box>
//               {price}
//             </Box>
//           </Flex>
//         </Box>
//       </Box>
//     </Flex>
//   )
// }

// export default DummyProduct