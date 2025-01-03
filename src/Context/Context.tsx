import React, { createContext, useState } from "react";

interface TimeContextProps {
  successNoti: boolean;
  setSuccessNoti: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TimeContext = createContext<TimeContextProps>({
  successNoti: false,
  setSuccessNoti: () => {},
});

interface TimeProviderProps {
  children: React.ReactNode;
}

export const TimeProvider = ({ children }: TimeProviderProps) => {
  const [successNoti, setSuccessNoti] = useState<boolean>(false);

  const values = { successNoti, setSuccessNoti };

  return <TimeContext.Provider value={values}>{children}</TimeContext.Provider>;
};
