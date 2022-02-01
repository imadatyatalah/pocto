import { NextSeo } from "next-seo";

import Layout from "@/modules/settings/Layout";
import ProfileForm from "@/modules/settings/profile/ProfileForm";

import type { TCurrentUser, PoctoPage } from "@/types/index";

type Props = {
  currentUser: TCurrentUser;
};

const Profile: PoctoPage<Props> = ({ currentUser }) => {
  return (
    <>
      <NextSeo title="Profile settings" />

      <ProfileForm currentUser={currentUser} />
    </>
  );
};

Profile.authenticate = true;
Profile.getLayout = (page) => <Layout>{page}</Layout>;

export default Profile;
