import { Box, Flex, Grid, GridItem, VStack, Text } from "@chakra-ui/react";

type Card = {
  number: number;
  name: string;
}



export default function Rifa() {
  let cards2 = new Array<Card>();

  cards2.push({ number: 1, name: 'Gael' });
  cards2.push({ number: 2, name: 'Gael' });
  cards2.push({ number: 3, name: 'Gael' });
  cards2.push({ number: 4, name: 'Gael' });
  cards2.push({ number: 5, name: 'Gael' });
  cards2.push({ number: 6, name: 'Gael' });
  cards2.push({ number: 7, name: 'Gael' });
  cards2.push({ number: 8, name: 'Gael' });
  cards2.push({ number: 9, name: 'Gael' });
  cards2.push({ number: 10, name: 'Gael' });
  cards2.push({ number: 11, name: 'Gael' });
  cards2.push({ number: 12, name: 'Gael' });
  cards2.push({ number: 13, name: 'Gael' });
  cards2.push({ number: 14, name: 'Gael' });
  cards2.push({ number: 15, name: 'Gael' });
  cards2.push({ number: 16, name: 'Gael' });
  cards2.push({ number: 17, name: 'Gael' });
  cards2.push({ number: 18, name: 'Gael' });
  cards2.push({ number: 19, name: 'Gael' });
  cards2.push({ number: 20, name: 'Gael' });
  cards2.push({ number: 21, name: 'Gael' });
  cards2.push({ number: 22, name: 'Gael' });
  cards2.push({ number: 23, name: 'Gael' });
  cards2.push({ number: 24, name: 'Gael' });
  cards2.push({ number: 25, name: 'Gael' });
  cards2.push({ number: 26, name: 'Gael' });
  cards2.push({ number: 27, name: 'Gael' });
  cards2.push({ number: 28, name: 'Gael' });
  cards2.push({ number: 29, name: 'Gael' });
  cards2.push({ number: 30, name: 'Gael' });
  cards2.push({ number: 31, name: 'Gael' });
  cards2.push({ number: 32, name: 'Gael' });
  cards2.push({ number: 33, name: 'Gael' });
  cards2.push({ number: 34, name: 'Gael' });
  cards2.push({ number: 35, name: 'Gael' });
  cards2.push({ number: 36, name: 'Gael' });
  cards2.push({ number: 37, name: 'Gael' });
  cards2.push({ number: 38, name: 'Gael' });
  cards2.push({ number: 39, name: 'Gael' });
  cards2.push({ number: 40, name: 'Gael' });
  cards2.push({ number: 41, name: 'Gael' });
  cards2.push({ number: 42, name: 'Gael' });
  cards2.push({ number: 43, name: 'Gael' });
  cards2.push({ number: 44, name: 'Gael' });
  cards2.push({ number: 45, name: 'Gael' });
  cards2.push({ number: 46, name: 'Gael' });
  cards2.push({ number: 47, name: 'Gael' });
  cards2.push({ number: 48, name: 'Gael' });
  cards2.push({ number: 49, name: '' });
  cards2.push({ number: 50, name: '' });

  const cards = Array.from({length: 48}, (_, i) => i + 1)
  let cardsNumber = Array.from({length: 30}, (_, i) => i + 1)
  let countLine = 1;
  let countItens = 0;

  return (
    <>

    { 
       cards2.map(card => {
        countLine = 1;
        countItens = 0;

        return (
          
          <Box key={card.number}
            maxWidth={1000} 
            mx="auto" 
            border="1px"
            borderStyle='solid'
            w='1024px'
            h='708px'
          >
            <VStack>
              <Box>
                <Text fontSize="3xl" textAlign="center">RIFA</Text>
                <Text fontSize="sm" textAlign="center">
                  A Educação Infantil da Miguel Arcanjo Escola Waldorf sorteia um kit pedagógico.<br /> 					
                  O valor arrecadado será para compra dos brinquedos de madeira<br /> 					
                  da parte externa da Educação Infantil					  
                </Text>	
                <Text fontSize="sm" fontWeight="bold" textAlign="center" pt="1rem">				      
                  Sorteio: 10/09/22 (feito pelo site sorteador.com.br)					
                </Text>	
                <Text fontSize="sm" fontWeight="bold" textAlign="center">			      				
                  Valor: R$ 10,00  
                </Text>		
              </Box>

              <Box w="600px" pt="0.5rem">
                <Grid templateColumns='repeat(6, 1fr)' >
                  {  
                    cardsNumber.map(number => 
                      {
                        countItens++;

                        if (countItens === 6){
                          countItens = 0;
                          countLine++;

                          if (countLine === 6){
                            return (
                              <GridItem key={number} w='100%' h='75px' p="5px" borderTop='1px' borderLeft='1px' borderRight='1px' borderBottom='1px' borderStyle='solid'>
                                {card.number === 1 ? number : (30 * (card.number-1))+number}
                              </GridItem>
                            )
                          } else {
                            return (
                              <GridItem key={number} w='100%' h='75px' p="5px" borderTop='1px' borderLeft='1px' borderRight='1px' borderStyle='solid'>
                                {card.number === 1 ? number : (30 * (card.number-1))+number}
                              </GridItem>
                            )
                          }                          
                        } else if (countLine === 5) {
                          return (
                            <GridItem key={number} w='100%' h='75px' p="5px" borderTop='1px' borderLeft='1px' borderBottom='1px' borderStyle='solid'>
                              {card.number === 1 ? number : (30 * (card.number-1))+number}
                            </GridItem>
                          )
                        } else {
                          return (
                            <GridItem key={number} w='100%' h='75px' p="5px" borderTop='1px' borderLeft='1px' borderStyle='solid'>
                              {card.number === 1 ? number : (30 * (card.number-1))+number}
                            </GridItem>
                          )
                        }
                        
                      })  
                  }
                  
                </Grid>
              </Box>

              <Box>
                <Text fontSize="sm" textAlign="center">
                  Será sorteado 01 kit pedagógico contendo:<br /><br />
                  01 boneco articulado robô, 01 tábua de cortar frutas, 01 tábua de cortar legumes, <br />
                  01 tábua de corte e 01 dominó de bichos do bosque
                </Text>
                <Text fontSize="sm" textAlign="right" pt="1rem" pr="50px">
                  {
                  `Cartela ${card.number}/${cards2.length} - Responsável: ${card.name}` 
                  }
                </Text>
              </Box>
            </VStack>
          </Box>
       )
      })
    }
 
    </>
  )
}