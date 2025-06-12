export const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
};
  
export const pageTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.3,
};
  
export const containerVariants = {
      hidden: {},
      visible: {
          transition: {
              staggerChildren: 0.1,
              delayChildren: 0.1
          },
      },
};
  
export const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
};