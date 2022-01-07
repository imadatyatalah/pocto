import { ComponentType, useEffect, useState } from "react";
import { useRouter } from "next/router";

import shallow from "zustand/shallow";

import useUser from "@/stores/useUser";
import Loading from "@/components/Loading";

const WithAuth = <P extends any>(WrappedComponent: ComponentType<P>) =>
  function WithAuthWrapper(props: any) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const { replace } = useRouter();

    const { user, logged_in } = useUser(
      ({ user, logged_in }) => ({ user, logged_in }),
      shallow
    );

    useEffect(() => {
      setIsLoggedIn(logged_in);

      !logged_in && replace("/signin");
    }, [logged_in, replace]);

    return isLoggedIn ? (
      <WrappedComponent user={user} {...props} />
    ) : (
      <Loading />
    );
  };

export default WithAuth;
