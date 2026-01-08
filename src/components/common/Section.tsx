import { Box, BoxProps } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const Section = ({ children, sx, ...props }: BoxProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <Box
      ref={ref}
      component={motion.section}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      sx={{ py: { xs: 8, md: 12 }, ...sx }}
      {...props}
    >
      {children}
    </Box>
  );
};
