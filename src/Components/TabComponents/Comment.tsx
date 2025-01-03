import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { InputProps } from "../../useForm/useForm";

interface CommentProps {
  register: UseFormRegister<InputProps>;
  errors: FieldValues;
}

function Comment({ register, errors }: CommentProps): React.ReactElement {
  return (
    <div className="pl-6 pr-8">
      {/* Comment-box */}
      <textarea
        {...register("comment", {
          required: "This field cannot be left empty",
        })}
        placeholder="Work description here (eg. Attended morning team huddle)"
        className="bg-lightGrayBg border border-lightGray py-3 px-4 outline-none rounded-lg w-full h-32"
      ></textarea>
      {errors.comment && (
        <p className="text-xs text-red">{errors.comment.message}</p>
      )}
    </div>
  );
}

export default Comment;
