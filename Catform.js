import Style from "../Styles/Cat.css";
import { useState } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Button } from "@mui/material";

import axios from "axios";

const url = "https://app.wakafoods.com/api/category/new";
const picurl = "https://www.linkpicture.com/q/imgfood.jpg";
const container = {
  height: "30vh",
  width: " 15vw",
  borderRadius: "10px",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  position: "relative",
  left: "17%",
  top: "-5vh",
  alignItems: "center",
  justifyContent: "center",
};

function Catform() {
  const [cat, setCat] = useState("");
  const [iconImg, setIconImg] = useState(picurl);
  const [step1, setStep1] = useState("");
  const [step2, setStep2] = useState("");
  const [step3, setStep3] = useState("");
  const [step4, setStep4] = useState("");
  const [read, setRead] = useState("");

  const imageHandler = (e) => {
    // const reader = new FileReader();
    // reader.onload = () => {
    //   if (reader.readyState === 2) {
    //     setIconImg(reader.result);
    //   }
    // };
    // console.log(reader);

   const file= e.target.files;
   for(let i=0;i<file.length;i++){
     let file1=file[i];
     console.log(file1.name);
     setRead(file1.name)

   }
  };

  

  const onSubmit = (e) => {
    e.preventDefault();

    const photoFormData = new FormData();
    photoFormData.append("file", read);
    photoFormData.append("name", cat);
    photoFormData.append("step1name", step1);
    photoFormData.append("step2name", step2);
    photoFormData.append("step3name", step3);
    photoFormData.append("step4name", step4);
    photoFormData.append("kitchen_id", 3);
    // console.log(photoFormData);
    axios({
      method: "POST",
      url: url,
      data: photoFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(res => {
      console.log("yeh we have", res);
    })
    .catch(er => {
      console.log("no data sorry ", er);
    });
  };

  return (
    <div>
      <div class="Form-body1 container">
        <form enctype="multipart/form-data">
          <div style={container}>
            {/* <h6 className="heading">Add your Image</h6> */}
            <div className="img-holder">
              <img src={iconImg} alt="" id="img" className="img" />
            </div>
            <input
              type="file"
              name="file"
              
               onChange={imageHandler}
            />
            <div className="label">
              <label className="image-upload" htmlFor="input">
                <AddAPhotoIcon />
                Add Photo
              </label>
            </div>
          </div>
          <div class="input-container">
            <label class="abc">Category:</label>

            <input
              value={cat}
              onChange={(e) => setCat(e.target.value)}
              class="main-input form-input form-control"
              type="text"
              placeholder="Enter Category"
              name="name"
              required
            />

            <label class="abc">Step 1</label>

            <input
              value={step1}
              onChange={(e) => setStep1(e.target.value)}
              class="main-input form-input form-control"
              type="text"
              placeholder="Enter Step 1"
              name="step1name"
              required
            />

            <label class="abc">Step 2</label>

            <input
              value={step2}
              onChange={(e) => setStep2(e.target.value)}
              class="main-input form-input form-control"
              type="text"
              placeholder="Enter Step 2"
              name="step2name"
              required
            />

            <label class="abc">Step 3</label>

            <input
              value={step3}
              onChange={(e) => setStep3(e.target.value)}
              class="main-input form-input form-control"
              type="text"
              placeholder="Enter step 3"
              name="step3name"
              required
            />

            <label class="abc">Step 4</label>

            <input
              value={step4}
              onChange={(e) => setStep4(e.target.value)}
              class="main-input form-input form-control"
              type="text"
              name='step4name'
              placeholder="Enter step 4"
              required
            />
          </div>

          <Button
            variant="contained"
            onClick={onSubmit}
            style={{ width: "10vw", position: "relative", left: "5vw" }}
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Catform;