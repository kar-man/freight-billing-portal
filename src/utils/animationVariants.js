export const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
};

export const pageTransition = {
    type: 'tween',
    ease: 'linear',
    duration: 0.2,
};

export const containerVariants = {
      hidden: {},
      visible: {
          transition: {
              staggerChildren: 0.03, // Reduced from 0.1
              delayChildren: 0.05    // Reduced from 0.1
          },
      },
};

export const itemVariants = {
      hidden: { y: 10, opacity: 0 }, // Reduced y offset from 20 to 10
      visible: { y: 0, opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } }, // Reduced duration from 0.4 to 0.2, changed ease
};

// Variant for components that should not have opacity animation (like search bars)
export const noFadeItemVariants = {
      hidden: { y: 10, opacity: 1 }, // No opacity change, only position
      visible: { y: 0, opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
};
