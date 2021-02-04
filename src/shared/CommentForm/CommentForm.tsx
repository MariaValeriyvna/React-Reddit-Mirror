import styles from "./commentform.css";
import React from "react";
import { merge } from "../../utils/js/merge";
import {
  generateId,
  generateRandomString,
} from "../../utils/react/generateRandomIndex";
import { GenericList } from "../GenericList";
import {
  Copyicon,
  Tagicon,
  Imgicon,
  SaveCommenticon,
  Personicon,
  Renewicon,
  Microphoneicon,
  Linkicon,
  Commentsicon,
  Penicon,
  Lettericon,
  Pdficon,
} from "../Icons";
import { useFormik } from "formik";

interface ICommentFormProps {
  placeHolder: string;
  textbtn: string;
  id?: string;
  nameAuthor?: string;
  key?: string;
  isOpen?: boolean;
  onClick: () => void;
  value?: string;
  valueWithName?: string;
}

export function CommentForm({
  placeHolder,
  textbtn,
  isOpen = true,
  id,
  onClick,
  value,
}: ICommentFormProps): JSX.Element {
  const idForm = generateRandomString() + id;
  const formik = useFormik({
    initialValues: { comment: value, id: idForm },
    onSubmit: (values) => {
      console.log("submit", values);
    },
    validate: (values) => {
      const errors = { comment: "Необходимо ввести более 2-х символов" };
      if (!values.comment) return errors;
    },
  });
  const list = [
    { As: "li" as const, img: <Tagicon /> },
    { As: "li" as const, img: <Copyicon /> },
    { As: "li" as const, img: <Imgicon /> },
    { As: "li" as const, img: <SaveCommenticon /> },
    { As: "li" as const, img: <Personicon /> },
    { As: "li" as const, img: <Personicon /> },
    { As: "li" as const, img: <Renewicon /> },
    { As: "li" as const, img: <Linkicon /> },
    { As: "li" as const, img: <Microphoneicon /> },
    { As: "li" as const, img: <Commentsicon /> },
    { As: "li" as const, img: <Penicon /> },
    { As: "li" as const, img: <Lettericon /> },
    { As: "li" as const, img: <Pdficon /> },
  ].map(generateId);

  if (!isOpen) return <div />;

  return (
    <>
      <form
        className={styles.form}
        id={formik.values.id}
        onSubmit={formik.handleSubmit}
      >
        <textarea
          className={styles.inputText}
          name="comment"
          placeholder={placeHolder}
          value={formik.values.comment}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.comment && formik.errors.comment ? (
          <div className={styles.error}>{formik.errors.comment}</div>
        ) : null}
        <div className={styles.commentEdit}>
          <ul className={styles.ulEdit}>
            <GenericList list={list.map(merge({ onClick: onClick }))} />
          </ul>
          <button type="submit" className={styles.btnSubmit}>
            {textbtn}
          </button>
        </div>
      </form>
    </>
  );
}
