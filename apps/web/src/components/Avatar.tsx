import { styled } from "@pocto/core/stitches.config";

const StyledAvatar = styled("img", {
  rounded: "100%",
});

const Avatar = () => {
  return (
    <StyledAvatar
      // Uploading profile images still not done!
      src="https://avatars.githubusercontent.com/u/70093484?s=400&u=3ca81f91aeb92005a4b5bb3bac464ac9a2493bf8&v=4"
      alt=""
    />
  );
};

export default Avatar;
