import google_icon from "../../assets/google.png";

// Login Google Button Component
export const GoogleButton = () => {
  return (
    <button className="font-extrabold bg-black text-white py-4 px-12 rounded-full shadow-lg text-xs sm:text-base flex items-center gap-4">
      <img src={google_icon} alt="google icon" />
      Continue with Google
    </button>
  );
};

// TimeModal Cancel Button Component
interface CancelButtonProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CancelButton = ({ setShowModal }: CancelButtonProps) => {
  return (
    <button
      className="py-2 px-12 rounded-lg text-[#78716c]"
      onClick={() => setShowModal(false)}
    >
      Cancel
    </button>
  );
};

//TimeModal Save Button Component
export const SaveButton = () => {
  return (
    <button type="submit" className="py-2 px-12 rounded-lg bg-black text-white">
      Save
    </button>
  );
};

// SubmitModal Cancel Button Component
interface SubmitCancelButtonProps {
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SubmitCancelButton = ({ setSubmit }: SubmitCancelButtonProps) => {
  return (
    <button
      onClick={() => setSubmit(false)}
      className="font-extrabold text-base py-3 px-12 rounded-lg"
    >
      Cancel
    </button>
  );
};

// SubmitModal Confirm Button Component
interface SubmitConfirmButtonProps {
  setSuccessNoti: React.Dispatch<React.SetStateAction<boolean>>;
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SubmitConfirmButton = ({
  setSuccessNoti,
  setSubmit,
}: SubmitConfirmButtonProps) => {
  return (
    <button
      onClick={() => {
        setSuccessNoti(true);
        setSubmit(false);
      }}
      className="font-extrabold text-base py-3 px-12 rounded-lg text-white bg-dateBlack shadow-lg"
    >
      Confirm
    </button>
  );
};
