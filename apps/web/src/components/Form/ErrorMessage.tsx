import { ErrorMessage, Props } from "@hookform/error-message";
import { styled } from "@pocto/core/stitches.config";

const StyledErrorMessage = styled("p", {
  color: "Red",
});

/**
 * This components created to prevent repeating `render` prop on each form.
 */
const ErrorMessageComponent = (props: Props<any, any>) => {
  return (
    <ErrorMessage
      render={({ message }) => (
        <StyledErrorMessage>{message}</StyledErrorMessage>
      )}
      {...props}
    />
  );
};

export default ErrorMessageComponent;
