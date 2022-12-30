import React, { forwardRef } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

export type LinkProps = Omit<MuiLinkProps, "href"> &
  Omit<NextLinkProps, "as" | "passHref" | "children">;

const CustomLink = forwardRef<HTMLAnchorElement, LinkProps>(function CustomLink(
  { href, ...muiProps },
  ref
) {
  return (
    <NextLink href={href} style={{ textDecoration: "none" }} passHref>
      <MuiLink
        ref={ref}
        underline="none"
        fontWeight="bold"
        sx={{ color: "secondary.main" }}
        {...muiProps}
        component="span"
      />
    </NextLink>
  );
});

export default CustomLink;
