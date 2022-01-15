//! Not used anymore!

import { ComponentType, useEffect, useState } from "react";
import { useRouter } from "next/router";

import shallow from "zustand/shallow";

import useUser from "@/stores/useUser";
import Loading from "@/components/Loading";

const WithAuth = <P extends any>(WrappedComponent: ComponentType<P>) =>
  function WithAuthWrapper(props: any) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const { replace } = useRouter();

    const { currentUser, logged_in } = useUser(
      ({ user, logged_in }) => ({ currentUser: user, logged_in }),
      shallow
    );

    useEffect(() => {
      setIsLoggedIn(logged_in);

      !logged_in && replace("/signin");
    }, [logged_in, replace]);

    return isLoggedIn ? (
      <WrappedComponent currentUser={currentUser} {...props} />
    ) : (
      <Loading />
    );
  };

export default WithAuth;
