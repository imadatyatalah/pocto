import type { NextPage } from "next";

import { Button, Heading } from "ui";

const Home: NextPage = () => {
  return (
    <section>
      <Heading as="h1">Blog</Heading>

      <Button>Click me</Button>
    </section>
  );
};

export default Home;
