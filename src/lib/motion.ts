export const containerVariants = {
  entered: { transition: { staggerChildren: 0.2 } },
};

// Starting the keyframes in the browser leaves the prerendered content in place.
export const itemVariants = {
  entered: { y: [30, 0], transition: { duration: 0.6 } },
};
