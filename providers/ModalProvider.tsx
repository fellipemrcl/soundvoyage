"use client";

import AuthModal from "@/components/AuthModal";
import SubsribeModal from "@/components/SubscribeModal";
import UploadModal from "@/components/UploadModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AuthModal />
      <UploadModal />
      <SubsribeModal />
    </>
  );
};

export default ModalProvider;
