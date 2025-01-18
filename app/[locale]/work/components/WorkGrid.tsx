import { Container, Grid, GridItem } from "@yamada-ui/react";
import Image from "next/image";

type Work = {
  title: string;
  thumbnail: string;
};

export default async function WorkGrid() {
  const response = await fetch("http://localhost:3000/api/data");
  const data: Work[] = await response.json();

  return (
    <Container height={"90vh"}>
      <Grid
        width={"1200px"}
        maxWidth={"80vw"}
        templateColumns="repeat(auto-fit, minmax(340px, 1fr))"
        gap="8px"
      >
        {data.map(({ title, thumbnail }) => (
          <GridItem key={title} height={"280px"} position="relative">
            <Image
              src={thumbnail}
              alt={title}
              priority
              fill={true}
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}
