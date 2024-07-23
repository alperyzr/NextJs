'use client'
import React from 'react';
import Link from "next/link";

function Error(){
    return (
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1>An error has occurred. Sory for That!</h1>
          <Link
            href="/"
            style={{ textDecoration: "underline", fontSize: 20, marginTop: 8 }}
          >
            Go home
          </Link>
        </div>
      );
    }

export default Error;