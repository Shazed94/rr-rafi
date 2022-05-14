import React, { useRef, useState } from "react";
// import { InputLabel } from "@mui/material";
import { Link } from "react-router-dom";
import { Breadcrumb, Button, Col, Form, Row } from "react-bootstrap";
// import ImageUploading from "react-images-uploading";

const AddImage = () => {
  const imageTitle = useRef();
  const imageDesc = useRef();
  const imageLink = useRef();

  const handleImageGallery = (e) => {
    const title = imageTitle.current.value;
    const description = imageDesc.current.value;
    const image = imageLink.current.files[0];

    console.log(image);

    const imageData = { title, image, description };
    // console.log(imageData);

    fetch("https://rrkabel.trodad.com/api/v1/admin/photo-gallery/store", {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(imageData),
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

        <Breadcrumb.Item active>Upload Image</Breadcrumb.Item>
      </Breadcrumb>

      <div className="admin-card">
        <div className="admin-card-body">
          <div>
            <div className="mt-5">
              <Form onSubmit={handleImageGallery}>
                <span className="top-border"></span>
                <div className="form-header py-2">
                  <h5 className="form-title">Upload Image</h5>
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
                      Image title
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="image title"
                      ref={imageTitle}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose an image
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustom01"
                    className="mb-3"
                  >
                    <Form.Label className="label-title fw-bold">
                      Image Link
                    </Form.Label>

                    <Form.Control required type="file" ref={imageLink} />

                    <Form.Control.Feedback type="invalid">
                      Please choose an image
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
                    <Form.Control as="textarea" rows={5} ref={imageDesc} />
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

export default AddImage;
