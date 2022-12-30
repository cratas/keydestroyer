import { withUrqlClient } from "next-urql";
import { Button, FormControl, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import { FormLabel } from "@mui/material";
import { useByeQuery, useHelloQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

type Props = {};

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log("RESULT", data);
    alert(JSON.stringify(data));
  };

  const [, getHello] = useHelloQuery();
  const [, getBye] = useByeQuery();

  return (
    <Layout>
      <FormControl
        onSubmit={async () => {
          console.log("hello");
          getBye();
        }}
      >
        <FormLabel>Email</FormLabel>
        <TextField
          type="text"
          {...register("Email", {
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        <FormLabel>Mobile number</FormLabel>
        <TextField
          type="tel"
          {...register("Mobile number", {
            required: true,
            maxLength: 11,
            minLength: 8,
          })}
        />

        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            color: "primary.main",
            backgroundColor: "secondary.main",
          }}
          size="medium"
          // onClick={() => getHello()}
        >
          Log In
        </Button>
      </FormControl>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Login);
