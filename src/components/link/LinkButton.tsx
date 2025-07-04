'use client';
import Link, { LinkProps } from 'next/link';
import { Button, ButtonProps } from '@chakra-ui/react';

type ChakraAndNextProps = ButtonProps & LinkProps;

export default function LinkButton({
  href,
  children,
  prefetch = true,
  ...props
}: ChakraAndNextProps) {
  return (
    <Link href={href} prefetch={prefetch}>
      <Button variant="a" {...props}>
        {children}
      </Button>
    </Link>
  );
}