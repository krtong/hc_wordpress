import React from "react"
import { Heading, Box, Grid } from "@chakra-ui/core"
import { Link } from "gatsby"

export default () => (
  <Heading as="h1">
    <Link to="/">
      <Grid gridTemplateColumns="50px 1fr" gridGap="20px">
        <Box maxW={50}>
         
        </Box>
        <span>
          Honey & Comb Salon
        </span>
      </Grid>
    </Link>
  </Heading>
)
