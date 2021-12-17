import { Flex, Heading } from "ui";

const Loading = () => {
  return (
    <Flex
      css={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        <Heading as="h1" size="3xl" css={{ fontWeight: "700" }}>
          Loading...
        </Heading>
      </div>
    </Flex>
  );
};

export default Loading;
