import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import UserImg from "./user.png";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  avatar: {
    marginRight: 30,
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
    marginLeft: 30,
  },
}));


const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

export default function ProfileImage(props) {
  const classes = useStyles();
  const [files, setFiles] = useState([]);
  const {
    getRootProps,
    getInputProps,
    open,
  } = useDropzone({
    accept: "image/*",
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt=" "/>
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <div >
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {/* {files == 0? <Avatar onClick={open} className={classes.avatar} /> : <aside style={thumbsContainer} className={classes.avatar}>{thumbs}</aside>} */}
        {files === 0 ? (
          <img
            onClick={open}
            src={UserImg}
            alt="UserImg"
            className={classes.avatar}
          />
        ) : (
          <aside style={thumbsContainer} className={classes.avatar}>
            {thumbs}
          </aside>
        )}
      </div>
      <aside>
        {/* <h4>Files</h4> */}
        {/* <ul>{filepath}</ul> */}
      </aside>
      {/* <aside style={thumbsContainer}>{thumbs}</aside> */}
    </div>
  );
}

<ProfileImage />;
