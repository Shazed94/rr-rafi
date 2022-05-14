import React, { useRef } from "react";
// import { InputLabel } from "@mui/material";
import { Link } from "react-router-dom";
import { Breadcrumb, Button, Col, Form, Row } from "react-bootstrap";

const AddVideo = () => {
  // const onSubmit = (e) => {
  //   console.log(e);
  //   e.preventDefault();

  //   const form = e.currentTarget;
  //   console.log("Form",form);
  // };

  const videoTitle = useRef();
  const videoLink = useRef();
  const videoDesc = useRef();

  const handleVideoGallery = (e) => {
    const title = videoTitle.current.value;
    const video = videoLink.current.value;
    const description = videoDesc.current.value;

    // console.log(video, link, desc);

    const videoData = { title, video, description };

    fetch("https://rrkabel.trodad.com/api/v1/admin/video-gallery/store", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(videoData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data.insertedId) {
        //   alert('data added successfully')
        //   e.target.reset();
        // }
      });

    // console.log(newUser);
    e.preventDefault();
  };
  return (
    <div className="page-wrapper">
      <Breadcrumb className="breadcrumb-wrapper">
        <Breadcrumb.Item as={Link} to="admin" className="breadcrumb-item">
          Dashboard
        </Breadcrumb.Item>

        <Breadcrumb.Item active>Upload Video</Breadcrumb.Item>
      </Breadcrumb>

      <div className="admin-card">
        <div className="admin-card-body">
          <div>
            <div className="mt-5">
              <Form onSubmit={handleVideoGallery}>
                <span className="top-border"></span>
                <div className="form-header py-2">
                  <h5 className="form-title">Upload Video</h5>
                  <hr />
                </div>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustom01"
                    className="mb-3"
                  >
                    <Form.Label className="label-title fw-bold">
                      Video title
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="video title"
                      ref={videoTitle}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a video
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustom01"
                    className="mb-3"
                  >
                    <Form.Label className="label-title fw-bold">
                      Video Link
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="video link"
                      ref={videoLink}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a video
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom02"
                    className="mb-3"
                  >
                    <Form.Label className="label-title fw-bold">
                      Description
                    </Form.Label>
                    <Form.Control as="textarea" rows={5} ref={videoDesc} />
                  </Form.Group>
                </Row>

                <Button
                  type="submit"
                  className="btn-submit mt-5 rounded-3 border-0 d-flex justify-content-center"
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVideo;
