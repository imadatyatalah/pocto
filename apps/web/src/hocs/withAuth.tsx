import { ComponentType, useEffect, useState } from "react";
import { useRouter } from "next/router";

import shallow from "zustand/shallow";

import useUser from "@/stores/useUser";
import Loading from "@/components/Loading";

const WithAuth = <P extends any>(WrappedComponent: ComponentType<P>) =>
  function WithAuthWrapper(props: any) {
    const [isLoggedInState, setIsLoggedInState] = useState(false);

    const { replace } = useRouter();

    const { user, logged_in } = useUser(
      ({ user, logged_in }) => ({ user, logged_in }),
      shallow
    );

    useEffect(() => {
      logged_in ? setIsLoggedInState(logged_in) : replace("/");
    }, [logged_in, replace]);

    return isLoggedInState ? (
      <WrappedComponent user={user} {...props} />
    ) : (
      <Loading />
    );
  };

export default WithAuth;
