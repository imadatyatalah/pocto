import { Flex, Heading } from "ui";

const Loading = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      css={{ minHeight: "100vh" }}
    >
      <div>
        <Heading size="3xl" css={{ fontWeight: "700" }}>
          Loading...
        </Heading>
      </div>
    </Flex>
  );
};

export default Loading;
